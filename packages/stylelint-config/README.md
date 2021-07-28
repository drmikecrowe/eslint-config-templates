# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# StyleLint config

## Usage

### Install

```bash
$ npm i @YOUR_SCOPE/stylelint-config -D
# OR
$ yarn add @YOUR_SCOPE/stylelint-config -D
```

### Extend this config

in `.stylelintrc.yml`

```yaml
extends:
  - @YOUR_SCOPE/stylelint-config
```

in `package.json`

```json
{
    "stylelint": {
        "extends": ["@YOUR_SCOPE/stylelint-config"]
    }
}
```
