# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# StyleLint config for SCSS

## Usage

### Install

```bash
$ npm i @drmikecrowe/stylelint-config-scss -D
# OR
$ yarn add @drmikecrowe/stylelint-config-scss -D
```

### Extend this config

in `.stylelintrc.yml`

```yaml
extends:
  - @drmikecrowe/stylelint-config-scss
```

in `package.json`

```json
{
    "stylelint": {
        "extends": ["@drmikecrowe/stylelint-config-scss"]
    }
}
```
