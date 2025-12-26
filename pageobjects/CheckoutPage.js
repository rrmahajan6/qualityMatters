class CheckoutPage{
    constructor(page){
        this.page = page;
        this.checkoutBtn = this.page.locator("//button[text()='Checkout']");
    }
    async CheckoutProducts(){
        await this.checkoutBtn.click();
    }
}
module.exports = {CheckoutPage};