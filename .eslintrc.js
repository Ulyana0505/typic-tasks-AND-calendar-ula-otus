module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {},
    ignorePatterns: ["dist"],
    overrides: [
      {
        files: [
          ".eslintrc.js",
          "babel.config.js",
        ],
        env: {
          node: true, // Apply Node environment specifically for ESLint config
        },
      },
    ],
  };
