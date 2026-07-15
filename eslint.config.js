// @ts-check

import { defineConfig, globalIgnores } from 'eslint/config';
import oxlint from 'eslint-plugin-oxlint';
import pooolConfig from '@poool/eslint-config';
import pooolReactConfig from '@poool/eslint-config-react';

const __dirname = import.meta.dirname;

export default defineConfig(
  globalIgnores(['node_modules', '**/dist', '.yarn', '.turbo']),
  pooolConfig.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 0,
    },
  },
  {
    files: ['*.ts', '**/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 0,
    },
  },
  pooolReactConfig.configs.react,
  ...oxlint.configs['flat/all'],
);
