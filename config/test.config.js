module.exports = {
  name: '',
  rootDir: __dirname + '/..',
  scriptPreprocessor: "<rootDir>/node_modules/babel-jest",
  unmockedModulePathPatterns: [
    "<rootDir>/node_modules/react",
    "<rootDir>/node_modules/react-dom",
    "<rootDir>/node_modules/react-addons-test-utils"
  ],
  testPathIgnorePatterns: [
    "node_modules"
  ],
  testPathDirs: [
    "<rootDir>/__tests__/"
  ],
  testFileExtensions: ['js']
}
