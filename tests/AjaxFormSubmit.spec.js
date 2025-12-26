const {test,page} = require('@playwright/test')

test('test case for ajax form',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    let ajaxFormSubmitLink = page.locator("//a[text()='Ajax Form Submit']");
    await ajaxFormSubmitLink.click();
});