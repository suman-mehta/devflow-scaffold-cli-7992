import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import os from 'node:os';

test('CLI creates project scaffold', async (t) => {
  const tmpDir = await mkdtemp(join(os.tmpdir(), 'devflow-test-'));
  const projectName = 'sample-app';
  const cliPath = resolve('src', 'index.js');

  // Execute the CLI to generate a scaffold
  execFileSync(process.execPath, [cliPath, 'init', projectName], { cwd: tmpDir, stdio: 'ignore' });

  const projectPath = resolve(tmpDir, projectName);
  const pkgPath = join(projectPath, 'package.json');
  const indexPath = join(projectPath, 'index.js');

  // Verify package.json content
  const pkgContent = JSON.parse(await readFile(pkgPath, 'utf8'));
  assert.equal(pkgContent.name, projectName);

  // Verify index.js content
  const indexContent = await readFile(indexPath, 'utf8');
  assert.match(indexContent, /Hello from sample-app/);

  // Clean up temporary directory
  await rm(tmpDir, { recursive: true, force: true });
});