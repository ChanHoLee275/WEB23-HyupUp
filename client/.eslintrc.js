module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
  },
};
