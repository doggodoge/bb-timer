module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
    '^.+\\.svelte$': 'svelte-jester',
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
