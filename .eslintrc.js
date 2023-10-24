/** @type {import('eslint').Linter.Config)} */
module.exports = {
    root: true,
    env: { browser: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
        // "plugin:@typescript-eslint/recommended-requiring-type-checking", // @typescript-eslint/eslint-plugin
        'plugin:import/recommended', // eslint-plugin-import
        'plugin:import/typescript', // eslint-plugin-import eslint-import-resolver-typescript
        'plugin:prettier/recommended', // eslint-plugin-prettier
    ],
    plugins: [
        '@typescript-eslint', // @typescript-eslint/eslint-plugin
        'import', // eslint-plugin-import
        'simple-import-sort', // eslint-plugin-simple-import-sort
        'prettier', // eslint-plugin-prettier
    ],
    parser: '@typescript-eslint/parser', // @typescript-eslint/eslint-plugin
    parserOptions: {},
    rules: {
        '@typescript-eslint/no-explicit-any': 'warn', // @typescript-eslint/no-explicit-any
        '@typescript-eslint/consistent-type-imports': 'error', // @typescript-eslint/eslint-plugin
        'simple-import-sort/imports': 'error', // eslint-plugin-simple-import-sort
        'simple-import-sort/exports': 'error', // eslint-plugin-simple-import-sort
        'prettier/prettier': 'error', // eslint-plugin-prettier
        'import/no-unresolved': 'error', // eslint-plugin-import
        'import/default': 'warn', // eslint-plugin-import
        // "import/no-named-as-default-member": "error", // eslint-plugin-import
    },
    settings: {
        'import/resolver': {
            // eslint-plugin-import
            typescript: true,
            node: true,
        },
    },
    ignorePatterns: [
        'node_modules/',
        'dist/',
        'build/',
        'coverage/',
        'public/',
    ],
}
