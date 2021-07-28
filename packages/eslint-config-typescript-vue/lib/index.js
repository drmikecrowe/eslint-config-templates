/**
 * Vue.js Rules with Typescript Rules
 */

module.exports = {
  extends: ["@YOUR_SCOPE/vue", "@YOUR_SCOPE/typescript"],

  // Override the `parser` in vue and typescript rules
  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
  },
};
