module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'header-min-length': [2, 'always', 20],
    'header-case-start-capital': [2, 'always'],
    'header-end-period': [0, 'always'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
  plugins: [
    {
      rules: {
        "header-end-period": ({ header }) => {
          return [/\.$/.test(header), "Commit message must end with a period"];
        },
      },
    },
  ],
};
