/**
 * Prettier Config
 *
 * @see https://prettier.io/docs/en/options.html
 */

module.exports = {
  // Maximum line length
  printWidth: 120,

  // Specify the number of spaces per indentation-level
  tabWidth: 2,

  // Indent lines with tabs instead of spaces
  useTabs: false,

  // Use semicolons or not
  semi: true,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Change when properties in objects are quoted
  quoteProps: 'as-needed',

  // Use single quotes instead of double quotes in JSX
  jsxSingleQuote: true,

  // Print trailing commas wherever possible when multi-line
  trailingComma: 'all',

  // Print spaces between brackets in object literals.
  bracketSpacing: true,

  // Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements)
  jsxBracketSameLine: false,

  // Include parentheses around a sole arrow function parameter
  arrowParens: 'avoid',

  // Format only a segment of a file.
  rangeStart: 0,
  rangeEnd: Infinity,

  // Specify which parser to use.
  // parser: undefined,

  // Specify the file name to use to infer which parser to use.
  // filepath: undefined,

  // Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.
  requirePragma: false,

  // Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with prettier.
  insertPragma: false,

  // By default, Prettier will wrap markdown text as-is since some services use a line-break-sensitive renderer, e.g. GitHub comment and BitBucket.
  proseWrap: 'preserve',

  // Specify the global whitespace sensitivity for HTML files
  htmlWhitespaceSensitivity: 'css',

  // Whether or not to indent the code inside <script> and <style> tags in Vue files
  vueIndentScriptAndStyle: false,

  // End of line
  endOfLine: 'lf',

  // Control whether Prettier formats quoted code embedded in the file
  embeddedLanguageFormatting: 'auto',

  // Overrides for specific language
  overrides: [
    {
      files: '*.{css,scss,less}',

      options: {
        // Double quotes for CSS and its processor
        singleQuote: false,
      },
    },

    {
      files: '*.md',

      options: {
        // Enlarge the indent
        tabWidth: 4,
      },
    },
  ],
}
