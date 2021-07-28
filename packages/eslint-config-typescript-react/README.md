# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config for React.js and TypeScript

## Usage

### Install

```bash
$ npm i @YOUR_SCOPE/eslint-config-typescript-react -D
# OR
$ yarn add @YOUR_SCOPE/eslint-config-typescript-react -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@YOUR_SCOPE/typescript-react'],

    rules: {
        // Override rules
    },
}
```

in `package.json`

```json
{
    "eslintConfig": {
        "root": true,
        "extends": "@YOUR_SCOPE/typescript-react"
    }
}
```
