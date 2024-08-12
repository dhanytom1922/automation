const LoginActions = require("../actions/login.actions");
const {
  createScreenshotDir,
  saveScreenshot,
} = require("../helpers/screenshotHelper");

describe("Login Flow", () => {
  const screenshotDir = "./screenshots/login";

  beforeEach(async () => {
    createScreenshotDir(screenshotDir);
    // Setup additional steps if needed
  });

  it("should successfully log in", async () => {
    await LoginActions.login("00031", "adminkevin2", "999999");
  });

  afterEach(async function () {
    // Menyimpan screenshot pada setiap langkah tes
    const homePageElement = await $(
      'android=new UiSelector().resourceId("android:id/content")'
    );

    await expect(homePageElement).toBeDisplayed();

    await saveScreenshot(`${screenshotDir}/loginSuccess.png`);
  });
});
