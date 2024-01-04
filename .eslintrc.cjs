module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "universe",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["build", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
