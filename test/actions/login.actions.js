const { createScreenshotDir, saveScreenshot } = require('../helpers/screenshotHelper');
const LoginPage = require('../pageobjects/login.page');

class LoginActions {
  async login(cid, username, password) {
    const screenshotDir = './screenshots/login';
    createScreenshotDir(screenshotDir);

    await LoginPage.cidField.setValue(cid);
    await saveScreenshot(`${screenshotDir}/1_cidField.png`);
    
    await LoginPage.usernameField.setValue(username);
    await saveScreenshot(`${screenshotDir}/2_usernameField.png`);
    
    await LoginPage.passwordField.setValue(password);
    await saveScreenshot(`${screenshotDir}/3_passwordField.png`);
    
    await LoginPage.loginGroup.waitForDisplayed({ timeout: 5000 });
    await LoginPage.loginGroup.click();
    expect 
    await saveScreenshot(`${screenshotDir}/4_loginGroup.png`);
  }
}

module.exports = new LoginActions();
