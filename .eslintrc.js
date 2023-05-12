module.exports = {
  'env': {
    'browser': true,
    // 'commonjs': true,
    'es2021': true,
  },
  'extends': 'eslint:recommended',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'rules': {
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'prefer-const': 'error',
    'no-var': 'error',
    'func-style': ['error', 'declaration'],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { code: 80 }],
    'no-unused-vars': 'error',
  },
};
