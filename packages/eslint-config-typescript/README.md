# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config for TypeScript

## Usage

### Install

```bash
$ npm i @YOUR_SCOPE/eslint-config-typescript -D
# OR
$ yarn add @YOUR_SCOPE/eslint-config-typescript -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@YOUR_SCOPE/typescript'],

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
        "extends": "@YOUR_SCOPE/typescript"
    }
}
```
