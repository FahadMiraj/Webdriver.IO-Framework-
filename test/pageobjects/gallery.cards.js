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
    get userProfile(){
        return $("//button[contains(@class,'ant-btn ant-btn-text ant-dropdown-trigger pp-username')]")
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
        return $("//*[contains(text(),'hajj')]")
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
    get spinLoader(){
        return $("//div[contains(@class,'ant-spin ant-spin-spinning')]")
    }
    /////////// Page Action ///////
    
    async navigateToGalleryCards(){
        await this.userProfile.waitForDisplayed()
        await home.refresh()
        await home.Click_IF()
        await home.Click_Gallery()
        await home.Click_GalleryCards()
    }
    async getGalleryCardsPageTitle(){
        return await super.doGetPageTitle(data.GalleryCardsPageTitle)
    }
    async doClickUploadGalleryCards(){
        await this.uploadGalleryCards.waitForDisplayed()
        await super.doClick(this.uploadGalleryCards)
    }
    async getHeader_GalleryCardsPage(){
        return await super.doGetText(this.GalleryCardPageHeader)
    }
    async TapsViewAll(){
        await this.GalleryCardsAllBtn.waitForClickable()
        await super.doClick(this.GalleryCardsAllBtn)
    }    
    async doClickCancelUploadGalleryCardsPage(){
        await this.GalleryCardCancelBtn.waitForClickable()
        await super.doClick(this.GalleryCardCancelBtn)
    }
    async doUploadGalleryCard(title,description,thumbnail,card){
        await super.doClick(this.uploadGalleryCards)
        await super.doClick(this.selectCardCategory)
        //await super.doScrollToObject(this.selectCardCategoryMenuItem)
        await super.doClick(this.selectCardCategoryMenuItem)
        await super.addImageToInputField(thumbnail,this.inputGalleryCardThumbnailImage)
        await super.addImageToInputField(card,this.inputGalleryCardImage)
        await super.doSetValue(this.inputGalleryCardTitle,title)
        await super.doSetValue(this.inputGalleryCardDescription,description)
        await super.doScrollToObject(this.GalleryCardSaveBtn)
        await super.doClick(this.GalleryCardSaveBtn)
        await this.spinLoader.waitForDisplayed()
        await this.GalleryCardAddedMsg.waitForDisplayed()
    }
    async doCheckCreatedGalleryCards(){
        await this.uploadGalleryCards.waitForDisplayed()
        await this.spinLoader.waitForDisplayed()
        await this.refresh()
        await this.selectCardCategory.waitForClickable()
        await super.doClick(this.selectCardCategory)
        //await super.doScrollToObject(this.selectCardCategoryMenuItem)
        await super.doClick(this.selectCardCategoryMenuItem)
    }
    async doEditGalleryCards(title,description,thumbnail,card,editTitle,editDescription,editThumbnail,editCard){
        await this.doUploadGalleryCard(title,description,thumbnail,card)
        await this.doCheckCreatedGalleryCards()
        await this.selectActionGalleryCard.waitForClickable()
        await super.doClick(this.selectActionGalleryCard)
        await super.doClick(this.editGalleryCard)
        await this.inputGalleryCardThumbnailImage.waitForDisplayed()
        await super.doClick(this.selectCardCategory)
        await super.doClick(this.selectCardCategoryMenuItem)
        await super.addImageToInputField(editThumbnail,this.inputGalleryCardThumbnailImage)
        await super.addImageToInputField(editCard,this.inputGalleryCardImage)
        await super.doSetValue(this.inputGalleryCardEditTitle,editTitle)
        await super.doSetValue(this.inputGalleryCardEditDescription,editDescription)
        await super.doScrollToObject(this.GalleryCardSaveBtn)
        await super.doClick(this.GalleryCardSaveBtn)
    }
    async doDeleteGalleryCard(title,description,thumbnail,card){
        await this.refresh()
        await this.doUploadGalleryCard(title,description,thumbnail,card)
        await this.doCheckCreatedGalleryCards()
        await this.spinLoader.waitForDisplayed()
        await this.selectActionGalleryCard.waitForClickable()
        await super.doClick(this.selectActionGalleryCard)
        await super.doClick(this.deleteGalleryCard)
        await super.doClick(this.deleteOkGalleryCard)
    }
    async doDeleteCreatedGalleryCards(){
        await this.refresh()
        await this.doCheckCreatedGalleryCards()
        await this.spinLoader.waitForDisplayed()
        await this.selectActionGalleryCard.waitForClickable()
        await super.doClick(this.selectActionGalleryCard)
        await super.doClick(this.deleteGalleryCard)
        await super.doClick(this.deleteOkGalleryCard)
        await super.doClick(this.selectActionGalleryCard)
        await super.doClick(this.deleteGalleryCard)
        await super.doClick(this.deleteOkGalleryCard)
    }
    async refresh(){
        super.doRefresh()
    }
    
}
export default new GalleryCardsPage();