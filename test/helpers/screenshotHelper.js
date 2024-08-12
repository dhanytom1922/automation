const fs = require('fs');

function createScreenshotDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function saveScreenshot(filePath) {
  await global.browser.saveScreenshot(filePath);
}

module.exports = {
  createScreenshotDir,
  saveScreenshot
};
