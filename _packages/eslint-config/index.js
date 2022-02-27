module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        require.resolve('./rules/style.js'),
        require.resolve('./rules/typescript-style.js')
    ],
    rules: {}
}