import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { execa } from 'execa';

describe('@poool/dprint-config', () => {
  const $ = execa({ preferLocal: true, reject: false });

  it('should pass base rules', async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const fixturePath = path.resolve(dirname, '../../../tests/fixtures/format-errors.ts');
    const configPath = path.resolve(dirname, '../../../tests/fixtures/dprint.json');
    const content = await readFile(fixturePath, 'utf8');

    const { stdout } = await $({ input: content })`
      dprint fmt --stdin ${fixturePath} --config ${configPath}
    `;

    expect(stdout).toMatchSnapshot();
  });
});
