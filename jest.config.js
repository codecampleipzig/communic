module.exports = {
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": [
    "<rootDir>/setupJest.ts"
  ],
  "transform": {
      "^.+\\.(ts|js|html)$": "ts-jest",
  },
  "moduleFileExtensions": ["ts", "html", "js", "json"],
  "moduleNameMapper": {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^app/(.*)$": "<rootDir>/src/app/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^environments/(.*)$": "<rootDir>/src/environments/$1",
  },
  "transformIgnorePatterns": [
    "node_modules/(?!@ngrx|angular2-ui-switch|ng-dynamic)"
  ],
  "snapshotSerializers": [
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist",
    "<rootDir>/src/test.ts",
    "<rootDir>/projects/nric/src/test.ts"
  ],
  "globals": {
    "ts-jest": {
      "tsConfig": "<rootDir>/tsconfig.spec.json",
      "stringifyContentPathRegex": "\\.html$",
      "astTransformers": [
        "jest-preset-angular/build/InlineFilesTransformer",
        "jest-preset-angular/build/StripStylesTransformer"
      ],
    }
  }
};
