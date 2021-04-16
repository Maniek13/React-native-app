module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [
      "react",
      "react-native"
  ],
  parser: "babel-eslint",
  parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
          jsx: true
      }
  },
  env: {
      browser: true,
      amd: true,
      node: true
  },
  rules: {
      "no-console": 0,
      "no-debugger": 0
  }
 };
 