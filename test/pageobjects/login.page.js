const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () { return $('[name="username"]') }
    get inputPassword () { return $('[name="password"]') }
    get btnSubmit () { return $('input.btn.btn-success') }
    get errorMsg () { return $('.help-block')}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
    }
}

module.exports = new LoginPage();
