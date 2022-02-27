/* eslint-env node */

module.exports = {
    rules: {
        'max-len': [
            'error',
            {
                code: 100,
                tabWidth: 2,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            }
        ],
        'array-element-newline': ['error', 'consistent'],
        'quotes': ['error', 'single'],
        'quote-props': ['error', 'consistent-as-needed'],
        'indent': ['error', 2],
        'semi': ['error', 'always'],
        'eqeqeq': ['error', 'always', { null: 'ignore' }],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing' : ['error', { before: false, after: true }],
        'multiline-ternary': ['error', 'always-multiline'],
        
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: { '?' : 'berfore', ':': 'before' },
            },
        ],

        'key-spacing': ['error', { beforeColon: false }],
        'no-trailing-spaces': 'error',
        'no-multi-spaces': ['error'],
        'no-mulitple-empty-lines': ['error', { max: 2, maxEOF: 0, maxBOF: 0 }],
        'no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^_',
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
            },
        ],
        'space-in-parens': ['error', 'never'],

        'object-curly-spacing': ['error', 'always'],
        'eol-last' : ['error', 'always'],
    }
}