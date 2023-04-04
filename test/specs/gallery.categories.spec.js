import { assert } from "chai";
import Page from "../basepage/page";
import { data } from "../general/constants";
import blogArticles from "../pageobjects/blog.articles";
import blogCategories from "../pageobjects/blog.categories";
import blogTags from "../pageobjects/blog.tags";
import galleryCategories from "../pageobjects/gallery.categories";
import home from "../pageobjects/home";
import login from "../pageobjects/login";
const path = require('path')

describe('IF Web_Admin_Panel- GalleryCategories_Page : ', () => {
    it('verify GalleryCategories_Page Title', async() => {
        galleryCategories.navigateToGalleryCategories()
        const title = await galleryCategories.getGalleryCategoriesPageTitle()
        console.log('Gallery Categories Page Title is :', title)
        assert.equal(data.GalleryCategoriesPageTitle, title, data.ErrorMsg)
    });

    it('verify that there should not be NO_Data Table if there will be tags available', async() => {
        await expect(galleryCategories.GalleryCategoryNoData).not.toBeDisplayed()
        await expect(galleryCategories.GalleryCategoryNoData).not.toBeExisting()
    });

    it('verify that ViewAll button should be clickable', async() => {
        await galleryCategories.TapsViewAll()
        await expect(galleryCategories.GalleryCategoryAllBtn).toBeClickable()
    });

    it('verify Add Gallery Categories Pop_up', async() => {
        await galleryCategories.doAddGalleryCategories()
        const title = await galleryCategories.getHeader_GalleryCategoriesPopup()
        console.log('Gallery Categories Page Header is :', title)
        assert.equal(data.GalleryCategoriesHeader, title, data.ErrorMsg)
        //await expect(blogArticles.addArticleHeader).toBeDisplayed()
        //await expect(blogArticles.addArticleHeader).not.toBeClickable()
    });
    ////////////////
    it('verify that on clicking cancel button, it should close the Gallery Category popup ', async () => {
        await galleryCategories.doClickCancelGalleryCategoriesPopup()
        await expect(galleryCategories.addGalleryCategory).toBeDisplayed()
        
    });
    it('verify that on clicking close button, it should also close the Gallery Category popup ', async () => {
        await galleryCategories.doClickCloseAddGalleryCategoriesPopup()
        await expect(galleryCategories.addGalleryCategory).toBeDisplayed()
        
    });
    it('verify the Gallery Categories deleting functionality ', async () => {
        await galleryCategories.doDeleteGalleryCategories(data.GalleryCategoriesTitle,data.GalleryCategoriesDescription)
        await expect(galleryCategories.GalleryCategoryNoData).toBeEnabled()
        await expect(galleryCategories.GalleryCategoryNoData).toBeDisplayed()
    });
    
    it('verify the Gallery Categories editing functionality ', async () => {
        await galleryCategories.refresh()
        await galleryCategories.doEditGalleryCategories(data.GalleryCategoriesTitle,data.GalleryCategoriesDescription,data.EditGalleryCategoriesTitle,data.EditGalleryCategoriesDescription)
        await expect(galleryCategories.GalleryCategoriesAddedMsg).toBeEnabled()
        
    });

    it('verify the Gallery Categories should be created after providing title & description and clicking save button ', async () => {
        await galleryCategories.refresh()
        await galleryCategories.doCreateGalleryCategories(data.GalleryCategoriesTitle,data.GalleryCategoriesDescription)
        await expect(galleryCategories.GalleryCategoriesAddedMsg).toBeEnabled()
        
    });
    it('verify the Gallery Categories searching functionality ', async () => {
        await galleryCategories.doSearchGalleryCategories(data.GalleryCategoriesTitle)
        await expect(galleryCategories.GalleryCategoryNoData).not.toBeExisting()
        await expect(galleryCategories.GalleryCategoryNoData).not.toBeDisplayed()
        
    });
    it('verify that all Gallery Categories should be deleted successfully ', async () => {
        await galleryCategories.doDeleteCreatedGalleryCategories(data.GalleryCategoriesTitle)
        await expect(galleryCategories.GalleryCategoryNoData).toBeEnabled()
        await expect(galleryCategories.GalleryCategoryNoData).toBeDisplayed()
    });
   
});   