/*
 * Copyright (c) 2017, Feedeo AB <hugo@feedeo.io>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  extends: [
    'standard'
  ],
  env: {
    node: true
  },
  plugins: [
    'json',
    'mocha',
    'promise',
    'standard',
    'unicorn'
  ],
  rules: {
    'promise/always-return': 'off',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'error',
    'promise/no-callback-in-promise': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-identical-title': 'error',
    'unicorn/filename-case': [ 'error', { 'case': 'kebabCase' } ],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-new-buffer': 'error'
  },
  globals: {
    'describe': true,
    'it': true,
    'before': true,
    'beforeEach': true,
    'after': true,
    'afterEach': true,
    'td': true,
    '_': true,
    'should': true
  }
}
