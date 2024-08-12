const LogoutActions = require('../actions/logout.actions');
const { createScreenshotDir, saveScreenshot } = require('../helpers/screenshotHelper');

describe('Logout Flow', () => {
  const screenshotDir = './screenshots/logout';

  beforeEach(async () => {
    createScreenshotDir(screenshotDir);
  });

  it('should successfully log out', async () => {
    await LogoutActions.logout();
  });

  afterEach(async function () {
    await saveScreenshot(`${screenshotDir}/afterEach.png`);
  });
});
