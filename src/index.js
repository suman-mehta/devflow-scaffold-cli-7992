import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

function showHelp() {
  console.log(`devflow-scaffold

Usage:
  devflow-scaffold init <project-name>   Create a new project scaffold
  devflow-scaffold --help                Show help`);
}

async function initProject(name) {
  const projectPath = resolve(process.cwd(), name);
  await mkdir(projectPath, { recursive: true });
  const pkg = {
    name,
    version: "0.1.0",
    scripts: {
      start: "node index.js"
    }
  };
  await writeFile(resolve(projectPath, 'package.json'), JSON.stringify(pkg, null, 2));
  await writeFile(resolve(projectPath, 'index.js'), `console.log('Hello from ${name}!');
`);
  console.log(`Project "${name}" created successfully.`);
}

async function main() {
  const args = process.argv.slice(2);
  if (!args.length || args[0] === '--help') {
    showHelp();
    process.exit(0);
  }
  if (args[0] === 'init' && args[1]) {
    await initProject(args[1]);
    process.exit(0);
  }
  console.error('Invalid command. Use --help for usage.');
  process.exit(1);
}

main();