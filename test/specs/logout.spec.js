const LogoutActions = require('../actions/logout.actions');
const { createScreenshotDir, saveScreenshot } = require('../helpers/screenshotHelper');

describe('Logout Flow', () => {
  const screenshotDir = './screenshots/logout';

  beforeEach(async () => {
    createScreenshotDir(screenshotDir);
    // Setup additional steps if needed
  });

  it('should successfully log out', async () => {
    await LogoutActions.logout();
  });

  afterEach(async function () {
    // Menyimpan screenshot pada setiap langkah tes
    await saveScreenshot(`${screenshotDir}/afterEach.png`);
  });
});
