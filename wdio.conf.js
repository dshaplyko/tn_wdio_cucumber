
exports.config = {
    maxInstances: 1,
    host: '127.0.0.1',
    port: 4444,
    specs: ['./e2e/test/features/*.feature'],
    capabilities: [
        {browserName: 'chrome'}
    ],
    sync: true,
    coloredLogs: true,
    screenshotPath: './e2e/test/support/.screenshots',
    baseUrl: 'http://iwasthere.herokuapp.com/#',
    framework: 'cucumber',
    cucumberOpts: {
        require: [
            './e2e/test/common/support/index',
            './e2e/test/common/support/hooks.js'
        ],
        format: ['pretty', 'json:cucumber.json'],
        colors: true
        //timeout: GLOBAL_TIMEOUT,
        //tagExpression: '@Test'

        /*Use the parameter to run a test
        tagExpression: '@test' */
    },
    //logLevel: 'silent',
    reporters: ['cucumber', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: './e2e/test/support/.reports/allure/xml'
        }
    }
};