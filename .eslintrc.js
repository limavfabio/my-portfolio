module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@antfu',
    '@unocss',
  ],
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-undef': 'off',
  },
}
