module.exports = exports = {
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  env: {
    node: true,
  },
  globals: {
    'Promise': true,
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-trailing-spaces': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': 'error',
  },
};
