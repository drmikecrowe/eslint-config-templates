module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },

  rules: {
    /**
     * Requires the use of single quotes wherever possible
     *
     * @see https://eslint.org/docs/rules/quotes
     */
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    /**
     * Requires the use of `const` or `let` instead of `var`
     *
     * @see https://eslint.org/docs/rules/no-var
     */
    'no-var': ['error'],

    /**
     * Requires the use of trailing commas in object and array literals
     *
     * @see https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': ['error', 'always-multiline'],
  },
}
