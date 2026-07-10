import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import pooolint from '@poool/eslint-config';
import react from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const reactConfig: Linter.Config[] = defineConfig(
  react.configs['recommended-typescript'],
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      '@eslint-react/jsx-no-children-prop': ERROR,
      '@eslint-react/dom-no-void-elements-with-children': ERROR,

      '@stylistic/jsx-closing-bracket-location': [WARNING, 'line-aligned'],
      '@stylistic/jsx-closing-tag-location': WARNING,
      '@stylistic/jsx-curly-brace-presence': [WARNING, {
        props: 'never',
        children: 'never',
      }],
      '@stylistic/jsx-equals-spacing': [WARNING, 'never'],
      '@stylistic/jsx-props-no-multi-spaces': WARNING,
      '@stylistic/jsx-tag-spacing': [WARNING, {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }],
      '@stylistic/jsx-wrap-multilines': [WARNING, {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      }],
      '@stylistic/jsx-self-closing-comp': [WARNING, {
        component: true,
        html: true,
      }],
      '@stylistic/jsx-pascal-case': WARNING,

      'jsx-quotes': [WARNING, 'prefer-double'],
    },
  },
);

const reactConfigHooks: Linter.Config[] = defineConfig(
  reactHooks.configs.flat.recommended,
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react-hooks/immutability': OFF,
      'react-hooks/refs': OFF,
      'react-hooks/set-state-in-effect': OFF,
    },
  },
);

export const configs = {
  recommended: defineConfig(
    pooolint.configs.recommended,
    reactConfig,
    reactConfigHooks,
  ),
  react: defineConfig(reactConfig),
  reactHooks: defineConfig(reactConfigHooks),
  base: defineConfig(pooolint.configs.recommended),
};

export default { configs };
