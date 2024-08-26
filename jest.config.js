/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  transform: {
    '.ts': [
      'ts-jest',
      {
        tsconfig: './tsconfig.jest.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@constants/(.*)': '<rootDir>/src/constants/$1',
    '^@data/(.*)': '<rootDir>/src/data/$1',
    '^@layouts/(.*)': '<rootDir>/src/layouts/$1',
    '^@pages/(.*)': '<rootDir>/src/pages/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@utils': '<rootDir>/src/utils',
  },
};
