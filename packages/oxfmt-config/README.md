# Poool Oxfmt config

> Common Oxfmt rules we share between projects at Poool

## Installation

```bash
yarn add oxfmt @poool/oxfmt-config --dev
```

## Usage

`oxfmt` does not have an `extends` property like `oxlint` does, so you'll need to use the JS/TS API inside `oxfmt.config.ts` instead of the `.oxfmtrc.json` file:

```ts
import { defineConfig } from 'oxfmt';
import poool from '@poool/oxfmt-config';

export default defineConfig({
  ...poool.recommended,
  // Add your personal config
});
```
