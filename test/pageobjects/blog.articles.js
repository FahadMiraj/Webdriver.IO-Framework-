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
        return $("(//*[contains(text(),'Amna Anwaar')])[1]")
    }
    get articleCategoryScrollingObject(){
        return $("(//*[contains(text(),'Blog category-10988')])[1]")
    }
    get articleAuthorOption(){
        return $("(//*[contains(text(),'Amna Anwaar')])[1]")
    }
    get articleCategorySelector(){
        return $("(//span[contains(@class,'ant-select-selection-item')])[1]")
    }
    get articleCategoryOption(){
        return $("(//*[contains(text(),'Blog category-58751')])[1]")
    }
    get articlePublishCategoryOption(){
        return $("(//*[contains(text(),'Knowledge')])[1]")
    }
    get articleTags(){
        return $("(//input[contains(@class,'ant-input ant-input-lg formInputText')])[3]")
    }
    get articleTagsOption(){
        return $("(//*[contains(text(),'Ramadan 2017')])[1]")
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


/////////// Page Action ///////
async navigateToBlogArticle(){
    await this.refresh()
    await home.Click_IF()
    await home.Click_Blog()
    await home.Click_BlogArticle()
}

async getBlogArticlePageTitle(){
    return await super.doGetPageTitle(data.BlogArticlePageTitle)}

async doAddArticle(){
    await super.doWait()
    return await super.doClick(this.addBlogArticle)
}
async getHeader_AddArticlePage(){
    return await super.doGetText(this.addArticleHeader)
}
async TapsViewAll(){
    return await super.doClick(this.BlogArticleAllBtn)
}
async doSetArticleTitle(title){
    await super.doWait()
    super.doSetValue(this.inputArticleTitle,title)

}
async doClickCancelAddArticlePage(){
    await super.doScrollToObject(this.cancelArticleBtn)
    await super.doClick(this.cancelArticleBtn)
    await super.scrollUp()

}
async doCreateBlogArticleWithoutPublish(title,thumbnailPath,coverImagePath,description,content){
    await super.doClick(this.addBlogArticle)
    await super.doWait()
    await super.doSetValue(this.inputArticleTitle,title)
    await super.doWait()
    await super.doClick(this.articleCategorySelector)
    await super.doWait()
    await super.doScrollToObject(this.articleCategoryScrollingObject)
    await super.doWait()
    await super.doClick(this.articleCategoryOption)
    await super.doWait()
    await super.doClick(this.articleAuthorSelector)
    //await super.doWait()
    //await super.doScrollToObject(this.articleAuthorScrollingObject)
    await super.doWait()
    await super.doClick(this.articleAuthorOption)
    await super.doWait()
    await super.addImageToInputField(thumbnailPath,this.thumbnailImage)
    await super.addImageToInputField(coverImagePath,this.titleCoverImage)
    await super.doWait()
    await super.doSetValue(this.inputArticleDescription,description)
    await super.doSetValue(this.inputArticleContent,content)
    await super.doScroll()
    await super.doClick(this.PublishWithYes)
    await super.doClick(this.PublishWithNo)
    await super.doClick(this.saveArticleBtn)
    await super.doWait()
}
async doSearchBlogArticle(title){
    await super.doWait()
    await super.scrollUp()
    await super.doSetValue(this.inputBlogArticleSearch,title)
    await super.doWait()
    await super.doClick(this.BlogArticleSearchBtn)
    await super.doWait()
}
async doVerifyPreviewOnNewTab(){
    await super.doClick(this.selectActionArticle)
    await super.doWait()
    await super.switchToNewTab(this.previewArticle)
}
async doDeleteBlogArticle(title,thumbnailPath,coverImagePath,description,content){
    await super.doWait()
    await this.doCreateBlogArticleWithoutPublish(title,thumbnailPath,coverImagePath,description,content)
    await super.doWait()
    await expect(this.addBlogArticle).toBeDisplayed()
    await super.scrollUp()
    await this.doSearchBlogArticle(title)
    await super.doWait()
    await super.doClick(this.selectActionArticle)
    await super.doWait()
    await super.doClick(this.deleteArticle)
    await super.doWait()
    await super.doClick(this.deleteYesArticle)
}
async doEditBlogArticle(title,thumbnailPath,coverImagePath,description,content,editTitle,editThumbnailPath,editCoverImagePath,editDescription,editContent){
    await super.doWait()
    await this.doCreateBlogArticleWithoutPublish(title,thumbnailPath,coverImagePath,description,content)
    await expect(this.addBlogArticle).toBeDisplayed()
    await super.scrollUp()
    await this.doSearchBlogArticle(title)
    await super.doWait()
    await super.doClick(this.selectActionArticle)
    await super.doWait()
    await super.doClick(this.editArticle)
    await super.doWait()
    await super.scrollDown()
    await super.doClick(this.PublishWithYes)
    await super.doClick(this.PublishWithNo)
    await super.doWait()
    await super.doClick(this.articleTags)
    await super.doWait()
    await super.doClick(this.articleTagsOption)
    await super.doWait()
    await super.scrollUp()
    await super.doSetValue(this.inputArticleTitle,editTitle)
    await super.doWait()
    await super.addImageToInputField(editThumbnailPath,this.thumbnailImage)
    await super.addImageToInputField(editCoverImagePath,this.titleCoverImage)
    await super.doWait()
    await super.doSetValue(this.inputArticleDescription,editDescription)
    await super.doWait()
    await super.scrollDown()
    await super.doSetValue(this.editInputArticleContent,editContent)
    await super.doWait()
    await super.doClick(this.saveArticleBtn)
    await expect(this.addBlogArticle).toBeDisplayed()
    await super.scrollUp()
}
async doDeleteCreatedBlogArticle(title){
    await super.doWait()
    await this.refresh()
    await this.doSearchBlogArticle(title)
    await super.doWait()
    await super.doClick(this.selectActionArticle)
    await super.doWait()
    await super.doClick(this.deleteArticle)
    await super.doWait()
    await super.doClick(this.deleteYesArticle)
    await super.doWait()
    await super.doClick(this.selectActionArticle)
    await super.doWait()
    await super.doClick(this.deleteArticle)
    await super.doWait()
    await super.doClick(this.deleteYesArticle)
}

async refresh(){
    super.doRefresh()
}
async doCreateBlogArticleWithPublish(title,thumbnailPath,coverImagePath,description,content){
    await super.doClick(this.addBlogArticle)
    await super.doWait()
    await super.doSetValue(this.inputArticleTitle,title)
    await super.doWait()
    await super.doClick(this.articleCategorySelector)
    await super.doWait()
    await super.doScrollToObject(this.articleCategoryScrollingObject)
    await super.doScrollToObject(this.articleCategoryOption)
    await super.doScrollToObject(this.articlePublishCategoryOption)
    await super.doWait()
    await super.doClick(this.articlePublishCategoryOption)
    await super.doWait()
    await super.doClick(this.articleAuthorSelector)
    //await super.doWait()
    //await super.doScrollToObject(this.articleAuthorScrollingObject)
    await super.doWait()
    await super.doClick(this.articleAuthorOption)
    await super.doWait()
    await super.addImageToInputField(thumbnailPath,this.thumbnailImage)
    await super.addImageToInputField(coverImagePath,this.titleCoverImage)
    await super.doWait()
    await super.doSetValue(this.inputArticleDescription,description)
    await super.doSetValue(this.inputArticleContent,content)
    await super.doScroll()
    await super.doClick(this.PublishWithYes)
    await super.doClick(this.PublishWithNo)
    await super.doWait()
    await super.doClick(this.PublishWithYes)
    await super.doWait()
    await super.doClick(this.saveArticleBtn)
    await super.doWait()
    await super.doWait()
    await super.scrollUp()
    await this.doSearchBlogArticle(title)
    await super.doWait()
    await super.openLinkInNewTab(data.IF_Beta_URL,this.articlePublishTitleOnBetaPage)
    await super.doWait()
    await super.doClick(this.selectActionArticle)
    await super.doWait()
    await super.doClick(this.deleteArticle)
    await super.doWait()
    await super.doClick(this.deleteYesArticle)
}

}

export default new BlogArticlePage();