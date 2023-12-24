const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");
module.exports = {
  // parser: "@typescript-eslint/parser",
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo",
  ].map(require.resolve),
  rules: {
    "react/function-component-definition": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "import/no-default-export": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: [resolve(process.cwd()), "../../"],
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-console": "warn",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enum",
        format: ["UPPER_CASE"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  parserOptions: {
    project,
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
