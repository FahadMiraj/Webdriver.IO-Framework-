import { assert } from "chai";
import Page from "../basepage/page";
import { data } from "../general/constants";
import blogArticles from "../pageobjects/blog.articles";
import blogCategories from "../pageobjects/blog.categories";
import blogTags from "../pageobjects/blog.tags";
import galleryCategories from "../pageobjects/gallery.categories";
import home from "../pageobjects/home";
import login from "../pageobjects/login";
import { keys } from 'wd/lib/commands';
import seoEditor from "../pageobjects/seo.editor";
const path = require('path')

describe('IF Web_Admin_Panel- SEO-Editor_Page : ', () => {
    it('verify SEO-Editor_Page Title', async() => {
        await seoEditor.navigateToSeoPage()
        const title = await seoEditor.getSeoPageTitle()
        console.log('SEO-Editor Page Title is :', title)
        assert.equal(data.SEOPageTitle, title, data.ErrorMsg )
    });
    it('verify SEO-Editor_Page Header Title', async() => {
        const title = await seoEditor.getHeader_SeoPage()
        console.log('SEO-Editor Page Title Header is :', title)
        assert.equal(data.SeoPageHeader, title, data.ErrorMsg )
    });
    it('verify SEO-Editor_Page should have Save button that should be clickable as well ', async() => {
        await expect(seoEditor.seoEditorSaveBtn).toBeDisplayed()
        await expect(seoEditor.seoEditorSaveBtn).toBeClickable()
    });
    it('verify SEO-Editor_Page should not be created when there is no Page selected ', async() => {
        await seoEditor.doCreateSeoPageWithoutPage(data.MetaTitle,data.MetaDesc,data.TextBox)
        await expect(seoEditor.seoPageSelectMsg).toBeDisplayed()
        await expect(seoEditor.seoPageSelectMsg).toBeEnabled()
    });
    it('verify SEO-Editor_Page should not be created when there is no Language selected ', async() => {
        await seoEditor.doCreateSeoPageWithoutLanguage(data.MetaTitle,data.MetaDesc,data.TextBox)
        await expect(seoEditor.seoLanguageSelectMsg).toBeDisplayed()
        await expect(seoEditor.seoLanguageSelectMsg).toBeEnabled()
    });
    it('verify SEO-Editor_Page should not be created when there is no Title entered ', async() => {
        await seoEditor.doCreateSeoPageWithoutTitle(data.MetaDesc,data.TextBox)
        await expect(seoEditor.seoEnterTitleMsg).toBeDisplayed()
        await expect(seoEditor.seoEnterTitleMsg).toBeEnabled()
    });
    it('verify SEO-Editor_Page should not be created when there is no Description entered ', async() => {
        await seoEditor.doCreateSeoPageWithoutDesc(data.MetaTitle,data.TextBox)
        await expect(seoEditor.seoEnterDescriptionMsg).toBeDisplayed()
        await expect(seoEditor.seoEnterDescriptionMsg).toBeEnabled()
    });
    it('verify SEO-Editor_Page should be created when there is no Text Box filled ', async() => {
        await seoEditor.doCreateSeoPageWithoutBoxText(data.MetaTitle,data.MetaDesc)
        await expect(seoEditor.seoCreatedMsg).toBeDisplayed()
        await expect(seoEditor.seoCreatedMsg).toBeEnabled()
    });
    it('verify SEO-Editor_Page should be created when user filled all the mandatory fields ', async() => {
        await seoEditor.doCreateSeoPage(data.MetaTitle,data.MetaDesc,data.TextBox)
        await expect(seoEditor.seoCreatedMsg).toBeDisplayed()
        await expect(seoEditor.seoCreatedMsg).toBeEnabled()
    });


});