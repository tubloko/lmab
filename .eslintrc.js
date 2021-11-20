module.exports = {
  'plugins': [
    'react',
    'react-native'
  ],
  'extends': [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:react-native/all'
  ],
  'parser': 'babel-eslint',
  'env': {
    'react-native/react-native': true
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 2,
    'react/display-name': 0,
    'react/prop-types': 0,
    'semi': 'error',
    'no-multi-spaces': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'object-curly-spacing': [ 'error', 'always' ],
    'quotes': [ 2, 'single', { 'avoidEscape': true } ],
    'line-break-style': 0,
    'object-curly-newline': 0,
    'key-spacing': ['error', { 'beforeColon': false }]
  },
  'globals': {
    'it': true,
    'React$Node': true,
    'jest': true,
  }
};
