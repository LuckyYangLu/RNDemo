
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 'error', // 禁止行尾空格
    'linebreak-style': [0, 'error', 'windows'],
    'import/extensions': 'off',
    "comma-dangle": ["error", "never"], // 禁止行尾逗号
    // "semi": ["error", "never"], // 禁止分号
    "space-before-blocks": "error", // 强制在块之前使用一致的空格
    "comma-spacing": "error", // 逗号后面加空格
    'indent': [2, 2, {
      'SwitchCase': 1
    }], //代码首行缩进规定，switchcase的设置比较特别，如果直接设置'indent':2,使用代码自动校验会发现switch代码段无法校验通过
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};