/* eslint-env node */
module.exports = {
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'indent': 'off',
          '@typescript-eslint/indent': ['error', 2],
  
          'semi': 'off',
          '@typescript-eslint/semi': ['error', 'always'],
  
          'quotes': 'off',
          '@typescript-eslint/quotes': ['error', 'single'],
  
          'comma-dangle': 'off',
          '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
  
          '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
          '@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
              delimiter: 'comma',
              requireLast: true,
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false,
            },
            overrides: {
              interface: {
                multiline: {
                  delimiter: 'semi',
                },
              },
            },
          }],
  
          '@typescript-eslint/no-namespace': ['error', {
            allowDeclarations: true,
            allowDefinitionFiles: true,
          }],
  
          '@typescript-eslint/no-unused-vars': ['error', {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
          }],
        },
      },
    ],
  };
