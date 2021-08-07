const LoginPage = require('../pageobjects/login.page');
const assert = require('assert')
const data = require('./env.json')

describe('Login form', () => {
    it('should detect if elements are existing', async () => {
        await LoginPage.open();
        assert(await LoginPage.inputUsername.isExisting());

        assert(await LoginPage.inputPassword.isExisting());

        assert(await LoginPage.btnSubmit.isExisting());
    });

    it('should login with invalid credentials', async () => {

        await LoginPage.login(data.logins[0], data.passwords[0]);
        const message = await LoginPage.errorMsg.getText();
        assert(message == 'No account found with that username.');
        
    });


});


