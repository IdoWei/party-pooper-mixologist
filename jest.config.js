module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      "tsConfig": 'tsconfig.json'
    }
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$"
  ],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
};