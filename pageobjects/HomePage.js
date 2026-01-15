class HomePage{
    constructor(page){
        this.page = page;
        this.zaracoat = this.page.locator("//div[@class='card-body']/h5/b[text()='ZARA COAT 3']/../following-sibling::button[text()=' Add To Cart']");
        this.adidasOriginal = this.page.locator("//div[@class='card-body']/h5/b[text()='ADIDAS ORIGINAL']/../following-sibling::button[text()=' Add To Cart']");
        this.iphone = this.page.locator("//div[@class='card-body']/h5/b[text()='iphone 13 pro']/../following-sibling::button[text()=' Add To Cart']");
        this.cart = this.page.locator("//button[@routerlink='/dashboard/cart']");
    }
    async addToCart(){
        await this.zaracoat.click();
        // await this.adidasOriginal.click();
        // await this.iphone.click();
        await this.cart.click();
    }
}
module.exports = {HomePage};