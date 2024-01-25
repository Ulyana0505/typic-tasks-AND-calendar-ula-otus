const esModules = ['lodash-es', 'nanoid'].join('|')

/** @type {import("jest").Config} */
const config = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$':
            '<rootDir>/node_modules/jest-css-modules',
        '^lodash-es(/(.*)|$)': 'lodash$1',
        '^nanoid(/(.*)|$)': 'nanoid$1',
    },
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*'],
    clearMocks: true,
    globals: {
        window: {},
        jest: true,
    },
    roots: ['tests'],
}

module.exports = config
