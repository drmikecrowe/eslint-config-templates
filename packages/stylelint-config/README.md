# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# StyleLint config

## Usage

### Install

```bash
$ npm i @drmikecrowe/stylelint-config -D
# OR
$ yarn add @drmikecrowe/stylelint-config -D
```

### Extend this config

in `.stylelintrc.yml`

```yaml
extends:
  - @drmikecrowe/stylelint-config
```

in `package.json`

```json
{
    "stylelint": {
        "extends": ["@drmikecrowe/stylelint-config"]
    }
}
```
