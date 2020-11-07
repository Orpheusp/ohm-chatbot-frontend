module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '^src(.*)': '<rootDir>/src$1',
  },
  resetMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
};
