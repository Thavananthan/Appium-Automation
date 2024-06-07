const path = require('path');
const { config } = require('./wdio.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  '../test/specs/android/add-note-screen.spec.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "14.0",
    "appium:deviceName": "Pixel 6",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "./app/android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions": true
  }

]

exports.config = config;