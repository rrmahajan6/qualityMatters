const { test, expect } = require('../tests/fixtures/DataFixtures');
const {PageObjectManager} = require('../pageobjects/PageObjectManager');
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