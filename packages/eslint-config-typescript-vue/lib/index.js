/**
 * Vue.js Rules with Typescript Rules
 */

module.exports = {
  extends: ['@drmikecrowe/vue', '@drmikecrowe/typescript'],

  // Override the `parser` in vue and typescript rules
  parser: 'vue-eslint-parser',

  // TODO: `babel-eslint` in `@drmikecrowe/eslint-config-vue` is useless
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
}
