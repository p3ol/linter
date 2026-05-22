# Poool Oxlint config

> Common Oxlint rules we share between projects at Poool

## Installation

```bash
yarn add oxlint oxlint-tsgolint @poool/oxlint-config --dev
```

## Usage

```json
{
  "$schema": "node_modules/oxlint/configuration_schema.json",
  "extends": [
    "node_modules/@poool/oxlint-config/lib/recommended.json"
  ]
}
```

### Usage with React projects

```json
{
  "$schema": "node_modules/oxlint/configuration_schema.json",
  "extends": [
    "node_modules/@poool/oxlint-config/lib/recommended.json",
    "node_modules/@poool/oxlint-config/lib/react/recommended.json"
  ]
}
```

### Usage with NextJS projects

```json
{
  "$schema": "node_modules/oxlint/configuration_schema.json",
  "extends": [
    "node_modules/@poool/oxlint-config/lib/recommended.json",
    "node_modules/@poool/oxlint-config/lib/react/recommended.json",
    "node_modules/@poool/oxlint-config/lib/next/recommended.json"
  ]
}
```
