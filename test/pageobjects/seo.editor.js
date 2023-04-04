import { data } from '../general/constants.js';
import Page from "../basepage/page"
import { title } from 'wd/lib/commands.js';
import home from './home.js';
import { keys } from 'wd/lib/commands';

class seoEditor extends Page {

    /**
     * define selectors using getter methods
     * PAGE LOCATORS AND THEIR GETTERS
     */
    get seoEditor(){
        return $("//a[contains(@href,'/seoeditor')]")
    }
    get seoPageHeaderText(){
        return $("//h1[contains(text(),'SEO Editor')]")
    }
    get seoEditorSelectPage(){
        return $("(//span[contains(@class,'ant-select-selection-item')])[1]")
    }
    get seoEditorInputPage(){
        return $("//*[contains(text(),'Date Converter')]")
    }
    get seoEditorSelectLanguage(){
        return $("(//span[contains(@class,'ant-select-selection-item')])[2]")
    }
    get languageItems(){
        return $$("//div[contains(@class,'ant-select-item-option-content')]")
    }
    get seoEditorInputLanguage(){
        return $("//*[contains(text(),'English')]")
    }
    get seoEditorInputMetaTitle(){
        return $("#title")
    }
    get seoEditorInputMetaDescription(){
        return $("#description")
    }
    get seoEditorInputMetaEmptyTextBox(){
        return $("//div[contains(@class,'ql-editor ql-blank')]")
    }
    get seoEditorInputMetaTextBox(){
        return $("//div[contains(@class,'ql-editor')]")
    }
    get seoEditorSaveBtn(){
        return $("//span[contains(text(),'Save')]")
    }
    get seoTextFormatList(){
        return $$("//div[contains(@class,'ql-toolbar ql-snow')]")
    }
    get seoCreatedMsg(){
        return $("//*[contains(text(),'Record updated successfully!')]")
    }
    get seoPageSelectMsg(){
        return $("//*[contains(text(),'Please select Page')]")
    }
    get seoLanguageSelectMsg(){
        return $("//*[contains(text(),'Please select Language')]")
    }
    get seoEnterTitleMsg(){
        return $("//*[contains(text(),'Please enter title')]")
    }
    get seoEnterDescriptionMsg(){
        return $("//*[contains(text(),'Please enter description')]")
    }
    get spinLoader(){
        return $("//div[contains(@class,'ant-spin ant-spin-spinning')]")
    }

    /////////// Page Action ///////

    async navigateToSeoPage(){
        await home.refresh()
        await home.Click_IF()
        await home.Click_SEO()
    }
    async getSeoPageTitle(){
        return await super.doGetPageTitle(data.SEOPageTitle)
    }
    async getHeader_SeoPage(){
        return await super.doGetText(this.seoPageHeaderText)
    }
    async saveBtnClickable(){
        await this.seoEditorSaveBtn.waitForClickable()
        await super.doClick(this.seoEditorSaveBtn)
    }
    async doCreateSeoPageWithoutPage(title,description,boxText){
        await super.doRefresh()
        await super.doWait()
        await super.doClick(this.seoEditorSelectLanguage)
        await super.doWait()
        await super.doClick(this.seoEditorInputLanguage)
        await expect(this.spinLoader).not.toBeDisplayed()
        await super.doWait()
        await super.clearText(this.seoEditorInputMetaTitle)
        await super.clearText(this.seoEditorInputMetaDescription)
        await super.clearText(this.seoEditorInputMetaTextBox)
        await super.doSetValue(this.seoEditorInputMetaTitle,title)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaDescription,description)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaTextBox,boxText)
        await super.doWait()
        await super.doClick(this.seoEditorSaveBtn)
    }
    async doCreateSeoPageWithoutLanguage(title,description,boxText){
        await super.doRefresh()
        await super.doWait()
        await super.doClick(this.seoEditorSelectPage)
        await super.doWait()
        await super.doClick(this.seoEditorInputPage)
        await expect(this.spinLoader).not.toBeDisplayed()
        await super.doWait()
        await super.clearText(this.seoEditorInputMetaTitle)
        await super.clearText(this.seoEditorInputMetaDescription)
        await super.clearText(this.seoEditorInputMetaTextBox)
        await super.doSetValue(this.seoEditorInputMetaTitle,title)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaDescription,description)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaTextBox,boxText)
        await super.doWait()
        await super.doClick(this.seoEditorSaveBtn)
    }
    async doCreateSeoPageWithoutTitle(description,boxText){
        await super.doRefresh()
        await super.doWait()
        await super.doClick(this.seoEditorSelectPage)
        await super.doWait()
        await super.doClick(this.seoEditorInputPage)
        await super.doWait()
        await super.doClick(this.seoEditorSelectLanguage)
        await super.doWait()
        await super.doClick(this.seoEditorInputLanguage)
        await expect(this.spinLoader).not.toBeDisplayed()
        await super.doWait()
        await super.clearText(this.seoEditorInputMetaTitle)
        await super.clearText(this.seoEditorInputMetaDescription)
        await super.clearText(this.seoEditorInputMetaTextBox)
        await super.doSetValue(this.seoEditorInputMetaDescription,description)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaTextBox,boxText)
        await super.doWait()
        await super.doClick(this.seoEditorSaveBtn)
    }
    async doCreateSeoPageWithoutDesc(title,boxText){
        await super.doRefresh()
        await super.doWait()
        await super.doClick(this.seoEditorSelectPage)
        await super.doWait()
        await super.doClick(this.seoEditorInputPage)
        await super.doWait()
        await super.doClick(this.seoEditorSelectLanguage)
        await super.doWait()
        await super.doClick(this.seoEditorInputLanguage)
        await expect(this.spinLoader).not.toBeDisplayed()
        await super.doWait()
        await super.clearText(this.seoEditorInputMetaTitle)
        await super.clearText(this.seoEditorInputMetaDescription)
        await super.clearText(this.seoEditorInputMetaTextBox)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaTitle,title)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaTextBox,boxText)
        await super.doWait()
        await super.doClick(this.seoEditorSaveBtn)
    }
    async doCreateSeoPageWithoutBoxText(title,description){
        await super.doRefresh()
        await super.doWait()
        await super.doClick(this.seoEditorSelectPage)
        await super.doWait()
        await super.doClick(this.seoEditorInputPage)
        await super.doWait()
        await super.doClick(this.seoEditorSelectLanguage)
        await super.doWait()
        await super.doClick(this.seoEditorInputLanguage)
        await expect(this.spinLoader).not.toBeDisplayed()
        await super.doWait()
        await super.clearText(this.seoEditorInputMetaTitle)
        await super.clearText(this.seoEditorInputMetaDescription)
        await super.clearText(this.seoEditorInputMetaTextBox)
        await super.doSetValue(this.seoEditorInputMetaTitle,title)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaDescription,description)
        await super.doWait()
        await super.doClick(this.seoEditorSaveBtn)
    }
    async doCreateSeoPage(title,description,boxText){
        await super.doRefresh()
        await super.doWait()
        await super.doClick(this.seoEditorSelectPage)
        await super.doWait()
        await super.doClick(this.seoEditorInputPage)
        await super.doWait()
        await super.doClick(this.seoEditorSelectLanguage)
        await super.doWait()
        await super.doClick(this.seoEditorInputLanguage)
        await expect(this.spinLoader).not.toBeDisplayed()
        await super.doWait()
        await super.clearText(this.seoEditorInputMetaTitle)
        await super.clearText(this.seoEditorInputMetaDescription)
        await super.clearText(this.seoEditorInputMetaTextBox)
        await super.doSetValue(this.seoEditorInputMetaTitle,title)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaDescription,description)
        await super.doWait()
        await super.doSetValue(this.seoEditorInputMetaTextBox,boxText)
        await super.doWait()
        await super.doClick(this.seoEditorSaveBtn)
    }

}
export default new seoEditor();