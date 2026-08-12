// import/newline-after-import
import 'node:path';
const newLineAfter = 1;

// perfectionist/sort-imports
import 'node:fs';

import type _stylistic from '@stylistic/eslint-plugin';
import '@stylistic/eslint-plugin';

import '~/index.ts';
import * as core from '@p3ol/core';

import './index.ts';

// @stylistic/arrow-parens
const arrowParens = (bar) => newLineAfter + bar;

// @stylistic/comma-dangle
const commaDangle = {
  bar: arrowParens(1)
};

// @stylistic/indent
  if (commaDangle) {
    commaDangle.bar = 2;
  }

// @stylistic/max-len
const maxLen = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// @stylistic/no-multiple-empty-lines


// @stylistic/no-trailing-spaces
const trailingSpace = maxLen; 

// @stylistic/padded-blocks
if (trailingSpace) {

  commaDangle.bar = 3;

}

// @stylistic/padding-line-between-statements
const paddingLine = 1;
if (paddingLine) {
  commaDangle.bar = 4;
}

const returnPaddingLine = () => {
  const p = 1;
  return p;
};

// @stylistic/semi
const semi = returnPaddingLine()

// @stylistic/space-before-function-paren
const spaceBeforeFunctionParen = function() {
  return semi;
};

// @stylistic/spaced-comment
//comment

// @stylistic/template-curly-spacing
const curlySpacing = `foo${ spaceBeforeFunctionParen()}`;

// camelcase
// TODO: doesn't exist yet (canceled -> https://github.com/oxc-project/oxc/pull/16908)
const camel_case = curlySpacing;

// default-param-last
function defaultParamLast (a = 1, b: string) {
  return a + b;
}

// no-console
console.log(camel_case);

// no-empty
if (defaultParamLast(1, '2')) {

}

// no-unused-vars
const unusedVar = 1;

// constructor-super
class A extends Object {
  constructor () { }
}

class C extends null {
  constructor () {
    super();
  }
}

// for-direction
for (let i = 0; i < 10; i--) {
  new A();
}

for (let i = 10; i >= 0; i++) {
  new C();
}

// getter-return
const getterReturn = {
  get name () {
    // no return
  },
};

// no-async-promise-executor
const _asyncPromise = new Promise(async resolve => {
  resolve(getterReturn.name);
});

// no-case-declarations
switch (curlySpacing) {
  case 'foo':
    const _curlySpacingDeclaration = 1;
    break;
}

// no-class-assign
class _ClassAssign {}
_ClassAssign = 1;

// no-const-assign
const constAssign = 1;
constAssign = 2;

// no-cond-assign
if (constAssign = 1) {
  // do something
}

// no-compare-neg-zero
if (constAssign === -0) {
  // do something
}

// no-constant-binary-expression
const constantBinaryExpression = true === true;

// no-constant-condition
if (true) {
  // do something
}

// no-control-regex
const _controlRegex = /[\x00-\x1F]/.test(constantBinaryExpression.toString());

// no-debugger
debugger;

// no-delete-var
// TODO: not testable, ts breaks oxlint
// let deleteVar = 1;
// delete deleteVar;

// no-dupe-class-members
// TODO: not testable, ts breaks oxlint
// class DupeClassMembers {
//   method() {}
//   method() {}
// }

// no-dupe-else-if
if (defaultParamLast(1, '1')) {
  // do something
} else if (defaultParamLast(1, '2')) {
  // do something else
} else if (defaultParamLast(1, '2')) {
  // do something else again
}

// no-dupe-keys
const dupeKeys = {
  key: 1,
  key: 2,
};

// no-duplicate-case
switch (dupeKeys.key) {
  case 1:
    // do something
    break;
  case 2:
    // do something else
    break;
  case 2:
    // do something else again
    break;
}

// no-empty-character-class
const _emptyCharacterClass = /[]/.test('');

// no-empty-pattern
const { key: {} } = dupeKeys;

// no-empty-static-block
class _EmptyStaticBlock {
  static {}
}

// no-ex-assign
try {
  throw new Error('test');
} catch (err) {
  err = new Error('test2');
  defaultParamLast(1, (err as Error).message);
}

// no-extra-boolean-cast
const extraBooleanCast = Boolean(!!constantBinaryExpression);

// no-fallthrough
switch (extraBooleanCast) {
  case true:
    // do something
  default:
    // do something else again
    break;
}

// no-func-assign
function _funcAssign () {
  return 1;
}

_funcAssign = function () {
  return 2;
};

// no-global-assign
Object = null;

// no-import-assign
// TODO: should fail but doesn't
Object.assign(core, { foo: 'bar' });

// no-invalid-regexp
const _invalidRegExp = new RegExp('[');

// no-irregular-whitespace
const _irregularWhitespace = ' bar';

// no-loss-of-precision
const _lossOfPrecision = 9007199254740993;

// no-misleading-character-class
const _misleadingCharacterClass = /^[👍]$/;

// no-new-native-nonconstructor
// TODO: should fail, but TS probably prevents it
// const _newNativeNonConstructor = new Symbol('foo');

// no-obj-calls
const _objCalls = Math();
