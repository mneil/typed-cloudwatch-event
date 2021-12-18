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

interface IMember {
  required: boolean;
  type: string;
}

interface IOperation {
  name: string;
  shape: any;
  members: IMember[];
}

function formatTemplateData(spec: any) {
  const out = {
    operations: new Array<IOperation>(),
  };

  const typeMap: { [key: string]: string } = {
    string: 'string',
    boolean: 'boolean',
    list: '[]',
    long: 'number',
    integer: 'number',
    exponential: 'number',
    timestamp: 'Date',
    map: '{[key: string]: any}',
  };
  function toMemberType(shape: any, member: any) {
    const theType = typeMap[shape.type];
    if (theType) {
      return theType;
    }
    if (shape.type == 'structure') {
      return member;
    }
    return 'unknown';
  }
  // // we're only interested in operations with inputs
  // const operations = Object.values(spec.operations).filter(
  //   (value: any) => value.input
  // );
  Object.keys(spec.operations).forEach((operationName) => {
    const operation: any = spec.operations[operationName];
    const shape: any = spec.shapes[operation.input.shape];
    const members: IMember[] = [];
    for (const [member, details] of Object.entries<{ [key: string]: any }>(
      shape.members
    )) {
      members.push({
        required: shape.required?.includes(member),
        type: toMemberType(spec.shapes[details.shape], details.shape),
      });
    }
    out.operations.push({
      name: operationName,
      shape,
      members,
    });
  });
  // <% for (const [key, shape] of Object.entries(shapes)) {
  //   if(shape.type !== 'structure') {
  //     continue;
  //   }
  // %>
  // interface <%= key %> {
  //   <%_
  //   for (const [member, details] of Object.entries(shape.members)) {
  //   -%>
  //   readonly <%- member %>: <%- toMemberType(shapes[details.shape], details.shape) %>;
  //   <%_ }; -%>
  // }
  // <% }; %>
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
    const contents = template(formatTemplateData(spec));
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
