const GLOBAL_TIMEOUT = 30e3;

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
    tags: ['@Test', '~@Run'],
    cucumberOpts: {
        require: [
            './e2e/test/common/support/index',
            './e2e/test/common/support/hooks.js'
        ],
        format: ['pretty', 'json:cucumber.json'],
        colors: true,
        timeout: GLOBAL_TIMEOUT
        //tagExpression: 'not @Run',

        /*Use the parameter to run a test
        tagExpression: '@test' */
    },
    //logLevel: 'silent',
    reporters: ['cucumber', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: './e2e/test/support/.reports/allure/xml'
        }
    },
    before: function () {
        global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
        browser.windowHandleSize({width: 1024, height: 768});

        const chai = require('chai');
        chai.use(require('chai-as-promised'));
        global.expect = chai.expect;
    },
    onPrepare: function () {
        console.log('Starting end2end tests');
    },
    onComplete: function () {
        console.log('All done!');
    },
    onError: function () {
        console.log('something wrong');
    }
};