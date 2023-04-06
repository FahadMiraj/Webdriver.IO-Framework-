import { data } from '../general/constants.js';
import Page from "../basepage/page"
import home from './home.js';

class GalleryCardsPage extends Page {
    get uploadGalleryCards(){
        return $("//span[contains(text(),'Upload Card')]")
    }
    get selectGalleryCardsCategories(){
        return $("//input[contains(@class,'ant-select-selection-search-input')]")
    }
    get GalleryCardsAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get GalleryCardsNoData(){
        return $("//div[contains(@class,'ant-empty-description')]")
    }
    ////////adding details for Gallery Cards page getters///////////
    get GalleryCardCancelBtn(){
        return $("//span[contains(text(),'Cancel')]")
    }
    get GalleryCardSaveBtn(){
        return $("//span[contains(text(),'Save')]")
    }
    get GalleryCardAddedMsg(){
        return $("//*[contains(text(),'Record added successfully!')]")
    }
    get GalleryCardUpdatedMsg(){
        return $("//*[contains(text(),'Record updated successfully!')]")
    }
    get selectActionGalleryCard(){
        return $("(//div[contains(@class,'ant-select-selector')])[2]")

    }
    get editGalleryCard(){
        return $("(//div[contains(text(),'Edit')])[2]")
    }
    get editGalleryCardPageHeader(){
        return $("//h1[contains(text(),'Upload Card')]")
    }
    get inputGalleryCardEditTitle(){
        return $("#title")
    }
    get inputGalleryCardEditDescription(){
        return $("#description")
    }
    get deleteGalleryCard(){
        return $("(//div[contains(text(),'Delete')])[2]")
    }
    get deleteCancelGalleryCard(){
        return $("//span[contains(text(),'Cancel')]")

    }
    get deleteOkGalleryCard(){
        return $("//span[contains(text(),'OK')]")
        
    }
    get GalleryCardPageHeader(){
        return $("//h1[contains(text(),'Upload Card')]")
    }
    get inputGalleryCardTitle(){
        return $("#title")
    }
    get selectCardCategory(){
        return $("//span[contains(@class,'ant-select-selection-item')]")
    }
    get selectCardCategoryMenuItem(){
        return $("(//div[contains(@class,'ant-select-item-option-content')])[9]")
    }
    get inputGalleryCardThumbnailImage(){
        return $("(//input[contains(@type,'file')])[1]")
    }
    get inputGalleryCardImage(){
        return $("(//input[contains(@type,'file')])[2]")
    }
    get inputGalleryCardDescription(){
        return $("#description")
    }
    /////////// Page Action ///////
    
    async navigateToGalleryCards(){
        await home.refresh()
        await home.Click_IF()
        await home.Click_Gallery()
        await home.Click_GalleryCards()
    }
    async getGalleryCardsPageTitle(){
        return await super.doGetPageTitle(data.GalleryCardsPageTitle)
    }
    async doClickUploadGalleryCards(){
        return await super.doClick(this.uploadGalleryCards)
    }
    async getHeader_GalleryCardsPage(){
        return await super.doGetText(this.GalleryCardPageHeader)
    }
    async TapsViewAll(){
        return await super.doClick(this.GalleryCardsAllBtn)
    }    
    async doClickCancelUploadGalleryCardsPage(){
        await super.doScrollToObject(this.GalleryCardCancelBtn)
        await super.doClick(this.GalleryCardCancelBtn)
        await super.doScrollToObject(this.uploadGalleryCards)
    }
    async doUploadGalleryCard(title,description,thumbnail,card){
        await super.doWait()
        await super.doClick(this.uploadGalleryCards)
        await this.GalleryCardPageHeader.waitForDisplayed()
        await super.doWait()
        await super.doSetValue(this.inputGalleryCardTitle,title)
        await super.doWait()
        await super.doClick(this.selectCardCategory)
        await super.doWait()
        await super.doScrollToObject(this.selectCardCategoryMenuItem)
        await super.doClick(this.selectCardCategoryMenuItem)
        await super.addImageToInputField(thumbnail,this.inputGalleryCardThumbnailImage)
        await super.addImageToInputField(card,this.inputGalleryCardImage)
        await super.doSetValue(this.inputGalleryCardDescription,description)
        await super.doWait()
        await super.doScrollToObject(this.GalleryCardSaveBtn)
        await super.doClick(this.GalleryCardSaveBtn)
        await this.GalleryCardAddedMsg.waitForDisplayed()
        await super.doWait()
    }
    async doCheckCreatedGalleryCards(){
        await super.doWait()
        await this.refresh()
        await super.doClick(this.selectCardCategory)
        await super.doWait()
        await super.doScrollToObject(this.selectCardCategoryMenuItem)
        await super.doClick(this.selectCardCategoryMenuItem)
        await super.doWait()
    }
    async doEditGalleryCards(title,description,thumbnail,card,editTitle,editDescription,editThumbnail,editCard){
        await super.doWait()
        await this.doUploadGalleryCard(title,description,thumbnail,card)
        await this.doCheckCreatedGalleryCards()
        await super.doWait()
        await super.doClick(this.selectActionGalleryCard)
        await super.doWait()
        await super.doClick(this.editGalleryCard)
        await super.doWait()
        await super.doSetValue(this.inputGalleryCardEditTitle,editTitle)
        await super.doWait()
        await super.addImageToInputField(editThumbnail,this.inputGalleryCardThumbnailImage)
        await super.addImageToInputField(editCard,this.inputGalleryCardImage)
        await super.doWait()
        await super.doSetValue(this.inputGalleryCardEditDescription,editDescription)
        await super.doWait()
        await super.doScrollToObject(this.GalleryCardSaveBtn)
        await super.doWait()
        await super.doClick(this.GalleryCardSaveBtn)
    }
    async doDeleteGalleryCard(title,description,thumbnail,card){
        await super.doWait()
        await this.refresh()
        await this.doUploadGalleryCard(title,description,thumbnail,card)
        await super.doWait()
        await this.doCheckCreatedGalleryCards()
        await super.doWait()
        await super.doClick(this.selectActionGalleryCard)
        await super.doWait()
        await super.doClick(this.deleteGalleryCard)
        await super.doWait()
        await super.doClick(this.deleteOkGalleryCard)
    }
    async doDeleteCreatedGalleryCards(){
        await super.doWait()
        await this.refresh()
        await this.doCheckCreatedGalleryCards()
        await super.doWait()
        await super.doClick(this.selectActionGalleryCard)
        await super.doWait()
        await super.doClick(this.deleteGalleryCard)
        await super.doWait()
        await super.doClick(this.deleteOkGalleryCard)
        await super.doWait()
        await super.doClick(this.selectActionGalleryCard)
        await super.doWait()
        await super.doClick(this.deleteGalleryCard)
        await super.doWait()
        await super.doClick(this.deleteOkGalleryCard)
    }
    async refresh(){
        super.doRefresh()
    }
    
}
export default new GalleryCardsPage();