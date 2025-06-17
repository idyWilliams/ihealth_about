const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, ".");

const config = getDefaultConfig(projectRoot);

// Define your submodule packages
const submodulePackages = {
  AboutModules: path.resolve(monorepoRoot, "submodules/AboutModules"),
};

// 1. Watch all relevant directories including submodules
config.watchFolders = [projectRoot, ...Object.values(submodulePackages)];

// 2. Configure resolver to handle submodule paths
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(monorepoRoot, "node_modules"),
  ...Object.values(submodulePackages).map((pkg) =>
    path.resolve(pkg, "node_modules")
  ),
];

// 3. Add alias resolution for submodule absolute imports
config.resolver.alias = {
  "@": path.resolve(monorepoRoot, "submodules/AboutModules/src"),
};

module.exports = config;
