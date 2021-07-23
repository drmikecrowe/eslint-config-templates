const { json, packageJson, install } = require('mrm-core')
const _ = require('lodash')

const omitKeys = [
  'allowJs',
  'allowSyntheticDefaultImports',
  'emitDecoratorMetadata',
  'esModuleInterop',
  'experimentalDecorators',
  'forceConsistentCasingInFileNames',
  'isolatedModules',
  'moduleResolution',
  'noEmit',
  'noImplicitAny',
  'noUnusedLocals',
  'noUnusedParameters',
  'outDir',
  'preserveConstEnums',
  'pretty',
  'resolveJsonModule',
  'sourceMap',
  'strict',
  'strictNullChecks',
  'target',
]

module.exports = function task({ configScope }) {
  const packages = ['typescript', `${configScope}/configs-typescript`]
  const guiPackages = ['react', 'vue']

  const pkg = packageJson()

  const isGui = guiPackages.some(name => pkg.get(`devDependencies.${name}`))
  const type = isGui ? 'dom' : 'library'

  // Dependencies
  install(packages)

  // tsconfig.json
  const tsconfig = json('tsconfig.json')
  tsconfig.merge({
    extends: `${configScope}/configs-typescript/${type}.json`,
  })
  const co = tsconfig.get('compilerOptions')
  tsconfig.set('compilerOptions', _.omit(co, omitKeys))
  tsconfig.save()

  // package.json
  pkg.appendScript('pretest', 'tsc --noEmit').save()
}
module.exports.description = 'Migrate typescript to global setting'
module.exports.parameters = {
  configScope: {
    type: 'input',
    default: '@drmikecrowe',
  },
}
