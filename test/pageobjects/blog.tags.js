import { data } from '../general/constants.js';
import Page from "../basepage/page"

class BlogTagsPage extends Page {
    get addBlogTags(){
        return $("//span[contains(text(),'Add Tag')]")
    }
    get inputBlogTagsSearch(){
        return $("//span[contains(@class,'ant-input-affix-wrapper')]")
    }
    get BlogTagsSearchBtn(){
        return $("//span[contains(@aria-label,'search')]")
    }
    get BlogTagsAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get BlogTagsNoData(){
        return $("//div[contains(text(),'No Data')]")
    }
    ////////adding details for blog Tags page getters///////////

    get BlogTagsHeader(){
        return $("#rcDialogTitle5")
    }
    get inputBlogTagsName(){
        return $("#name")
    }
    get inputBlogTagsNameSlug(){
        return $("#slug")
    }
    get BlogCategoryCrossBtn(){
        return $("//span[contains(@class,'anticon anticon-close ant-modal-close-icon')]")
    }
    get BlogCategoryCancelBtn(){
        return $("//span[contains(text(),'Cancel')]")
    }
    get BlogCategorySaveBtn(){
        return $("//span[contains(text(),'Save')]")
    }
    get selectAction(){

    }
    get edit(){
        
    }
    get delete(){
        
    }
}
export default new BlogTagsPage();