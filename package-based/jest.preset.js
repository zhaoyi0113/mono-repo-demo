module.exports = {
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  resolver: '@nx/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js'],
  coverageReporters: ['html'],
  transform: { '^.+\\.(ts|js|html)$': ['ts-jest', [Object]] },
  testEnvironment: 'node',
  testEnvironmentOptions: { customExportConditions: ['node', 'require', 'default'] },
  testTimeout: 5000,
  coverageThreshold: {
    global: {
      functions: 90,
      lines: 90,
      statements: 90,
      branches: 90,
    },
  },
  reporters: [
    'default',
    [
      '<rootDir>/node_modules/jest-junit',
      {
        outputDirectory: 'dist/',
        outputName: 'report.xml',
        uniqueOutputName: 'false',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
        includeConsoleOutput: 'true',
        suiteName: 'Test Report',
      },
    ],
    [
      '<rootDir>/node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        'outputPath': 'dist/test-report.html'
      },
    ],
  ],
};
