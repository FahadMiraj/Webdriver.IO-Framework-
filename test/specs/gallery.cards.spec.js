import { assert } from "chai";
import Page from "../basepage/page";
import { data } from "../general/constants";
import blogArticles from "../pageobjects/blog.articles";
import blogCategories from "../pageobjects/blog.categories";
import blogTags from "../pageobjects/blog.tags";
import galleryCards from "../pageobjects/gallery.cards";
import galleryCategories from "../pageobjects/gallery.categories";
import home from "../pageobjects/home";
import login from "../pageobjects/login";
const path = require('path')

describe('IF Web_Admin_Panel- GalleryCards_Page : ', () => {
    it('verify GalleryCards_Page Title', async() => {
        await browser.pause(1000)
        await home.Click_IF()
        await browser.pause(1000)
        await home.Click_Gallery()
        await browser.pause(1000)
        await home.Click_GalleryCards()
        await browser.pause(1000)
        const title = await galleryCards.getGalleryCardsPageTitle()
        console.log('Gallery Cards Page Title is :', title)
        assert.equal(data.GalleryCardsPageTitle, title, data.ErrorMsg )
    });
    it('verify that there should not be NO_Data Table if there will be tags available', async() => {
        await expect(galleryCards.GalleryCardsNoData).not.toBeDisplayed()
        await expect(galleryCards.GalleryCardsNoData).not.toBeExisting()
    });

    it('verify that ViewAll button should be clickable', async() => {
        await galleryCards.TapsViewAll()
        await expect(galleryCards.GalleryCardsAllBtn).toBeClickable()
    });

    it('verify Upload Gallery Cards Page', async() => {
        await galleryCards.doClickUploadGalleryCards()
        const title = await galleryCards.getHeader_GalleryCardsPage()
        console.log('Gallery Categories Page Header is :', title)
        assert.equal(data.GalleryCardsHeader, title, data.ErrorMsg)
        //await expect(blogArticles.addArticleHeader).toBeDisplayed()
        //await expect(blogArticles.addArticleHeader).not.toBeClickable()
    });

    it('verify that on clicking cancel button, it should close the Gallery Cards Page ', async () => {
        await galleryCards.doClickCancelUploadGalleryCardsPage()
        await expect(galleryCards.uploadGalleryCards).toBeDisplayed()
        
    });
    ////////
    it('verify the Gallery Cards deleting functionality ', async () => {
        await galleryCards.doDeleteGalleryCard(data.GalleryCardsTitle,data.GalleryCardsDescription,data.CardThumbnail,data.CardImage)
        await expect(galleryCards.GalleryCardsNoData).toBeEnabled()
        await expect(galleryCards.GalleryCardsNoData).toBeDisplayed()
    });
    
    it('verify the Gallery Cards editing functionality ', async () => {
        //await galleryCards.refresh()
        await galleryCards.doEditGalleryCards(data.GalleryCardsTitle,data.GalleryCardsDescription,data.CardThumbnail,data.CardImage,data.EditGalleryCardsTitle,data.EditGalleryCardsDescription,data.EditCardThumbnail,data.EditCardImage)
        await expect(galleryCards.GalleryCardUpdatedMsg).toBeEnabled()
        
    });

    it('verify the Gallery Cards should be created after providing all the inputs and clicking save button ', async () => {
        //await galleryCards.refresh()
        await galleryCards.doUploadGalleryCard(data.GalleryCardsTitle,data.GalleryCardsDescription,data.CardThumbnail,data.CardImage)
        await expect(galleryCards.GalleryCardAddedMsg).toBeEnabled()
        
    });
    it('verify that all created Gallery Cards should be visible ', async () => {
        await galleryCards.doCheckCreatedGalleryCards()
        await expect(galleryCards.GalleryCardsNoData).not.toBeExisting()
        await expect(galleryCards.GalleryCardsNoData).not.toBeDisplayed()
        
    });
    it('verify that all created Gallery Cards should be deleted successfully ', async () => {
        await galleryCards.doDeleteCreatedGalleryCards()
        await expect(galleryCards.GalleryCardsNoData).toBeEnabled()
        await expect(galleryCards.GalleryCardsNoData).toBeDisplayed()
    });

});    