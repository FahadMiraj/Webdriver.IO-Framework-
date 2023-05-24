import { data } from '../general/constants.js';
import Page from "../basepage/page"
import home from './home.js';
class BlogCategoriesPage extends Page {

    get addBlogCategory(){
        return $("//span[contains(text(),'Add Category')]")
    }
    get inputCategorySearch(){
        return $("//input[contains(@class,'ant-input')]")
    }
    get BlogCategorySearchBtn(){
        return $("//span[contains(@class,'anticon anticon-search')]")
    }
    get BlogCategoryAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get BlogCategoryNoData(){
        return $("//div[contains(@class,'ant-empty-description')]")
    }
    get userProfile(){
        return $("//button[contains(@class,'ant-btn ant-btn-text ant-dropdown-trigger pp-username')]")
    }
    ////////adding details for blog Category page getters///////////

    get BlogCategoryHeader(){
        return $("//div[contains(@class,'ant-modal-title')]")
    }
    get inputBlogCategoryName(){
        return $("#name")
    }
    get BlogCategoryCrossBtn(){
        return $("//span[contains(@class,'ant-modal-close-x')]")
    }
    get BlogCategoryCancelBtn(){
        return $("//span[contains(text(),'Cancel')]")
    }
    get BlogCategorySaveBtn(){
        return $("//span[contains(text(),'Save')]")
    }
    get BlogCategoryAddedMsg(){
        return $("//*[contains(text(),'Record added successfully!')]")
    }
    get selectAction(){
        return $("//div[contains(@class,'ant-select formSelect ant-select-single ant-select-show-arrow')]")

    }
    get edit(){
        return $("(//div[contains(@class,'ant-select-item-option-content')])[1]")
    }
    get editPopupHeader(){
        return $("//div[contains(@class,'ant-modal-title')]")
    }
    get inputCategoryEditText(){
        return $("#name")
    }
    get delete(){
        return $("(//div[contains(@class,'ant-select-item-option-content')])[2]")
    }
    get deleteCancel(){
        return $("//span[contains(text(),'Cancel')]")

    }
    get deleteOK(){
        return $("//span[contains(text(),'OK')]")
        
    }
    get spinLoader(){
        return $("//div[contains(@class,'ant-spin ant-spin-spinning')]")
    }

    /////////// Page Action ///////
async navigateToBlogCategories(){
    await this.userProfile.waitForDisplayed()
    await home.refresh()
    await home.Click_IF()
    await home.Click_Blog()
    await home.Click_BlogCategories()
    await this.addBlogCategory.waitForDisplayed()
}

async getBlogCategoryPageTitle(){
    return await super.doGetPageTitle(data.BlogCategoryPageTitle)}

async doAddBlogCategory(){
    return await super.doClick(this.addBlogCategory)
}
async ViewAll_BlogCategory(){
    return await super.doClick(this.BlogCategoryAllBtn)
}
async getHeader_CategoryPopup(){
    return await super.doGetText(this.BlogCategoryHeader)
}
async TapsViewAll(){
    return await super.doClick(this.BlogCategoryAllBtn)
}
async doSetBlogCategoryTitle(title){
    return await super.doSetValue(this.inputBlogCategoryName,title)

}
async doClickCancelAddCategoryPopup(){
    return await super.doClick(this.BlogCategoryCancelBtn)

}
async doClickCloseAddCategoryPopup(){
    await this.doAddBlogCategory()
    await super.doClick(this.BlogCategoryCrossBtn)

}
async doCreateBlogCategory(title){
    await super.doClick(this.addBlogCategory)
    await this.BlogCategoryHeader.waitForDisplayed()
    await this.inputBlogCategoryName.waitForClickable()
    await super.doSetValue(this.inputBlogCategoryName,title)
    await super.doClick(this.BlogCategorySaveBtn)
    await this.spinLoader.waitForDisplayed({reverse:true})
    //await this.BlogCategoryAddedMsg.waitForDisplayed()
}
async doSearchBlogCategory(title){
    await this.spinLoader.waitForDisplayed({reverse:true})
    await super.doIsDisplayed(this.inputCategorySearch)
    await super.doSetValue(this.inputCategorySearch,title)
    await this.selectAction.waitForDisplayed()
    await super.doClick(this.BlogCategorySearchBtn)

}
async doEditBlogCategory(title,editTitle){
    await this.doCreateBlogCategory(title)
    await this.doSearchBlogCategory(title)
    await this.spinLoader.waitForDisplayed({reverse:true})
    //await this.selectAction.waitForDisplayed()
    await super.doClick(this.selectAction)
    await super.doClick(this.edit)
    await this.inputCategoryEditText.waitForClickable()
    await super.doSetValue(this.inputCategoryEditText,editTitle)
    await super.doClick(this.BlogCategorySaveBtn)

}
async doDeleteBlogCategory(title){
    await this.doCreateBlogCategory(title)
    await this.doSearchBlogCategory(title)
    await this.spinLoader.waitForDisplayed({reverse:true})
    await this.selectAction.waitForDisplayed()
    await super.doClick(this.selectAction)
    await super.doClick(this.delete)
    await super.doClick(this.deleteOK)
}
async doDeleteCreatedBlogCategory(title){
    await this.refresh()
    await this.doSearchBlogCategory(title)
    await this.spinLoader.waitForDisplayed({reverse:true})
    await this.selectAction.waitForDisplayed()
    await super.doClick(this.selectAction)
    await super.doClick(this.delete)
    await super.doClick(this.deleteOK)
    await super.doClick(this.selectAction)
    await super.doClick(this.delete)
    await super.doClick(this.deleteOK)
}
async refresh(){
     super.doRefresh()
}

}
export default new BlogCategoriesPage();