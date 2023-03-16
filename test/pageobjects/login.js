import Page from '../basepage/page.js';
import { data } from '../general/constants.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     * PAGE LOCATORS AND THEIR GETTERS
     */
    get inputUsername () {
        return $('#basic_email');
    }

    get inputPassword () {
        return $('#basic_password');
    }

    get loginBtn(){
        return $("//*[contains(text(),'Login')]")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     * PAGE ACTIONS/METHODS
     */
    
    async getPageTitle(){
        return await super.doGetPageTitle(data.LoginPageTitle)

    }
    async isLoginPageExist(){
        return await super.doIsDisplayed(this.loginBtn)
    }
    async doLogin(emailID,pwd){
        super.doSetValue(this.inputUsername, emailID)
        super.doSetValue(this.inputPassword,pwd)
        await this.loginBtn.click()
        await this.loginBtn.click()
        
    }

}

export default new LoginPage();
