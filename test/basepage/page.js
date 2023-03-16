const path = require('path');
export default class Page {

    open (path) {
        browser.url(`https://qa-admin.islamicfinder.org/${path}`)
        browser.maximizeWindow()
    }
    
    async doClick(element){
    await element.waitForDisplayed()
    await element.click()

    }
    doSetValue(element,value){
        element.waitForDisplayed()
        element.clearValue()
        element.setValue(value)
    }

    doGetText(element){
        element.waitForDisplayed()
        return element.getText()

    }
    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()

    }
    async doScroll(){
        await browser.pause(3000)
        await browser.scroll(0, 150)
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
        await inputFieldSelector.waitForDisplayed()
        const filepath = path.join(__dirname,imagePath)
        const remotefilepath = await browser.uploadFile(filepath)
        await inputFieldSelector.setValue(remotefilepath)
        await browser.pause(5000)
      }
     
    
     /*
      */

      
}
