module.exports = {
    preset: 'ts-jest',
    testEvenvironment: 'node',
    testMatch: ['**/test/**/*.test.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
    ]
}