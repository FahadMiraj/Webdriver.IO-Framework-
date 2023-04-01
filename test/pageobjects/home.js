import { data } from '../general/constants.js';
import Page from "../basepage/page"

class HomePage extends Page{
    /**
     * define selectors using getter methods
     * PAGE LOCATORS AND THEIR GETTERS
     */
    get homeIF_header(){
        return $("(//span[contains(text(),'IslamicFinder')])[1]")
    }
    get userProfile(){
        return $("//button[contains(@class,'ant-btn ant-btn-text ant-dropdown-trigger pp-username')]")
    }
    get logoutBtn(){
        return $("//a[contains(text(),'Logout')]")
    }
    ///////
    get Blog(){
        return $("//span[contains(text(),'Blog')]")
    }
    ////
    get Blog_Articles(){
        return $("//*[contains(@href,'/articles')]")
    }
    get Blog_Tags(){
        return $("//a[contains(@href,'/tags')]")
    }
    get Blog_Categories(){
        return $("//a[contains(@href,'/categories')]")
    }
    
    ////
    get Gallery(){
        return $("//span[contains(text(),'Gallery')]")
    }
    ////
    get Gallery_Categories(){
        return $("//a[contains(@href,'/gallery/categories')]")
    }
    get Gallery_Cards(){
        return $("//a[contains(@href,'/gallery/cards')]")
    }
    get addGalleryCards(){
        return $("//span[contains(text(),'Upload Card')]")
    }
    get addGalleryCategory(){
        return $("//span[contains(text(),'Add Category')]")
    }
    get addBlogArticle(){
        return $("//span[contains(text(),'Add Article')]")
    }
    get addBlogCategory(){
        return $("//span[contains(text(),'Add Category')]")
    }
    get addBlogTags(){
        return $("//span[contains(text(),'Add Tag')]")
    }

    ////
    get SEO_Editor(){
        return $("//a[contains(@href,'/seoeditor')]")
    }

    get SEO_PageHeaderText(){
        return $("//h1[contains(text(),'SEO Editor')]")
    }

    ////
    get File_upload(){
        return $("//a[contains(@href,'/file-upload')]")
    }
    get Fileupload_pageHeader(){
        return $("//h1[contains(text(),'FILE UPLOAD')]")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     * PAGE ACTIONS/METHODS
     */

    async getHomePageTitle(){
        return await super.doGetPageTitle(data.HomePageTitle)
    }
    async getUserProfile_Displayed(){
        return await super.doIsDisplayed(this.userProfile)
    }
    async getHeader_Name(){
        return await super.doGetText(this.homeIF_header)
    }
    async Click_IF(){
        await super.doWait()
        return await super.doClick(this.homeIF_header)
    }
    async Click_Blog(){
        await super.doWait()
        return await super.doClick(this.Blog)
    }
    async Click_BlogArticle(){
        await super.doWait()
        return await super.doClick(this.Blog_Articles)
    }
    async Click_BlogTags(){
        await super.doWait()
        return await super.doClick(this.Blog_Tags)
    }
    async Click_BlogCategories(){
        await super.doWait()
        return await super.doClick(this.Blog_Categories)
    }
    async Click_Gallery(){
        await super.doWait()
        return await super.doClick(this.Gallery)
    }
    async Click_GalleryCards(){
        await super.doWait()
        return super.doClick(this.Gallery_Cards)
    }
    async Click_GalleryCategories(){
        await super.doWait()
        return await super.doClick(this.Gallery_Categories)
    }
    async Click_SEO(){
        await super.doWait()
        return await super.doClick(this.SEO_Editor)
    }
    
    async refresh(){
         super.doRefresh()
    }

}
export default new HomePage();