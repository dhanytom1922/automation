describe('Automasi Pengujian Aplikasi - Semua Tes', () => {

    it('should successfully run positive tests', async () => {
        // Menjalankan semua tes positif
        await require('./testPositive.spec');
    });

    // it('should successfully run negative tests', async () => {
    //     // Menjalankan semua tes negatif
    //     await require('./testNegative.spec');
    // });

    // it('should successfully run abnormal tests', async () => {
    //     // Menjalankan semua tes abnormal
    //     await require('./testAbnormal.spec');
    // });

});
