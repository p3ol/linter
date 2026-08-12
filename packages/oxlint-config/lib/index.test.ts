import { execa } from 'execa';

describe('@poool/oxlint-config', () => {
  const $ = execa({ preferLocal: true, reject: false });

  it('should pass base rules', async () => {
    await expect($`
      oxlint
        --config packages/oxlint-config/lib/recommended.json
        --format agent
        tests/fixtures/base-rules.ts
    `).resolves.toMatchSnapshot();
  });
});
