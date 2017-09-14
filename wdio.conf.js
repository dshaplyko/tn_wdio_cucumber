const GLOBAL_TIMEOUT = 20e3;

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
    //screenshotPath: './tests/e2e/.reports/screenshots',
    baseUrl: 'http://iwasthere.herokuapp.com/#',
    //waitforTimeout: GLOBAL_TIMEOUT,
    framework: 'cucumber',
    cucumberOpts: {
        require: [
            './e2e/test/common/step_definitions/login',
            './e2e/test/common/step_definitions/main',
            './e2e/test/common/step_definitions/common',
            './e2e/test/common/support/env',
            './e2e/test/common/support/hooks.js'
        ],
        format: ['pretty', 'json:cucumber.json'],
        colors: true
    },
    logLevel: 'silent',
    reporters: ['spec', 'dot'],
    // reporterOptions: {
    //     allure: {
    //         outputDir: './tests/e2e/.reports/allure/xml'
    //     }
    // },
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