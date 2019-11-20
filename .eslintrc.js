module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  env: {
    node: true,
  },
  rules: {
    'no-console': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
