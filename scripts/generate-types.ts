import ejs from 'ejs';
import fs from 'fs';

interface ISpecFile {
  dirent: fs.Dirent;
  path: string;
}
interface IMember {
  name: string;
  required: boolean;
  type: string;
}
interface IShape {
  name: string;
  members: IMember[];
}
/**
 * Given a service file directory it will check
 * the parent directory to make sure this service
 * file is in the latest version folder or not.
 * @param dir
 */
async function isLatest(dir: string) {
  const parts = dir.split('/');
  const current = parts.pop();
  const parentDir = parts.join('/');
  const dirs = await fs.promises.readdir(parentDir);
  const latestDir = dirs.sort().pop(); // latest bubbles to end since date is sortable
  return latestDir === current;
}
/**
 * Get service files.
 * @param dir
 * @param files
 */
async function getFiles(
  dir: string,
  files?: ISpecFile[]
): Promise<ISpecFile[]> {
  if (!files) {
    files = new Array();
  }
  try {
    const arrayOfFiles = await fs.promises.opendir(dir);
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
/**
 * A map of types from boto / Python to Typescript
 */
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
/**
 * Given a member and it's shape will try and map
 * that member to the correct type
 *
 * @param shape
 * @param member
 */
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
/**
 * Given the spec and a specific shape it will format
 * a list of all it's members
 * @param spec
 * @param shape
 */
function formatMembers(spec: any, shape: any) {
  const members: IMember[] = [];
  for (const [member, details] of Object.entries<{ [key: string]: any }>(
    shape.members
  )) {
    members.push({
      name: member,
      required: shape.required?.includes(member),
      type: toMemberType(spec.shapes[details.shape], details.shape),
    });
  }
  return members;
}
/**
 * Given the spec it will create a Set of all API methods in
 * the service spec
 * @param spec
 */
function formatTemplateData(spec: any) {
  const out = new Set<IShape>();
  // we're only interested in operations with inputs
  const operations = Object.entries<{ [key: string]: any }>(spec.operations);
  for (const [key, operation] of operations) {
    // Object.keys(spec.operations).forEach((operationName) => {
    if (!operation.input) {
      continue;
    }
    const shape: any = spec.shapes[operation.input.shape];
    const members: IMember[] = formatMembers(spec, shape);
    out.add({
      name: key,
      members,
    });
  }
  const shapes = Object.entries<{ [key: string]: any }>(spec.shapes);
  for (const [key, shape] of shapes) {
    if (shape.type !== 'structure') {
      continue;
    }
    const members: IMember[] = formatMembers(spec, shape);
    out.add({
      name: key,
      members,
    });
  }
  if (!out.size) {
    throw new Error('Nothing out');
  }
  return out;
}
/**
 * Creates the actual typescript files for services
 * when given a list of service files to create from
 *
 * @param serviceFiles
 */
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
    const data = formatTemplateData(spec);
    const contents = template({
      metadata: spec.metadata,
      data: data,
    });
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
/**
 * Writes the exports index.ts in the data so that
 * we can access all the generated types
 * @param serviceFiles
 */
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
/**
 * Application entrypoint
 */
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
