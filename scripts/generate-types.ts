import ejs from 'ejs';
import fs from 'fs';

interface ISpecFile {
  dirent: fs.Dirent;
  path: string;
}

async function isLatest(dir: string) {
  const parts = dir.split('/');
  const current = parts.pop();
  const parentDir = parts.join('/');
  const dirs = await fs.promises.readdir(parentDir);
  const latestDir = dirs.sort().pop(); // latest bubbles to end since date is sortable
  return latestDir === current;
}

async function getFiles(
  dir: string,
  files?: ISpecFile[]
): Promise<ISpecFile[]> {
  if (!files) {
    files = new Array();
  }
  try {
    const arrayOfFiles = await fs.promises.opendir(dir);
    // console.log(arrayOfFiles);
    for await (const dirent of arrayOfFiles) {
      if (dirent.isDirectory()) {
        await getFiles(`${dir}/${dirent.name}`, files);
        continue;
      }
      if (dirent.name !== 'service-2.json') {
        continue;
      }
      // check that this is the latest API (it's all we support)
      if (!(await isLatest(dir))) {
        continue;
      }
      files.push({ dirent, path: `${dir}/${dirent.name}` });
    }
  } catch (e) {
    console.log(e);
  }
  return files;
}

async function generateTemplate(serviceFiles: ISpecFile[]) {
  const templateFile = await fs.promises.readFile(
    './scripts/template/service.ejs',
    {
      encoding: 'utf8',
    }
  );
  let template = ejs.compile(templateFile, {});
  const renderer = [];
  const indexed = [];
  for await (const specFile of serviceFiles) {
    const specContent = await fs.promises.readFile(specFile.path, {
      encoding: 'utf8',
    });
    const spec = JSON.parse(specContent);
    const contents = template(spec);
    indexed.push(spec.metadata.endpointPrefix);
    renderer.push(
      fs.promises.writeFile(
        `src/data/${spec.metadata.endpointPrefix}.ts`,
        contents
      )
    );
  }
  await Promise.all(renderer);
  await generateIndexTemplate(indexed);
}

async function generateIndexTemplate(serviceFiles: string[]) {
  const templateFile = await fs.promises.readFile(
    './scripts/template/service.index.ejs',
    {
      encoding: 'utf8',
    }
  );
  let template = ejs.compile(templateFile, {});
  const contents = template({ fileNames: new Set(serviceFiles.sort()) });
  fs.promises.writeFile('src/data/index.ts', contents);
}

async function main() {
  const serviceFiles = await getFiles('./data/botocore/data');
  try {
    // make sure this folder exists
    fs.promises.mkdir('src/data', { recursive: true });
  } catch (e) {
    console.log(e);
  }
  await generateTemplate(serviceFiles);
}

main();
