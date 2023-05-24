import { data } from '../general/constants.js';
import Page from "../basepage/page"
import home from './home.js';

class GalleryCategoriesPage extends Page {
    get addGalleryCategory(){
        return $("//span[contains(text(),'Add Category')]")
    }
    get inputGalleryCategorySearch(){
        return $("//input[contains(@class,'ant-input')]")
    }
    get GalleryCategorySearchBtn(){
        return $("//span[contains(@aria-label,'search')]")
    }
    get GalleryCategoryAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get GalleryCategoryNoData(){
        return $("//div[contains(@class,'ant-empty-description')]")
    }
    get userProfile(){
        return $("//button[contains(@class,'ant-btn ant-btn-text ant-dropdown-trigger pp-username')]")
    }
    ////////adding details for Gallery Categories page getters///////////

    get GalleryCategoriesHeader(){
        return $("//div[contains(@class,'ant-modal-title')]")
    }
    get inputGalleryCategoriesTitle(){
        return $("#title")
    }
    get inputGalleryCategoriesDescription(){
        return $("#description")
    }
    get GalleryCategoriesSlug(){
        return $("#slug")
    }
    get GalleryCategoriesCrossBtn(){
        return $("//span[contains(@class,'ant-modal-close-x')]")
    }
    get GalleryCategoriesCancelBtn(){
        return $("//span[contains(text(),'Cancel')]")
    }
    get GalleryCategoriesSaveBtn(){
        return $("//span[contains(text(),'Save')]")
    }
    get GalleryCategoriesAddedMsg(){
        return $("//*[contains(text(),'Record added successfully!')]")
    }
    get selectActionGalleryCategories(){
        return $("//span[contains(@class,'ant-select-selection-search')]")

    }
    get editGalleryCategories(){
        return $("(//div[contains(@class,'ant-select-item-option-content')])[1]")
    }
    get editGalleryCategoriesPopupHeader(){
        return $("//div[contains(@class,'ant-modal-title')]")
    }
    get inputGalleryCategoriesEditTitle(){
        return $("#title")
    }
    get inputGalleryCategoriesEditDescription(){
        return $("#description")
    }
    get deleteGalleryCategories(){
        return $("(//div[contains(@class,'ant-select-item-option-content')])[2]")
    }
    get deleteCancelGalleryCategories(){
        return $("//span[contains(text(),'Cancel')]")

    }
    get deleteOkGalleryCategories(){
        return $("//span[contains(text(),'OK')]")
        
    }
    get spinLoader(){
        return $("//div[contains(@class,'ant-spin ant-spin-spinning')]")
    }

/////////// Page Action ///////
async navigateToGalleryCategories(){
    await this.userProfile.waitForDisplayed()
    await home.refresh()
    await home.Click_IF()
    await home.Click_Gallery()
    await home.Click_GalleryCategories()
}
async getGalleryCategoriesPageTitle(){
    return await super.doGetPageTitle(data.GalleryCategoriesPageTitle)
}
async doAddGalleryCategories(){
    return await super.doClick(this.addGalleryCategory)
}
async getHeader_GalleryCategoriesPopup(){
    return await super.doGetText(this.GalleryCategoriesHeader)
}
async TapsViewAll(){
    return await super.doClick(this.GalleryCategoryAllBtn)
}    
async doClickCancelGalleryCategoriesPopup(){
    await super.doClick(this.GalleryCategoriesCancelBtn)
}
async doClickCloseAddGalleryCategoriesPopup(){
    await this.doAddGalleryCategories()
    await super.doClick(this.GalleryCategoriesCrossBtn)

}
async doCreateGalleryCategories(title,description){
    await super.doClick(this.addGalleryCategory)
    await this.spinLoader.waitForDisplayed({reverse:true})
    await this.GalleryCategoriesHeader.waitForDisplayed()
    await this.inputGalleryCategoriesTitle.waitForClickable()
    await super.doSetValue(this.inputGalleryCategoriesTitle,title)
    await this.inputGalleryCategoriesDescription.waitForDisplayed()
    await super.doSetValue(this.inputGalleryCategoriesDescription,description)
    await this.GalleryCategoriesSaveBtn.waitForClickable()
    await super.doClick(this.GalleryCategoriesSaveBtn)
    await this.GalleryCategoriesAddedMsg.waitForDisplayed()
}
async doSearchGalleryCategories(title){
    await super.doIsDisplayed(this.inputGalleryCategorySearch)
    await this.inputGalleryCategorySearch.waitForClickable()
    await super.doSetValue(this.inputGalleryCategorySearch,title)
    await this.GalleryCategorySearchBtn.waitForClickable()
    await super.doClick(this.GalleryCategorySearchBtn)
}  
async doEditGalleryCategories(title,description,editTitle,editDescription){

    await this.doCreateGalleryCategories(title,description)
    await this.doSearchGalleryCategories(title)
    await this.selectActionGalleryCategories.waitForDisplayed()
    await super.doClick(this.selectActionGalleryCategories)
    await this.editGalleryCategories.waitForClickable()
    await super.doClick(this.editGalleryCategories)
    await this.inputGalleryCategoriesEditTitle.waitForClickable()
    await super.doSetValue(this.inputGalleryCategoriesEditTitle,editTitle)
    await super.doSetValue(this.inputGalleryCategoriesEditDescription,editDescription)
    await super.doClick(this.GalleryCategoriesSaveBtn)
}
async doDeleteGalleryCategories(title,description){
    await this.doCreateGalleryCategories(title,description)
    await this.doSearchGalleryCategories(title)
    await super.doClick(this.selectActionGalleryCategories)
    await this.deleteGalleryCategories.waitForClickable()
    await super.doClick(this.deleteGalleryCategories)
    await super.doClick(this.deleteOkGalleryCategories)
}
async doDeleteCreatedGalleryCategories(title){
    await this.refresh()
    await this.doSearchGalleryCategories(title)
    await super.doClick(this.selectActionGalleryCategories)
    await this.deleteGalleryCategories.waitForClickable()
    await super.doClick(this.deleteGalleryCategories)
    await super.doClick(this.deleteOkGalleryCategories)
    await super.doClick(this.selectActionGalleryCategories)
    await super.doClick(this.deleteGalleryCategories)
    await super.doClick(this.deleteOkGalleryCategories)
}
async refresh(){
     super.doRefresh()
}  

}
export default new GalleryCategoriesPage();