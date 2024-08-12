// Mengimpor semua spesifikasi tes yang diperlukan untuk pengujian positif
require('./login.spec');
// require('./cekSaldo.spec');
require('./logout.spec');

const { createScreenshotDir, saveScreenshot } = require('../helpers/screenshotHelper');

// Menyimpan screenshot di folder khusus untuk tes positif
const screenshotDir = './screenshots/positiveTests';

describe('Positive Tests', () => {

  beforeEach(async () => {
    // Membuat direktori untuk screenshot jika belum ada
    createScreenshotDir(screenshotDir);
  });

  it('should successfully run login test', async () => {
    // Menjalankan skenario login
    await require('./login.spec');
    // await saveScreenshot(`${screenshotDir}/loginSuccess.png`);
  });

  // it('should successfully run check balance test', async () => {
  //   // Menjalankan skenario cek saldo
  //   await require('./cekSaldo.spec');
  //   await saveScreenshot(`${screenshotDir}/cekSaldoSuccess.png`);
  // });

  it('should successfully run logout test', async () => {
    // Menjalankan skenario logout
    await require('./logout.spec');
  });

  afterEach(async function () {
    // Menyimpan screenshot pada akhir setiap tes jika diperlukan
    // await saveScreenshot(`${screenshotDir}/afterEach.png`);
  });

});
