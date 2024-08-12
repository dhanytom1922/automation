const { createScreenshotDir, saveScreenshot } = require('../helpers/screenshotHelper');
const LogoutPage = require('../pageobjects/logout.page');

class LogoutActions {
  async logout() {
    const screenshotDir = './screenshots/logout';
    createScreenshotDir(screenshotDir);

    await LogoutPage.settingsButton.click();
    await saveScreenshot(`${screenshotDir}/1_settingsButton.png`);
    
    await LogoutPage.logoutButton.click();
    await saveScreenshot(`${screenshotDir}/2_logoutButton.png`);
    
    await LogoutPage.confirmLogoutButton.waitForDisplayed({ timeout: 5000 });
    await LogoutPage.confirmLogoutButton.click();
    await saveScreenshot(`${screenshotDir}/3_confirmLogoutButton.png`);
  }
}

module.exports = new LogoutActions();
