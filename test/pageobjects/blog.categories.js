import { data } from '../general/constants.js';
import Page from "../basepage/page"

class BlogCategoriesPage extends Page {

    get addBlogCategory(){
        return $("//span[contains(text(),'Add Category')]")
    }
    get inputCategorySearch(){
        return $("//span[contains(@class,'ant-input-affix-wrapper')]")
    }
    get BlogCategorySearchBtn(){
        return $("//span[contains(@aria-label,'search')]")
    }
    get BlogCategoryAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get BlogCategoryNoData(){
        return $("//div[contains(text(),'No Data')]")
    }
    ////////adding details for blog Category page getters///////////

}
export default new BlogCategoriesPage();