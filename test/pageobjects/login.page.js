class LoginPage {
    get cidField() {
      return $('android=new UiSelector().text("CID")');
    }
  
    get usernameField() {
      return $('android=new UiSelector().text("Username")');
    }
  
    get passwordField() {
      return $('android=new UiSelector().text("Password")');
    }
  
    get loginGroup() {
      return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]');
    }
  }
  
  module.exports = new LoginPage();

  // sada 
  