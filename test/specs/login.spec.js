// import LoginPage from '../pageobjects/login.page'
// const assert = require('assert')
// const data = require('./env.json')

// describe('login form', () => {

//     it('should detect if elements are existing', async () => {
//         await LoginPage.open()
//         let isExisting = await LoginPage.username.isExisting()
//         assert(isExisting)
    
//         isExisting = await LoginPage.password.isExisting()
//         assert(isExisting)
        
//         isExisting = await LoginPage.loginBtn.isExisting()
//         assert(isExisting)
//     })

//     // it('should deny access with wrong credentials', async () => {
//     //     await LoginPage.open()
//     //     await LoginPage.username.setValue(data.logins[0])
//     //     await LoginPage.password.setValue(data.passwords[0])
//     //     await browser.pause(2000)
//     //     await LoginPage.login()

//     //     assert(LoginPage.error.toHaveText('No account found with that username.'))
//     // })

//     // xit('should allow access with correct creds', async () => {
//     //     await LoginPage.open()
//     //     await LoginPage.username.setValue('tomsmith')
//     //     await LoginPage.password.setValue('SuperSecretPassword!')
//     //     await LoginPage.submit()

//     //     await expect(LoginPage.flash).toHaveText('You logged into a secure area!')
//     // })
// })