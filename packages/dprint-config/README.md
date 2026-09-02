# Poool dprint config

> Common dprint rules we share between projects at Poool

## Installation

```bash
yarn add dprint @poool/dprint-config --dev
```

## Usage

```json name=".dprintrc.json"
{
  "$schema": "https://dprint.dev/schemas/v0.json",
  "extends": ["node_modules/@poool/dprint-config/lib/recommended.json"]
}
```
