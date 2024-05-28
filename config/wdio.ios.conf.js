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
  '../test/specs/ios/ios-todo-item-screen.spec.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "17.2",
    "appium:deviceName": "iPhone 12",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app"),
  }
]

exports.config = config;