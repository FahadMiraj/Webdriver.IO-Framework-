import { assert } from "chai";
import { data } from "../general/constants";
import login from "../pageobjects/login";
import home from "../pageobjects/home";

describe('IF Web_Admin_Panel- Login_Page : ', () => {
    
    it('verify Login_Page Title',async () => {
        
        const title = await login.getPageTitle()
        console.log('Login Page Title is :', title)
        assert.equal(data.LoginPageTitle, title, data.ErrorMsg) 
    });
  
    it('verify Login_Page Exists',async () => {
       assert.equal(true, await login.isLoginPageExist() , data.ErrorMsg )  
    });
 
    it('verify Login_Functionality with Valid user',async () => {
        await login.refresh()
        await login.doLogin(data.emailID,data.password)
        await expect(home.userProfile).toBeDisplayed()
    });
    
});