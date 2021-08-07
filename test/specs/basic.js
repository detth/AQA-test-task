// // const assert = require('assert')
// // const data = require('./env.json');

// // describe('webdriver.io page', () => {
// //     xit('should detect if elements are existing', async () => {
// //         await browser.url('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
// //         let elem = await $('[name="username"]')
// //         let isExisting = await elem.isExisting()
// //         assert(isExisting)
    
// //         elem = await $('[name="password"]')
// //         isExisting = await elem.isExisting()
// //         assert(isExisting)

        
// //     })

// //     xit('should have the right title', async () => {
// //         await browser.url('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
// //         let loginBtn = await $('input.btn.btn-success')
// //         let userInput = await $('[name="username"]')
// //         let pswdInput = await $('[name="password"]')
// //         userInput.setValue(data.logins[0])
// //         pswdInput.setValue(data.passwords[0])
// //         await browser.pause(2000)
// //         loginBtn.click()

// //         const userField = await userInput.getValue()
// //         const pswdField = await pswdInput.getValue()
// //         await browser.saveScreenshot('./test/screenshot.png')

// //         assert(userField == data.logins[0])
// //         assert(pswdField != data.passwords[0])
// //         await browser.deleteSession()
        
// //     })
// // })

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

//     it('should deny access with wrong credentials', async () => {
//         await LoginPage.open()
//         await LoginPage.username.setValue(data.logins[0])
//         await LoginPage.password.setValue(data.passwords[0])
//         await LoginPage.login()

//         assert(LoginPage.error)
//     })

//     // xit('should allow access with correct creds', async () => {
//     //     await LoginPage.open()
//     //     await LoginPage.username.setValue('tomsmith')
//     //     await LoginPage.password.setValue('SuperSecretPassword!')
//     //     await LoginPage.submit()

//     //     await expect(LoginPage.flash).toHaveText('You logged into a secure area!')
//     // })
// })