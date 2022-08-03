module.exports = {
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/config/CSSStub.js',
    },
    moduleDirectories: ['./node_modules', 'src'],
    // other important stuff
    setupFilesAfterEnv: ['<rootDir>/config/jest-setup.js'],
    testEnvironment: 'jsdom'
};