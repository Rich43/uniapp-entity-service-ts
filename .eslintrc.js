/* eslint-disable */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    overrides: [
        {
            files: ['*.ts'],
            excludedFiles: ['jest.config.ts'],
            extends: [
                'airbnb-typescript/base',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            rules: {
                'linebreak-style': 0,
                'import/extensions': 0,
                'object-curly-newline': 0,
                'class-methods-use-this': 0,
                'no-void': 0,
                '@typescript-eslint/indent': ['error', 4],
            },
        },
    ],
    rules: {
        'linebreak-style': 0,
        'import/extensions': 0,
        'object-curly-newline': 0,
        'class-methods-use-this': 0,
        '@typescript-eslint/indent': ['error', 4],
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
};
