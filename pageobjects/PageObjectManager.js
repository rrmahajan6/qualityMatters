const {LoginPage} = require('./Loginpage');
const {HomePage} = require('./HomePage');
const {CheckoutPage} = require('./CheckoutPage');
const {PaymentPage} = require('./PaymentPage');
const {OrderHistoryPage} = require('./OrderHistoryPage');
const {OrdersPage} = require('./OrdersPage');
class PageObjectManager{
    constructor(page){
        this.page = page;
        this.loginpage = new LoginPage(this.page);
        this.homepage = new HomePage(this.page);
        this.checkoutpage = new CheckoutPage(page);
        this.paymentpage = new PaymentPage(this.page);
        this.orderhistorypage = new OrderHistoryPage(this.page);
        this.orderspage = new OrdersPage(this.page);
    }
     getLoginPage(){
        return this.loginpage;
    };
    getHomePage(){
        return this.homepage;
    };
    getCheckoutPage(){
        return this.checkoutpage;
    }
    getPaymentPage(){
        return this.paymentpage;
    };
    getOrderHistoryPage(){
        return this.orderhistorypage;
    };
    getOrdersPage(){
        return this.orderspage;
    }
}
module.exports = {PageObjectManager}