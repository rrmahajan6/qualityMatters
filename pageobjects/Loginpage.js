class LoginPage{
    constructor(page){
        this.page = page;
        this.email= page.locator("#userEmail");
        this.password= page.locator("#userPassword");
        this.loginButton = page.locator("#login");
    }
    async login(username, password){
        await this.email.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async navigateToWebsite(){
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }
}
module.exports = {LoginPage};