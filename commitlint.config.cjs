module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'header-min-length': [2, 'always', 20],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
};
