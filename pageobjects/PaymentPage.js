class PaymentPage{

    constructor(page){
        this.page = page;
        this.cvvcode = this.page.locator("(//input[@type='text'])[2]");
        this.nameOnCard = this.page.locator("(//input[@type='text'])[3]");
        this.placeOrderBtn = this.page.locator("//a[text()='Place Order ']");
        this.selectCountry = this.page.locator("//input[@placeholder= 'Select Country']");
        this.selectIndia = this.page.locator("//span[text()= ' India']");
    }
    async placeOrder(cvv, name){
        await this.cvvcode.fill(cvv);
        await this.nameOnCard.fill(name);
        await this.selectCountry.click();
        await this.selectCountry.type('india');
        await this.selectIndia.click();
        await this.placeOrderBtn.click();
    }
}
module.exports = {PaymentPage}