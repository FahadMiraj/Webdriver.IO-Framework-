import { keys } from 'wd/lib/commands';
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
    async doWait(){
        await browser.pause(2000)
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
        await browser.pause(3000)
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
        await window.scrollBy(0, window.innerHeight);
        });
      }
      async scrollUntilItemDisplayed(dropdownSelector, itemText) {
        const dropdown = await $(dropdownSelector);
        await dropdown.waitForDisplayed();
        await dropdown.click();
      
        while (true) {
          const items = await $$(`${dropdownSelector} option`);
          const selectedItem = items.find((item) => item.getText().includes(itemText));
          
          if (selectedItem) {
            await selectedItem.scrollIntoView();
            await selectedItem.click();
            break;
          }
          
          await browser.executeScript('arguments[0].scrollBy(0, 50)', dropdown);
          await browser.pause(500);
        }
      }

      async clearText(element){
        await element.click()
        await browser.keys(['Control','a'])
        await browser.keys('Backspace')

      }
    
     /*
      */

      
}
