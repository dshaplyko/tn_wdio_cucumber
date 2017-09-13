exports.config = {
    maxInstances: 1,
    host: '127.0.0.1',
    port: 4444,
    //change here
    specs: ['./e2e/test/features/*.feature'],
    capabilities: [
        {browserName: 'chrome'}
    ],
    sync: true,
    coloredLogs: true,
    screenshotPath: './tests/e2e/.reports/screenshots',
    baseUrl: 'http://iwasthere.herokuapp.com/#',
    waitforTimeout: 20000,
    framework: 'cucumber',
    cucumberOpts: {
        require: [
            './e2e/test/common/step_definitions/login',
            './e2e/test/common/support/env',
            './e2e/test/common/support/hooks.js'
        ],
        format: 'pretty',
        timeout: 20000,
        colors: true
    },
    logLevel: 'silent',
    reporters: ['spec'],
    // reporterOptions: {
    //     allure: {
    //         outputDir: './tests/e2e/.reports/allure/xml'
    //     }
    // },
    before: function () {
        browser.windowHandleSize({width: 1024, height: 768});
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