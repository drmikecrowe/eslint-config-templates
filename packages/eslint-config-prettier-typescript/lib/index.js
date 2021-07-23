/**
 * TypeScript ESLint Rules with Prettier
 */

module.exports = {
  extends: [
    '@drmikecrowe/typescript',
    '@drmikecrowe/prettier/lib/prettier',
    'prettier/@typescript-eslint',
  ],
}
