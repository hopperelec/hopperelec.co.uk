module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/prettier",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      plugins: ["svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: {
          ts: "@typescript-eslint/parser",
          js: "espree",
        },
      },
    },
    {
      files: ["*.js"],
      parser: "espree",
    },
  ],

  env: {
    browser: true,
    node: true,
    es2020: true,
  },

  settings: {
    svelte: {
      kit: {
        paths: {
          base: process.env.BASE_PATH,
        },
      },
    },
  },

  globals: {
    NodeJS: true,
  },
};
