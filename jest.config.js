module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  cacheDirectory: '.jest/cache',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@fortawesome|@react-native|@react-navigation|react-redux)',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
};
