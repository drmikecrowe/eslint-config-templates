# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config for Vue.js and TypeScript

## Usage

### Install

```bash
$ npm i @YOUR_SCOPE/eslint-config-typescript-vue -D
# OR
$ yarn add @YOUR_SCOPE/eslint-config-typescript-vue -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@YOUR_SCOPE/typescript-vue'],

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
        "extends": "@YOUR_SCOPE/typescript-vue"
    }
}
```
