import { assert } from "chai";
import Page from "../basepage/page";
import { data } from "../general/constants";
import blogArticles from "../pageobjects/blog.articles";
import blogCategories from "../pageobjects/blog.categories";
import home from "../pageobjects/home";
import login from "../pageobjects/login";
const path = require('path')

describe('IF Web_Admin_Panel- BlogCategories_Page : ', () => {
    
    it('verify BlogCategories_Page Title', async() => {
        await home.Click_IF()
        await home.Click_Blog()
        await home.Click_BlogCategories()
        const title = await blogCategories.getBlogCategoryPageTitle()
        console.log('Blog Categories Page Title is :', title)
        assert.equal(data.BlogCategoryPageTitle, title, data.ErrorMsg)
    });
    it('verify that there should be NO_Data Table if there will be categories available', async() => {
        await expect(blogCategories.BlogCategoryNoData).not.toBeDisplayed()
        await expect(blogCategories.BlogCategoryNoData).not.toBeExisting()
    });

    it('verify that ViewAll button should be clickable', async() => {
        await blogCategories.TapsViewAll()
        await expect(blogCategories.BlogCategoryAllBtn).toBeClickable()
    });

    it('verify Add Blog Category Pop_up', async() => {
        await blogCategories.doAddBlogCategory()
        const title = await blogCategories.getHeader_CategoryPopup()
        console.log('Blog Categories Page Header is :', title)
        assert.equal(data.CategoryHeader, title, data.ErrorMsg)
        //await expect(blogArticles.addArticleHeader).toBeDisplayed()
        //await expect(blogArticles.addArticleHeader).not.toBeClickable()
    });
    it('verify that on clicking cancel button, it should close the category popup ', async () => {
        await blogCategories.doClickCancelAddCategoryPopup()
        await expect(blogCategories.addBlogCategory).toBeDisplayed()
        
    });
    it('verify that on clicking close button, it should also close the category popup ', async () => {
        await blogCategories.doClickCloseAddCategoryPopup()
        await expect(blogCategories.addBlogCategory).toBeDisplayed()
        
    });
    it('verify the Blog Category deleting functionality ', async () => {
        await blogCategories.doDeleteBlogCategory(data.CategoryTitle)
        await expect(blogCategories.BlogCategoryNoData).toBeEnabled()
        await expect(blogCategories.BlogCategoryNoData).toBeDisplayed()
        
    });
    
    it('verify the Blog Category editing functionality ', async () => {
        await blogCategories.refresh()
        await blogCategories.doEditBlogCategory(data.CategoryTitle,data.EditCategoryTitle)
        await expect(blogCategories.BlogCategoryAddedMsg).toBeEnabled()
        
    });

    it('verify the Blog Category should be created after providing name and clicking save button ', async () => {
        await blogCategories.refresh()
        await blogCategories.doCreateBlogCategory(data.CategoryTitle)
        await expect(blogCategories.BlogCategoryAddedMsg).toBeEnabled()
        
    });
    it('verify the Blog Category searching functionality ', async () => {
        await blogCategories.doSearchBlogCategory(data.CategorySearchingText)
        await expect(blogCategories.BlogCategoryNoData).not.toBeExisting()
        await expect(blogCategories.BlogCategoryNoData).not.toBeDisplayed()
        
    });
    it('verify that all created Categories should be deleted successfully ', async () => {
        await blogCategories.doDeleteCreatedBlogCategory(data.CategorySearchingText)
        await expect(blogCategories.BlogCategoryNoData).toBeEnabled()
        await expect(blogCategories.BlogCategoryNoData).toBeDisplayed()
    });

    

});