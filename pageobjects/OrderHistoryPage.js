class OrderHistoryPage{
    constructor(page){
        this.page = page;
        this.orderhistoryLink = this.page.locator("//label[@routerlink='/dashboard/myorders']");
        this.downloadCsv = this.page.getByRole('button',{name:'Click To Download Order Details in CSV'});
        this.orderIds = this.page.locator("//td[@class='em-spacer-1']/label[@class='ng-star-inserted']");
    }
    async downloadCsvFile(){
        await this.downloadCsv.click();
    }
    async fetchOrderIds(){
        const texts = await this.orderIds.allTextContents();
        const orders = texts.map(t => t.replace(/\|/g, '').trim()).filter(Boolean);
        // console.log(orders);
        await this.orderhistoryLink.click();
        return orders;
    }
}
module.exports = {OrderHistoryPage};