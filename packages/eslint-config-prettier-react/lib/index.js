/**
 * React.js ESLint Rules with Prettier
 */

module.exports = {
  extends: [
    '@drmikecrowe/react',
    // Extends preset about prettier
    '@drmikecrowe/prettier/lib/prettier',
    'prettier/react',
  ],
}
