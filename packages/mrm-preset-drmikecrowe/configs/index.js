const _ = require("lodash");
const fs = require("fs");
const { json, packageJson, install, uninstall } = require("mrm-core");
const format = require("syncpack/dist/commands/format");
const gc = require("syncpack/dist/lib/get-config");

function wipeFiles(files) {
  files.forEach((file) => {
    if (fs.existsSync(file)) fs.unlinkSync(file);
  });
}

module.exports = function task({
  configScope,
  eslintPeerDependencies,
  eslintObsoleteDependencies,
  eslintRules,
}) {
  const configFile = ".eslintrc.json";
  const packages = ["eslint", `${configScope}/config-npm-check-updates`];
  const packagesToRemove = ["jslint", "jshint"];

  const pkg = packageJson();
  const hasTypescript = pkg.get("devDependencies.typescript");
  const hasReact = pkg.get("dependencies.react");
  const hasVue = pkg.get("dependencies.vue");
  const hasPrettier = pkg.get("devDependencies.prettier");

  const parts = [];
  if (hasPrettier) parts.push("prettier");
  if (hasTypescript) parts.push("typescript");
  if (hasVue) parts.push("vue");
  else if (hasReact) parts.push("react");

  const base = parts.length ? "-" + parts.join("-") : "";
  const full = `${configScope}/eslint-config${base}`;
  const eslintPreset = `${configScope}/${base.slice(1)}`;
  packages.push(full);

  // .eslintrc.json
  const eslintrc = json(configFile, pkg.get("eslintConfig"));

  const hasCustomPreset = _.castArray(eslintrc.get("extends", [])).find((x) =>
    x.startsWith(eslintPreset)
  );
  if (!hasCustomPreset) {
    eslintrc.set("extends", [eslintPreset]);

    // Now, remove all the eslint config that is now in the common packages
    Object.keys(pkg.get("devDependencies")).forEach((key) => {
      if (key.startsWith("eslint-")) {
        if (
          key.endsWith("prettier") ||
          key.endsWith("react") ||
          key.endsWith("vue")
        ) {
          packagesToRemove.push(key);
        }
      }
    });
  }
  if (eslintRules) {
    eslintrc.merge({
      rules: eslintRules,
    });
  }
  eslintrc.delete();
  pkg.set("eslintConfig", {
    root: true,
    ...eslintrc.get(),
  });

  // Now add ncurc
  fs.writeFileSync(
    ".ncurc.js",
    `module.exports = require("${configScope}/config-npm-check-updates");`
  );

  // .prettierrc
  if (hasPrettier) {
    pkg.set("prettier", `${configScope}/prettier-config`);
    packages.push(`${configScope}/prettier-config`);
  }

  wipeFiles([
    ".ncurc.json",
    ".ncurc",
    ".prettierrc",
    ".prettierrc.js",
    ".eslintrc.js",
    ".eslintrc.json",
  ]);

  pkg.save();

  format.formatToDisk(gc.getConfig({}));

  // Dependencies
  uninstall([...packagesToRemove, ...eslintObsoleteDependencies]);
  install([...packages, ...eslintPeerDependencies]);
};

module.exports.description = "Migrate ESLint config to my global";
module.exports.parameters = {
  eslintPeerDependencies: {
    type: "config",
    default: [],
  },
  eslintObsoleteDependencies: {
    type: "config",
    default: [],
  },
  eslintRules: {
    type: "config",
  },
  configScope: {
    type: "input",
    default: "@drmikecrowe",
  },
};
