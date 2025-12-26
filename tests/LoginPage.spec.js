// const { test, expect } = require('@playwright/test');
const {PageObjectManager} = require('../pageobjects/PageObjectManager');
// const userData = JSON.parse(JSON.stringify(require("../tests/testData/userdata.json")));
// for(const data of userData){
//     test(`Login Test – ${data.username}`,async({page})=>{
//         console.log(data.username);
//     })
// }

// const userData = require('../tests/testData/userdata.json');
// test('Login page', async({page})=>{
//     const pomanager = new PageObjectManager(page);
//     await pomanager.getLoginPage().navigateToWebsite();
//     await pomanager.getLoginPage().login(userData.username,userData.password);
//     await pomanager.getHomePage().addToCart();
//     await pomanager.getCheckoutPage().CheckoutProducts()
//     await pomanager.getPaymentPage().placeOrder("123","Rahul");
//     await pomanager.getOrderHistoryPage().downloadCsvFile();
//     const orders = await pomanager.getOrderHistoryPage().fetchOrderIds();
//     await pomanager.getOrdersPage().verifyItemPresenceAndDelete(orders);
//     await page.waitForTimeout(5000);
// });
const { test, expect } = require('../tests/fixtures/DataFixtures');
test('Login page', async({page, userData,creditcardInfo})=>{
    const pomanager = new PageObjectManager(page);
    await pomanager.getLoginPage().navigateToWebsite();
    await pomanager.getLoginPage().login(userData.username,userData.password);
    await pomanager.getHomePage().addToCart();
    await pomanager.getCheckoutPage().CheckoutProducts()
    await pomanager.getPaymentPage().placeOrder(creditcardInfo.cardNumber,creditcardInfo.nameOnCard);
    await pomanager.getOrderHistoryPage().downloadCsvFile();
    const orders = await pomanager.getOrderHistoryPage().fetchOrderIds();
    await pomanager.getOrdersPage().verifyItemPresenceAndDelete(orders);
    await page.waitForTimeout(5000);
});