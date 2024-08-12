class CekSaldoPage {
  get homeElement() {
    return $('android=new UiSelector().resourceId("android:id/content")');
  }

  get cekSaldoMenu() {
    return $('android=new UiSelector().text("Cek Saldo")');
  }

  get cekSekarangButton() {
    return $('android=new UiSelector().text("CEK SEKARANG")');
  }

  get tabunganOption() {
    return $('android=new UiSelector().text("TABUNGAN")');
  }

  get pinInput() {
    return $('//android.view.View[@resource-id="com.whty.tysecuritypin:id/keyboard_view"]');
  }

  get selesaiButton() {
    return $('android=new UiSelector().text("Selesai")');
  }

  get reprintButton() {
    return $('//android.widget.LinearLayout[@resource-id="com.mycroatm:id/linPrintSaldo"]');
  }
}

module.exports = new CekSaldoPage();
