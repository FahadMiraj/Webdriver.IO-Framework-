import { data } from '../general/constants.js';
import Page from "../basepage/page"

class BlogTagsPage extends Page {
    get addBlogTags(){
        return $("//span[contains(text(),'Add Tag')]")
    }
    get inputBlogTagsSearch(){
        return $("//input[contains(@class,'ant-input')]")
    }
    get BlogTagsSearchBtn(){
        return $("//span[contains(@aria-label,'search')]")
    }
    get BlogTagsAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get BlogTagsNoData(){
        return $("//div[contains(@class,'ant-empty-description')]")
    }
        ////////adding details for blog Category page getters///////////

        get BlogTagsHeader(){
            return $("#rcDialogTitle0")
        }
        get inputBlogTagsName(){
            return $("#name")
        }
        get tagsSlug(){
            return $("#slug")
        }
        get BlogTagsCrossBtn(){
            return $("//span[contains(@class,'ant-modal-close-x')]")
        }
        get BlogTagsCancelBtn(){
            return $("//span[contains(text(),'Cancel')]")
        }
        get BlogTagsSaveBtn(){
            return $("//span[contains(text(),'Save')]")
        }
        get BlogTagsAddedMsg(){
            return $("//*[contains(text(),'Record added successfully!')]")
        }
        get selectActionTags(){
            return $("//div[contains(@class,'ant-select formSelect ant-select-single ant-select-show-arrow')]")
    
        }
        get editTags(){
            return $("(//div[contains(@class,'ant-select-item-option-content')])[1]")
        }
        get editTagsPopupHeader(){
            return $("#rcDialogTitle2")
        }
        get inputTagsEditText(){
            return $("#name")
        }
        get deleteTags(){
            return $("(//div[contains(@class,'ant-select-item-option-content')])[2]")
        }
        get deleteCancelTags(){
            return $("//span[contains(text(),'Cancel')]")
    
        }
        get deleteOkTags(){
            return $("//span[contains(text(),'OK')]")
            
        }
    
    /////////// Page Action ///////
async navigateToBlogTags(){
    await home.refresh()
    await home.Click_IF()
    await home.Click_Blog()
    await home.Click_BlogTags()
}    

async getBlogTagsPageTitle(){
    return await super.doGetPageTitle(data.BlogTagsPageTitle)
}
async doAddBlogTags(){
    return await super.doClick(this.addBlogTags)
}
async getHeader_TagsPopup(){
    return await super.doGetText(this.BlogTagsHeader)
}
async TapsViewAll(){
    return await super.doClick(this.BlogTagsAllBtn)
}    
async doClickCancelAddTagsPopup(){
    await super.doClick(this.BlogTagsCancelBtn)
}
async doClickCloseAddTagsPopup(){
    await this.doAddBlogTags()
    await super.doWait()
    await super.doClick(this.BlogTagsCrossBtn)

}
async doCreateBlogTags(title){
    await super.doClick(this.addBlogTags)
    await this.BlogTagsHeader.waitForDisplayed()
    await super.doWait()
    await this.inputBlogTagsName.clearValue()
    super.doSetValue(this.inputBlogTagsName,title)
    await super.doWait()
    await super.doClick(this.BlogTagsSaveBtn)
    await this.BlogTagsAddedMsg.waitForDisplayed()
}
async doSearchBlogTags(title){
    await super.doIsDisplayed(this.inputBlogTagsSearch)
    await super.doWait()
    //await this.inputBlogTagsSearch.clearValue()
    await super.doSetValue(this.inputBlogTagsSearch,title)
    await super.doWait()
    await super.doClick(this.BlogTagsSearchBtn)
    await super.doWait()

}
async doEditBlogTags(title,editTitle){
    await super.doWait()
    await this.doCreateBlogTags(title)
    await this.doSearchBlogTags(title)
    await super.doWait()
    await super.doClick(this.selectActionTags)
    await super.doWait()
    await super.doClick(this.editTags)
    await this.inputTagsEditText.waitForClickable()
    await this.inputTagsEditText.clearValue()
    await super.doSetValue(this.inputTagsEditText,editTitle)
    await super.doWait()
    await super.doClick(this.BlogTagsSaveBtn)
}
async doDeleteBlogTags(title){
    await super.doWait()
    await this.doCreateBlogTags(title)
    await super.doWait()
    await this.doSearchBlogTags(title)
    await super.doWait()
    await super.doClick(this.selectActionTags)
    await super.doWait()
    await super.doClick(this.deleteTags)
    await super.doWait()
    await super.doClick(this.deleteOkTags)
}
async doDeleteCreatedBlogTags(title){
    await super.doWait()
    await this.refresh()
    await this.doSearchBlogTags(title)
    await super.doWait()
    await super.doClick(this.selectActionTags)
    await super.doWait()
    await super.doClick(this.deleteTags)
    await super.doWait()
    await super.doClick(this.deleteOkTags)
    await super.doWait()
    await super.doClick(this.selectActionTags)
    await super.doWait()
    await super.doClick(this.deleteTags)
    await super.doWait()
    await super.doClick(this.deleteOkTags)
}
async refresh(){
     super.doRefresh()
}

}
export default new BlogTagsPage();