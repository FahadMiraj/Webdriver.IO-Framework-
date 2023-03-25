import { data } from '../general/constants.js';
import Page from "../basepage/page"

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
    ////////adding details for blog Category page getters///////////

    get BlogCategoryHeader(){
        return $("#rcDialogTitle0")
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
        return $("#rcDialogTitle0")
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

    /////////// Page Action ///////

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
    await super.doClick(this.BlogCategoryAllBtn)
}
async doSetBlogCategoryTitle(title){
    super.doSetValue(this.inputBlogCategoryName,title)

}
async doClickCancelAddCategoryPopup(){
    await super.doClick(this.BlogCategoryCancelBtn)

}
async doClickCloseAddCategoryPopup(){
    await this.doAddBlogCategory()
    await super.doWait()
    await super.doClick(this.BlogCategoryCrossBtn)

}
async doCreateBlogCategory(title){
    await super.doClick(this.addBlogCategory)
    await this.BlogCategoryHeader.waitForDisplayed()
    await super.doWait()
    await this.inputBlogCategoryName.clearValue()
    super.doSetValue(this.inputBlogCategoryName,title)
    await super.doWait()
    await super.doClick(this.BlogCategorySaveBtn)
    await this.BlogCategoryAddedMsg.waitForDisplayed()
}
async doSearchBlogCategory(title){
    await super.doIsDisplayed(this.inputCategorySearch)
    await super.doWait()
    await this.inputCategorySearch.clearValue()
    await super.doSetValue(this.inputCategorySearch,title)
    await super.doWait()
    await super.doClick(this.BlogCategorySearchBtn)
    await super.doWait()

}
async doEditBlogCategory(title,editTitle){
    await super.doWait()
    await this.doCreateBlogCategory(title)
    await this.doSearchBlogCategory(title)
    await super.doWait()
    await super.doClick(this.selectAction)
    await super.doWait()
    await super.doClick(this.edit)
    await this.inputCategoryEditText.waitForClickable()
    await this.inputCategoryEditText.clearValue()
    await super.doSetValue(this.inputCategoryEditText,editTitle)
    await super.doWait()
    await super.doClick(this.BlogCategorySaveBtn)

}
async doDeleteBlogCategory(title){
    await super.doWait()
    await this.doCreateBlogCategory(title)
    await this.doSearchBlogCategory(title)
    await super.doWait()
    await super.doClick(this.selectAction)
    await super.doWait()
    await super.doClick(this.delete)
    await super.doWait()
    await super.doClick(this.deleteOK)
}
async doDeleteCreatedBlogCategory(title){
    await super.doWait()
    await this.refresh()
    await this.doSearchBlogCategory(title)
    await super.doWait()
    await super.doClick(this.selectAction)
    await super.doWait()
    await super.doClick(this.delete)
    await super.doWait()
    await super.doClick(this.deleteOK)
    await super.doWait()
    await super.doClick(this.selectAction)
    await super.doWait()
    await super.doClick(this.delete)
    await super.doWait()
    await super.doClick(this.deleteOK)
}
async refresh(){
    super.doRefresh()
}

}
export default new BlogCategoriesPage();