import { data } from '../general/constants.js';
import Page from "../basepage/page"

class BlogArticlePage extends Page {

    get addBlogArticle(){
        return $("//span[contains(text(),'Add Article')]")
    }
    get addBlogTags(){
        return $("//span[contains(text(),'Add Tag')]")
    }
    get addBlogCategory(){
        return $("//span[contains(text(),'Add Category')]")
    }
    get inputBlogArticleSearch(){
        return $("//span[contains(@class,'ant-input-affix-wrapper')]")
    }
    get BlogArticleSearchBtn(){
        return $("//span[contains(@aria-label,'search')]")
    }
    get BlogArticleAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get BlogArticleNoData(){
        return $("//div[contains(text(),'No Data')]")
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
    get selectCategory(){
        return $("//span[contains(@title,'Select Blog Category')]")
    }
    get selectAuthor(){
        return $("//span[contains(@title,'Select Blog Author')]")
    }
    get thumbnailimage(){
        return $("(//input[contains(@type,'file')])[1]")
    }
    get titleCoverimage(){
        return $("(//input[contains(@type,'file')])[2]")
    }
    get inputArticleDescription(){
        return $("#description")
    }
    get inputArticleContent(){
        return $("//div[contains(@class,'ql-editor ql-blank')]")
    }
    get PublishwithYes(){
        return $("//span[contains(text(),'Yes')]")
    }
    get PublishwithNo(){
        return $("//span[contains(text(),'No')]")
    }
    get saveArticleBtn(){
        return $("//span[contains(text(),'Save')]")
    }
    get cancleArticleBtn(){
        return $("//span[contains(text(),'Cancel')]")
    }
/////////// Page Action ///////
async getBlogArticlePageTitle(){
    return await super.doGetPageTitle(data.BlogArticlePageTitle)}

async doAddArticle(){
    return await super.doClick(this.addBlogArticle)
}
async ViewAll_BlogArticles(){
    return await super.doClick(this.BlogArticleAllBtn)
}
async searchBlogArticle(text){
    await super.doSetValue(this.inputBlogArticleSearch,text)
    await super.doClick(this.BlogArticleSearchBtn)
}
async getHeader_AddArticlePage(){
    return await super.doGetText(this.addArticleHeader)
}
async TapsViewAll(){
    await super.doClick(this.BlogArticleAllBtn)
}
async doSetArticleTitle(title){
    await browser.pause(5000)
    super.doSetValue(this.inputArticleTitle,title)

}
async doClickCancleAddArticlePage(){
    await super.doClick(this.cancleArticleBtn)

}
async createBlogArticleWithoutPublish(title,thumbnailpath,coverimagepath,desciption,content){
    await browser.pause(1000)
    await super.doSetValue(this.inputArticleTitle,title)
    await super.addImageToInputField(thumbnailpath,this.thumbnailimage)
    await super.addImageToInputField(coverimagepath,this.titleCoverimage)
    await super.doSetValue(this.inputArticleDescription,desciption)
    await super.doSetValue(this.inputArticleContent,content)
    await super.doScroll()
    await super.doClick(this.PublishwithYes)
    await super.doClick(this.PublishwithNo)
    //super.doClick(this.saveArticleBtn)
}
async createBlogArticleWithPublish(title,thumbnailpath,coverimagepath,desciption,content){
    await browser.pause(1000)
    await super.doSetValue(this.inputArticleTitle,title)
    await super.addImageToInputField(thumbnailpath,this.thumbnailimage)
    await super.addImageToInputField(coverimagepath,this.titleCoverimage)
    await super.doSetValue(this.inputArticleDescription,desciption)
    await super.doSetValue(this.inputArticleContent,content)
    await super.doScroll()
    await super.doClick(this.PublishwithYes)
    await super.doClick(this.PublishwithNo)
    await super.doClick(this.PublishwithYes)
    //super.doClick(this.saveArticleBtn)
}


}

export default new BlogArticlePage();