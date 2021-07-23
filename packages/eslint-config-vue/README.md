# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config for Vue.js

## Usage

### Install

```bash
$ npm i @drmikecrowe/eslint-config-vue -D
# OR
$ yarn add @drmikecrowe/eslint-config-vue -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@drmikecrowe/vue'],

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
        "extends": "@drmikecrowe/vue"
    }
}
```
