const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('[name="username"]') }
    get inputPassword () { return $('[name="password"]') }
    get btnSubmit () { return $('input.btn.btn-success') }
    get errorMsg () { return $('.help-block')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
    }
}

module.exports = new LoginPage();
