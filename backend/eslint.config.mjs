import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "public/",
      "coverage/",
      ".env",
      "*.min.js",
    ],
  },
];
