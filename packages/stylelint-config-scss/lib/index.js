/**
 * Standard CSS style for SCSS
 *
 * @see https://github.com/kristerkari/stylelint-scss
 */

module.exports = {
  extends: ['@drmikecrowe/stylelint-config'],

  plugins: ['stylelint-scss'],

  // Overrides rules
  rules: {
    // =============================== //
    // Disable rules overrides by SCSS //
    // =============================== //
    'at-rule-no-unknown': null,

    // Disallow whitespace before the colon in $-variable declarations
    'dollar-variable-colon-space-before': 'never',

    // =============================== //
    // SCSS Rules //
    // =============================== //
    // Disallow unknown at-rules
    'scss/at-rule-no-unknown': true,

    // Requires a whitespace before the colon in $-variable declarations
    'scss/dollar-variable-colon-space-after': 'always',

    // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers
    'scss/dollar-variable-no-missing-interpolation': true,

    // Specify a pattern for Sass-like variables
    'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',

    // Require whitespace after the // in //-comments
    'scss/double-slash-comment-whitespace-inside': 'always',

    // Disallow linebreaks before Sass operators
    'scss/operator-no-newline-before': true,

    // Disallow unspaced operators in Sass operations
    'scss/operator-no-unspaced': true,

    // Disallow redundant nesting selectors (&)
    'scss/selector-no-redundant-nesting-selector': true,
  },
}
