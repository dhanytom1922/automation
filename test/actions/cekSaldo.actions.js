const { createScreenshotDir, saveScreenshot } = require('../helpers/screenshotHelper');
const CekSaldoPage = require('../pageobjects/cekSaldo.page');

class CekSaldoActions {
  async cekSaldo() {
    const screenshotDir = './screenshots/cekSaldo';
    createScreenshotDir(screenshotDir);

    await CekSaldoPage.cekSaldoMenu.click();
    await saveScreenshot(`${screenshotDir}/1_cekSaldoMenu.png`);

    await CekSaldoPage.cekSekarangButton.click();
    await saveScreenshot(`${screenshotDir}/2_cekSekarangButton.png`);

    await CekSaldoPage.tabunganOption.click();
    await saveScreenshot(`${screenshotDir}/3_tabunganOption.png`);

    console.log('Insert card and wait for 5 seconds...');
    await global.browser.pause(5000); // Simulasi memasukkan kartu

    console.log('Manual PIN input. Waiting for 10 seconds...');
    await CekSaldoPage.pinInput.waitForDisplayed({ timeout: 10000 }); // Menunggu halaman input PIN

    await saveScreenshot(`${screenshotDir}/4_pinInput.png`);

    console.log('PIN input completed. Processing balance check...');
    await global.browser.pause(10000); // Tunggu 10 detik setelah struk otomatis tercetak

    await CekSaldoPage.reprintButton.waitForDisplayed({ timeout: 10000 });
    await CekSaldoPage.reprintButton.click();
    await saveScreenshot(`${screenshotDir}/5_reprintButton.png`);

    await CekSaldoPage.selesaiButton.click();
    await saveScreenshot(`${screenshotDir}/6_selesaiButton.png`);
  }
}

module.exports = new CekSaldoActions();
