import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  coverageDirectory: 'coverage',
  rootDir: '.',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: ['/node_modules/'],
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "<transform_regex>": ['ts-jest', {
      "useESM": true
    }],
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    "^@presentation/(.*)": "<rootDir>\\src\\presentation\\$1",
    "^@infra/(.*)": "<rootDir>\\src\\infra\\$1",
    "^@data/(.*)": "<rootDir>\\src\\data\\$1",
    "^@domain/(.*)": "<rootDir>\\src\\domain\\$1",
    "^@main/(.*)": "<rootDir>\\src\\main\\$1",
    "^@test/(.*)": "<rootDir>\\test\\$1",
    "^@pages/(.*)": "<rootDir>\\src\\presentation\\pages\\$1",
    "^@layout/(.*)": "<rootDir>\\src\\main\\factories\\pages\\layout\\$1",
    "^@types/(.*)": "<rootDir>\\src\\@types\\$1",
    "^@contracts/(.*)": "<rootDir>\\src\\@types\\contracts\\$1",
    "^@@utils/(.*)": "<rootDir>\\src\\utils\\$1",
    "^@hooks/(.*)": "<rootDir>\\src\\infra\\hooks\\$1",
    "^@Callbacks/(.*)": "<rootDir>\\src\\infra\\callbacks\\$1",
  },
  moduleDirectories: [
    "<rootDir>",
    "src",
    "src/util",
    "src/presentation/*",
    "src/data/*",
    "src/main/*",
    "src/domain/*",
    "src/infra/*",
    "src/@types/*",
    "src/@types/contracts/*",
    "src/utils/*",
    "src/infra/hooks/*",
    "src/infra/callbacks/*",
    "node_modules"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}

export default config
