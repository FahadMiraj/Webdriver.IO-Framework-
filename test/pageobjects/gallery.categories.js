import { data } from '../general/constants.js';
import Page from "../basepage/page"

class GalleryCategoriesPage extends Page {
    get addGalleryCategory(){
        return $("//span[contains(text(),'Add Category')]")
    }
    get inputGalleryCategorySearch(){
        return $("//span[contains(@class,'ant-input-affix-wrapper')]")
    }
    get GalleryCategorySearchBtn(){
        return $("//span[contains(@aria-label,'search')]")
    }
    get GalleryCategoryAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get GalleryCategoryNoData(){
        return $("//div[contains(text(),'No Data')]")
    }
    ////////adding details for Gallery Categories page getters///////////

}
export default new GalleryCategoriesPage();