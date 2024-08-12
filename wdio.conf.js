const { join } = require('path');

exports.config = {
    runner: 'local',
    maxInstances: 1,
    port: 4723,
    path: '/',
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        maxInstances: 1,
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:platformVersion': '10',
        'appium:deviceName': '1902410100198875',
        'appium:app': '/Users/achmaddhanytomara/Documents/MKP/mycroatm/MKP_MYCROATM_MKP_1.24.08.01_PROD.apk',
        'appium:noReset': true,
        'appium:newCommandTimeout': 120000,
        'appium:udid': '1902410100198875'
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    services: [
        'appium',
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    screenshotPath: './screenshots',
    onPrepare: function (config, capabilities) {
        // Implementasi jika ada
    },
    onComplete: function () {
        // Implementasi jika ada
    }
};
