module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
