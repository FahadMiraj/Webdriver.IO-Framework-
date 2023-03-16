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

}
export default new BlogTagsPage();