import { data } from '../general/constants.js';
import Page from "../basepage/page"
import home from './home.js';

class BlogArticlePage extends Page {

    get addBlogArticle(){
        return $("//span[contains(text(),'Add Article')]")
    }
    get inputBlogArticleSearch(){
        return $("//input[contains(@class,'ant-input')]")
    }
    get BlogArticleSearchBtn(){
        return $("//span[contains(@aria-label,'search')]")
    }
    get BlogArticleAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get BlogArticleNoData(){
        return $("//div[contains(@class,'ant-empty-description')]")
    }
    get userProfile(){
        return $("//button[contains(@class,'ant-btn ant-btn-text ant-dropdown-trigger pp-username')]")
    }
    ////////adding details for blog article page getters///////////
    get addArticleHeader(){
        return $("//h1[contains(text(),'Add Article')]")
    }
    get inputArticleTitle(){
        return $("#title")
    }
    get articleSlug(){
        return $("(//input[contains(@class,'ant-input ant-input-lg formInputText')])[2]")
    }
    get thumbnailImage(){
        return $("(//input[contains(@type,'file')])[1]")
    }
    get titleCoverImage(){
        return $("(//input[contains(@type,'file')])[2]")
    }
    get inputArticleDescription(){
        return $("#description")
    }
    get inputArticleContent(){
        return $("//div[contains(@class,'ql-editor ql-blank')]")
    }
    get editInputArticleContent(){
        return $("//div[contains(@class,'ql-editor')]")
    }
    get PublishWithYes(){
        return $("//span[contains(text(),'Yes')]")
    }
    get PublishWithNo(){
        return $("//span[contains(text(),'No')]")
    }
    get saveArticleBtn(){
        return $("//span[contains(text(),'Save')]")
    }
    get cancelArticleBtn(){
        return $("//span[contains(text(),'Cancel')]")
    }
    get blogArticleAddedMsg(){
        return $("//*[contains(text(),'Record added successfully!')]")
    }
    get blogArticleUpdatedMsg(){
        return $("//*[contains(text(),'Record updated successfully!')]")
    }
    get articleAuthorSelector(){
        return $("(//span[contains(@class,'ant-select-selection-item')])[2]")
    }
    get articleAuthorScrollingObject(){
        return $("(//*[contains(text(),'IslamicFinder')])[1]")
    }
    get articleCategoryScrollingObject(){
        return $("(//*[contains(text(),'Blog category-10988')])[1]")
    }
    get articleCategoryScrollingObject2(){
        return $("(//*[contains(text(),'Blog category-63154')])[1]")
    }
    get articleAuthorOption(){
        return $("(//*[contains(text(),'IslamicFinder')])[4]")
    }
    get articleCategorySelector(){
        return $("(//span[contains(@class,'ant-select-selection-item')])[1]")
    }
    get articleCategoryOption(){
        return $("(//*[contains(text(),'Spirituality')])[1]")
    }
    get articlePublishCategoryOption(){
        return $("(//*[contains(text(),'Knowledge')])[1]")
    }
    get articleTags(){
        return $("(//input[contains(@class,'ant-input ant-input-lg ant-input-status-success formInputText')])[2]")
    }
    get articleTagsOption(){
        return $("(//*[contains(text(),'Calendar')])[1]")
    }
    get selectActionArticle(){
        return $("(//div[contains(@class,'ant-select-selector')])[1]")
    }
    get editArticle(){
        return $("(//div[contains(text(),'Edit')])[2]")
    }
    get previewArticle(){
        return $("(//div[contains(text(),'Preview')])[2]")
    }
    get deleteArticle(){
        return $("//div[contains(text(),'Delete')]")
    }
    get deleteCancelArticle(){
        return $("//span[contains(text(),'Cancel')]")
    }
    get deleteYesArticle(){
        return $("//span[contains(text(),'Yes')]")
    }
    get titleOnPreviewPage(){
        return $("//*[contains(text(),'Testing12')]")
    }
    get articlePublishTitleOnBetaPage(){
        return $("//*[contains(text(),'WebdriverIO Testing')]")
    }
    get spinLoader(){
        return $("//div[contains(@class,'ant-spin ant-spin-spinning')]")
    }


/////////// Page Action ///////
async navigateToBlogArticle(){
    await this.userProfile.waitForDisplayed()
    await this.refresh()
    await home.Click_IF()
    await home.Click_Blog()
    await home.Click_BlogArticle()
}

async getBlogArticlePageTitle(){
    return await super.doGetPageTitle(data.BlogArticlePageTitle)}

async doAddArticle(){
    return await super.doClick(this.addBlogArticle)
}
async getHeader_AddArticlePage(){
    return await super.doGetText(this.addArticleHeader)
}
async TapsViewAll(){
    return await super.doClick(this.BlogArticleAllBtn)
}
async doSetArticleTitle(title){
    await super.doSetValue(this.inputArticleTitle,title)

}
async doClickCancelAddArticlePage(){
    await super.doClick(this.cancelArticleBtn)

}
async doCreateBlogArticleWithoutPublish(title,thumbnailPath,coverImagePath,description,content){
    await super.doClick(this.addBlogArticle)
    await this.selectCategory()
    await super.doClick(this.articleCategoryOption)
    await super.doClick(this.articleAuthorSelector)
    await super.doClick(this.articleAuthorOption)
    await super.doSetValue(this.inputArticleTitle,title)
    await super.addImageToInputField(thumbnailPath,this.thumbnailImage)
    await super.addImageToInputField(coverImagePath,this.titleCoverImage)
    await super.doSetValue(this.inputArticleDescription,description)
    await super.doSetValue(this.inputArticleContent,content)
    await this.publishNonSave()
    await this.spinLoader.waitForDisplayed({reverse:true})
}
async publishNonSave(){
    await super.doClick(this.PublishWithYes)
    await super.doClick(this.PublishWithNo)
    await super.doClick(this.saveArticleBtn)
}
async publishYesnSave(){
    await super.doClick(this.PublishWithYes)
    await super.doClick(this.PublishWithNo)
    await super.doClick(this.PublishWithYes)
    await super.doClick(this.saveArticleBtn)
    await this.blogArticleAddedMsg.waitForDisplayed()
}
async selectCategory(){
    await super.doClick(this.articleCategorySelector)
    await super.doScrollToObject(this.articleCategoryScrollingObject)
    await super.doScrollToObject(this.articleCategoryScrollingObject2)
}
async doSearchBlogArticle(title){
    await this.spinLoader.waitForDisplayed({reverse:true})
    await this.addBlogArticle.waitForDisplayed()
    await super.scrollUp()
    await super.doSetValue(this.inputBlogArticleSearch,title)
    await this.selectActionArticle.waitForDisplayed()
    await super.doClick(this.BlogArticleSearchBtn)
}
async doVerifyPreviewOnNewTab(){
    await super.doClick(this.selectActionArticle)
    await this.previewArticle.waitForDisplayed()
    await super.switchToNewTab(this.previewArticle)
}
async doDeleteBlogArticle(title,thumbnailPath,coverImagePath,description,content){
    await this.doCreateBlogArticleWithoutPublish(title,thumbnailPath,coverImagePath,description,content)
    //await expect(this.addBlogArticle).toBeDisplayed()
    await this.spinLoader.waitForDisplayed({reverse:true})
    await this.addBlogArticle.waitForDisplayed()
    await this.inputBlogArticleSearch.waitForEnabled()
    await this.doSearchBlogArticle(title)
    await this.selectActionArticle.waitForDisplayed()
    await super.doClick(this.selectActionArticle)
    await super.doClick(this.deleteArticle)
    await super.doClick(this.deleteYesArticle)
}
async doEditBlogArticle(title,thumbnailPath,coverImagePath,description,content,editTitle,editThumbnailPath,editCoverImagePath,editDescription,editContent){
    await this.doCreateBlogArticleWithoutPublish(title,thumbnailPath,coverImagePath,description,content)
    //await expect(this.addBlogArticle).toBeDisplayed()
    await this.spinLoader.waitForDisplayed({reverse:true})
    await this.addBlogArticle.waitForDisplayed()
    await this.inputBlogArticleSearch.waitForEnabled()
    await this.doSearchBlogArticle(title)
    await super.doClick(this.selectActionArticle)
    await super.doClick(this.editArticle)
    await super.doClick(this.articleTags)
    await super.doClick(this.articleTagsOption)
    await super.scrollUp()
    await super.addImageToInputField(editThumbnailPath,this.thumbnailImage)
    await super.doSetValue(this.inputArticleTitle,editTitle)
    await super.addImageToInputField(editCoverImagePath,this.titleCoverImage)
    await super.doSetValue(this.inputArticleDescription,editDescription)
    await super.doSetValue(this.editInputArticleContent,editContent)
    await this.publishNonSave()
    await this.addBlogArticle.waitForDisplayed()
    //await expect(this.addBlogArticle).toBeDisplayed()
}
async doDeleteCreatedBlogArticle(title){
    await this.refresh()
    await this.addBlogArticle.waitForDisplayed()
    await this.doSearchBlogArticle(title)
    await this.spinLoader.waitForDisplayed({reverse:true})
    await this.selectActionArticle.waitForDisplayed()
    await super.doClick(this.selectActionArticle)
    await super.doClick(this.deleteArticle)
    await super.doClick(this.deleteYesArticle)
    await super.doClick(this.selectActionArticle)
    await super.doClick(this.deleteArticle)
    await super.doClick(this.deleteYesArticle)
}
async selectPublishCategory(){
    await super.doClick(this.articleCategorySelector)
    await super.doScrollToObject(this.articleCategoryScrollingObject)
    await super.doScrollToObject(this.articleCategoryScrollingObject2)
    await super.doScrollToObject(this.articlePublishCategoryOption)
    await super.doClick(this.articlePublishCategoryOption)
}
async selectPublishAuthor(){
    await super.doClick(this.articleAuthorSelector)
    await super.doClick(this.articleAuthorOption)
}
async deletePublishArticle(){
    await super.doClick(this.selectActionArticle)
    await super.doClick(this.deleteArticle)
    await super.doClick(this.deleteYesArticle)
}
async doCreateBlogArticleWithPublish(title,thumbnailPath,coverImagePath,description,content){
    await super.doClick(this.addBlogArticle)
    await this.selectPublishCategory()
    await super.doSetValue(this.inputArticleTitle,title)
    await this.selectPublishAuthor()
    await super.addImageToInputField(thumbnailPath,this.thumbnailImage)
    await super.addImageToInputField(coverImagePath,this.titleCoverImage)
    await super.doSetValue(this.inputArticleDescription,description)
    await super.doSetValue(this.inputArticleContent,content)
    await this.publishYesnSave()
    await this.addBlogArticle.waitForDisplayed()
    await super.scrollUp()
    await this.doSearchBlogArticle(title)
    await super.openLinkInNewTab(data.IF_Beta_URL,this.articlePublishTitleOnBetaPage)
    await this.deletePublishArticle()
}
async refresh(){
    super.doRefresh()
}

}

export default new BlogArticlePage();