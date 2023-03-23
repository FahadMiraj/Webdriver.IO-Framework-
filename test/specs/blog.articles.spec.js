import { assert } from "chai";
import { data } from "../general/constants";
import blogArticles from "../pageobjects/blog.articles";
import home from "../pageobjects/home";
import login from "../pageobjects/login";
const path = require('path')

describe('IF Web_Admin_Panel- BlogArticle_Page : ', () => {
    
    it('verify BlogArticle_Page Title', async() => {
        await home.Click_IF()
        await home.Click_Blog()
        await home.Click_BlogArticle()
        const title = await blogArticles.getBlogArticlePageTitle()
        console.log('Blog Article Page Title is :', title)
        assert.equal(data.BlogArticlePageTitle, title, data.ErrorMsg)
    });
    
    it('verify that there should be NO_Data Table if there is no Article created or added', async() => {
        await expect(blogArticles.BlogArticleNoData).toBeDisplayed()
        await expect(blogArticles.BlogArticleNoData).toBeExisting()
    });

    it('verify that view all button should be clickable', async() => {
        await blogArticles.TapsViewAll()
        await expect(blogArticles.BlogArticleAllBtn).toBeClickable()
    });

    it('verify Add Article Page', async() => {
        await blogArticles.doAddArticle()
        await expect(blogArticles.addArticleHeader).toBeDisplayed()
        await expect(blogArticles.addArticleHeader).not.toBeClickable()
    });
    it('verify that when a user added the article title then slug shoud be generated  ', async () => {
        //await blogArticles.doAddArticle()
        await blogArticles.doSetArticleTitle(data.ArticleTitle)
        await expect(blogArticles.articleSlug).not.toHaveTextContaining(data.ArticleTitle)
        
    });
    it('verify that on clicking cancle button, it should close the page ', async () => {
        await blogArticles.doClickCancleAddArticlePage()
        await expect(blogArticles.addBlogArticle).toBeDisplayed()
        
    });
    it('Verify that when a user fills all the field and click save button with selecting No publish option then Blog Article should be created', async () => {
        await home.Click_IF()
        await home.Click_Blog()
        await home.Click_BlogArticle()
        await blogArticles.doAddArticle()
        
        await blogArticles.createBlogArticleWithoutPublish(data.ArticleTitle,data.ArticleThumbnail,data.ArticleCover,data.ArticleDescription,data.ArticleContent)
        await browser.pause(5000)
    });
    it.only('Verify that when a user fills all the field and click save button with selecting Yes publish option then Blog Article should be created', async () => {
        await home.Click_IF()
        await home.Click_Blog()
        await home.Click_BlogArticle()
        await blogArticles.doAddArticle()
        
        await blogArticles.createBlogArticleWithPublish(data.ArticleTitle,data.ArticleThumbnail,data.ArticleCover,data.ArticleDescription,data.ArticleContent)
        await browser.pause(5000)
    });
    /*{
   
    
    }*/
    
});