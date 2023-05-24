const path = require('path');
export default class Page {

    async doClick(element){
    await element.waitForDisplayed()
    await element.waitForClickable()
    await element.click()

    }
    doSetValue(element,value){
        element.waitForDisplayed()
        element.waitForClickable()
        element.clearValue()
        element.setValue(value)
    }

    doGetText(element){
        element.waitForDisplayed()
        element.waitForClickable()
        return element.getText()

    }
    doIsDisplayed(element){
        element.waitForDisplayed()
        element.waitForClickable()
        return element.isDisplayed()

    }
    async doScroll(){
        await browser.pause(3000)
        await browser.scroll(0, 150)
    } 
    async doScrollToObject(element){
        await element.waitForDisplayed()
        await element.waitForClickable()
        await element.scrollIntoView()
        
    }

    doGetPageTitle(pageTitle){
        browser.waitUntil(function(){
        
            return (browser.getTitle() === pageTitle)

        }),10000,'title is not displayed after the given time'
        
        return browser.getTitle()
    }
    async addImageToInputField(imagePath, inputFieldSelector) {
        // Get the input field element
        /*const inputField = await $(inputFieldSelector);
      
        const fileSize = require('fs').statSync(imagePath).size;
        if (fileSize > 100000) {
          console.log('Error: File size is larger than 100 KB');
         } else {
        await inputField.setValue(imagePath);
         }
         */
        //await inputFieldSelector.waitForDisplayed()
        await browser.pause(1000)
        const filepath = path.join(__dirname,imagePath)
        const remotefilepath = await browser.uploadFile(filepath)
        await inputFieldSelector.setValue(remotefilepath)
        await browser.pause(5000)
      }
    async doRefresh(){
        await browser.refresh()
        }

    async switchToNewTab (linkElement) {
        
        // Get the current window handle
        const currentHandle = await browser.getWindowHandle();
      
        // Open the link in a new tab
        await linkElement.click();
      
        // Wait for the new tab to open
        await browser.waitUntil(async () => {
        const handles = await browser.getWindowHandles();
        return handles.length > 1;
        });
        // Get the handles of all open windows/tabs
        const handles = await browser.getWindowHandles();

        // Find the handle of the new tab
        const newHandle = handles.find(handle => handle !== currentHandle);

        // Switch to the new tab
        await browser.switchToWindow(newHandle);
        await browser.pause(6000)
        await browser.closeWindow();
        await browser.switchToWindow(currentHandle)
       
        
    }
    async selectDropdownOption(selector, optionText) {
        const dropdown = await $(selector);
        await dropdown.click();
        await dropdown.waitForDisplayed();
        const option = await $(`${selector} option=${optionText}`);
        await option.scrollIntoView();
        await option.click();
      }
    async specialScroll(selector) {
        const element = $(selector);
        browser.execute("arguments[0].scrollIntoView({block: 'center', inline: 'center'})", element);
    }
    async scrollUp() {
        await browser.execute( async () => {
        await window.scrollBy(0, -window.innerHeight);
        });
      }
    async scrollDown() {
        await browser.execute( async () => {
        window.scrollBy(0, window.innerHeight);
        });
      }
      
    async clearText(element){
        await element.click()
        await browser.keys(['Control','a'])
        await browser.keys('Backspace')

      }

      async openLinkInNewTab(url,objectLocator) {
        // Get the handle of the current tab
        const currentTabHandle = await browser.getWindowHandle();
      
        // Open a new tab with the specified URL
        await browser.newWindow(url);
      
        // Switch to the new tab
        const windowHandles = await browser.getWindowHandles();
        const newTabHandle = windowHandles.find(handle => handle !== currentTabHandle);
        await browser.switchToWindow(newTabHandle);
      
        // Wait for the new tab to finish loading
        browser.waitUntil(() => {
          return browser.execute(() => document.readyState) === 'complete';
        }, {
          timeout: 10000,
          timeoutMsg: 'New tab did not finish loading within 10 seconds'
        });
      
        // Do something on the new tab
        // ...
        await this.specialScroll(objectLocator)
        await expect(objectLocator).toBeEnabled()
        await expect(objectLocator).toBeDisplayed()

        // Switch back to the previous tab
        browser.switchToWindow(currentTabHandle);
      
        // Close the new tab
        await browser.closeWindow();
      }
    
     /*
      */
      
}
