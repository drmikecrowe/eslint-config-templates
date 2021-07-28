// @ts-check
const path = require("path");
const { json } = require("mrm-core");
const Githost = require("find-githost");
const githost = Githost.fromDir(".");

const rc = require("rc");

function getConfig() {
  const npm = rc("npm", null, []);
  return {
    version: npm["init-version"],
    license: npm["init-license"],
  };
}

module.exports = async function task({ name, url, minNode, license, version }) {
  const packageName = path.basename(process.cwd());

  const overrides = {
    author: {
      name,
      url,
    },
    homepage: githost.homepage(),
    repository: githost.https(),
  };

  // Create package.json
  const pkg = json("package.json", {
    name: packageName,
    version,
    description: "",
    contributors: [],
    license,
    engines: {
      node: `>=${minNode}`,
    },
    main: "index.js",
    files: ["index.js"],
    scripts: {},
    keywords: [],
    dependencies: {},
    devDependencies: {},
  });
  if (pkg.get("homepage") !== overrides.homepage) {
    pkg.merge(overrides);
  }

  // Update
  if (pkg.exists()) {
    pkg.merge({
      engines: {
        node: `>=${minNode}`,
      },
    });
  }

  pkg.save();
};

module.exports.description = "Adds package.json";
module.exports.parameters = {
  name: {
    type: "input",
    message: "Enter your name",
    default: githost.owner,
    validate(value) {
      return value ? true : "`name` option is required";
    },
  },
  url: {
    type: "input",
    message: "Enter your site address",
    default: githost.homepage(),
  },
  github: {
    type: "input",
    message: "Enter your GitHub usename or organization name",
    default: githost.owner,
    validate(value) {
      return value ? true : "`github` option is required";
    },
  },
  minNode: {
    type: "input",
    message: "Enter minimum supported Node.js version",
    default: 10,
  },
  version: {
    type: "input",
    message: "Enter project version",
    default: () => getConfig().version || "1.0.0",
  },
  license: {
    type: "input",
    message: "Enter project license",
    default: () => getConfig().license || "MIT",
  },
};
