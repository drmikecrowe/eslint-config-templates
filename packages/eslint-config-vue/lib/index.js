/**
 * Based on Vue.js rules
 *
 * @see https://eslint.vuejs.org/rules
 */

module.exports = {
  extends: [
    "@YOUR_SCOPE",
    // Vue style guide
    "plugin:vue/recommended",
  ],

  plugins: ["vue"],

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },

  // Rules overrides
  rules: {
    /**
     * Disallow use of v-html to prevent XSS attack
     *
     * @see https://eslint.vuejs.org/rules/no-v-html.html
     */
    "vue/no-v-html": "off",

    // Put multiple attrs in multiple lines
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
};
