const {
  createScreenshotDir,
  saveScreenshot,
} = require("../helpers/screenshotHelper");
const { waitForElement } = require("../helpers/waitHelper");
const { expectElementToBeDisplayed } = require("../helpers/expectHelper");
const LoginPage = require("../pageobjects/login.page");
const { fillForm } = require("../helpers/formHelper");

class LoginActions {
  async login(cid, username, password) {
    const screenshotDir = "./screenshots/login";
    createScreenshotDir(screenshotDir);
    await saveScreenshot(`${screenshotDir}/1_beforeLogin.png`);

    await fillForm({
      'android=new UiSelector().text("CID")': cid,
      'android=new UiSelector().text("Username")': username,
      'android=new UiSelector().text("Password")': password,
    });
    await saveScreenshot(`${screenshotDir}/2_formFilled.png`);

    await waitForElement(
      "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]"
    );
    await LoginPage.loginGroup.click();

    await expectElementToBeDisplayed(
      'android=new UiSelector().resourceId("android:id/content")'
    );
    await saveScreenshot(`${screenshotDir}/loginSuccess.png`);
  }
}

module.exports = new LoginActions();
