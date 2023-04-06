import { assert } from "chai";
import { data } from "../general/constants";
import home from "../pageobjects/home";

describe(' IF Web_Admin_Panel: DashBoard/Home Module TestCases : ', () => {
  
    it('verify DashBoard Page Title',async () => {
      const title = await home.getHomePageTitle()
      console.log('DashBoard Page Title is :',title)
      assert.equal(data.HomePageTitle, title, data.ErrorMsg)
   });

    it('verify IslamicFinder header on DashBoard Page',async () => {
       assert.equal(data.IF_Header,await home.getHeader_Name(),data.ErrorMsg)
    
    });

    it('verify logged_In user Profile showing or not',async () => {
      await home.getUserProfile_Displayed()
      await expect(home.userProfile).toBeDisplayed()
    
    });
    
    it('verify IslamicFinder Modules',async () => {
      await home.Click_IF()
      await expect(home.Blog).toBeDisplayed()
      await expect(home.Gallery).toBeClickable()
      
    });
    it('verify Blog Page',async () => {
      await home.Click_Blog()
      await expect(home.Blog_Articles).toBeDisplayed()
      await expect(home.Blog_Tags).toBeExisting()
      await expect(home.Blog_Categories).toBeClickable()

    });
    it('verify Blog_Page Article',async () => {
      await home.Click_BlogArticle()
      await expect(home.addBlogArticle).toBeDisplayed()
      await expect(home.addBlogArticle).toBeExisting()

    });
    it('verify Blog_Page Tags',async () => {
      await home.Click_BlogTags()
      await expect(home.addBlogTags).toBeDisplayed()
      await expect(home.addBlogTags).toBeExisting()

    });
    it('verify Blog_Page Categories',async () => {
      await home.Click_BlogCategories()
      await expect(home.addBlogCategory).toBeDisplayed()
      await expect(home.addBlogCategory).toBeExisting()

    });
    it('verify Gallery Page',async () => {
      await home.Click_Gallery()
      await expect(home.Gallery_Cards).toBeDisplayed()
      await expect(home.Gallery_Categories).toBeClickable()

    });
    
    it('verify Gallery_Page Categories',async () => {
      await home.Click_GalleryCategories()
      await expect(home.addGalleryCategory).toBeDisplayed()

    });

    it('verify Gallery_Page Cards',async () => {
      await home.Click_GalleryCards()
      await expect(home.addGalleryCards).toBeDisplayed()

    });
    
    it('verify SEO_Editor Page',async () => {
      await home.Click_SEO()
      await expect(home.SEO_PageHeaderText).toBeDisplayed()

    });
     
  });
   
   