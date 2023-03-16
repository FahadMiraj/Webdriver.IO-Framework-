import { data } from '../general/constants.js';
import Page from "../basepage/page"

class GalleryCardsPage extends Page {
    get uploadGalleryCards(){
        return $("//span[contains(text(),'Upload Card')]")
    }
    get inputGalleryCardsSearch(){
        return $("//span[contains(@class,'ant-input-affix-wrapper')]")
    }
    get GalleryCardsSearchBtn(){
        return $("//span[contains(@aria-label,'search')]")
    }
    get GalleryCardsAllBtn(){
        return $("//span[contains(text(),'View All')]")
    }
    get GalleryCardsNoData(){
        return $("//div[contains(text(),'No Data')]")
    }
    ////////adding details for Gallery Cards page getters///////////

}
export default new GalleryCardsPage();