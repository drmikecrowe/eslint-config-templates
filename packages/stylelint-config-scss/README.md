# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# StyleLint config for SCSS

## Usage

### Install

```bash
$ npm i @YOUR_SCOPE/stylelint-config-scss -D
# OR
$ yarn add @YOUR_SCOPE/stylelint-config-scss -D
```

### Extend this config

in `.stylelintrc.yml`

```yaml
extends:
  - @YOUR_SCOPE/stylelint-config-scss
```

in `package.json`

```json
{
    "stylelint": {
        "extends": ["@YOUR_SCOPE/stylelint-config-scss"]
    }
}
```
