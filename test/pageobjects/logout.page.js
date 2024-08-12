class LogoutPage {
  get settingsButton() {
    return $('android=new UiSelector().text("Profil")');
  }

  get logoutButton() {
    return $('android=new UiSelector().text("Keluar")');
  }

  get confirmLogoutButton() {
    return $('android=new UiSelector().text("Keluar")');
  }

  get cancelButton() {
    return $('android=new UiSelector().text("Batal")');
  }
}

module.exports = new LogoutPage();
