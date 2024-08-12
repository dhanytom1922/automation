const CekSaldoActions = require('../actions/cekSaldo.actions');
const { createScreenshotDir, saveScreenshot } = require('../helpers/screenshotHelper');

describe('Cek Saldo Flow', () => {
  const screenshotDir = './screenshots/cekSaldo';

  beforeEach(async () => {
    createScreenshotDir(screenshotDir);
    // Setup tambahan jika diperlukan
  });

  it('should successfully check saldo and handle receipt', async () => {
    await CekSaldoActions.cekSaldo();
  });

  afterEach(async function () {
    // Menyimpan screenshot pada setiap langkah tes
    await saveScreenshot(`${screenshotDir}/afterEach.png`);
  });
});
