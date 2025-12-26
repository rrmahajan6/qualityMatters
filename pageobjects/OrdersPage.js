class OrdersPage{
	constructor(page){
		this.page = page;
		this.orderItems = this.page.locator("//h1[text()='Your Orders']/following-sibling::table/tbody/tr");
	}

	async verifyItemPresenceAndDelete(orders){
		if (!Array.isArray(orders)) {
			throw new TypeError('orders must be an array');
		}
		await this.page.waitForSelector("//h1[text()='Your Orders']/following-sibling::table/tbody/tr", { timeout: 5000 });
		const rowsCount = await this.orderItems.count();
        let flag = 0;
		for (let i = 1; i < rowsCount; i++) {
			const orderId1 = this.page.locator("//h1[text()='Your Orders']/following-sibling::table/tbody/tr["+i+"]/th",{timeout: 5000});
            const orderId = await orderId1.textContent();
            // console.log("order details "+orderId+" "+i);
            for(let j=0;j<=orders.length;j++){
                if (orderId == orders[j]) {  
				// await this.page.locator("//h1[text()='Your Orders']/following-sibling::table/tbody/tr["+i+"]/td[6]/button").click();
                // console.log("deleted");
                // flag++;
                break;
			}
            }
            // if(flag== orders.length){
            //     break;
            // }
		}
	}
}

module.exports = {OrdersPage}