import { assert } from "chai";
import { data } from "../general/constants";
import blogTags from "../pageobjects/blog.tags";

describe('IF Web_Admin_Panel- BlogTags_Page : ', () => {
    it('verify BlogTags_Page Title', async() => {
        await blogTags.navigateToBlogTags()
        const title = await blogTags.getBlogTagsPageTitle()
        console.log('Blog Tags Page Title is :', title)
        assert.equal(data.BlogTagsPageTitle, title, data.ErrorMsg)
    });

    it('verify that there should not be NO_Data Table if there will be tags available', async() => {
        await expect(blogTags.BlogTagsNoData).not.toBeDisplayed()
        await expect(blogTags.BlogTagsNoData).not.toBeExisting()
    });

    it('verify that ViewAll button should be clickable', async() => {
        await blogTags.TapsViewAll()
        await expect(blogTags.BlogTagsAllBtn).toBeClickable()
    });

    it('verify Add Blog Tags Pop_up', async() => {
        await blogTags.doAddBlogTags()
        const title = await blogTags.getHeader_TagsPopup()
        console.log('Blog Tags Page Header is :', title)
        assert.equal(data.TagsHeader, title, data.ErrorMsg)
        //await expect(blogArticles.addArticleHeader).toBeDisplayed()
        //await expect(blogArticles.addArticleHeader).not.toBeClickable()
    });
    it('verify that on clicking cancel button, it should close the tag popup ', async () => {
        await blogTags.doClickCancelAddTagsPopup()
        await expect(blogTags.addBlogTags).toBeDisplayed()
        
    });
    it('verify that on clicking close button, it should also close the tag popup ', async () => {
        await blogTags.doClickCloseAddTagsPopup()
        await expect(blogTags.addBlogTags).toBeDisplayed()
        
    });
    ////////
    it('verify the Blog Tags deleting functionality ', async () => {
        await blogTags.doDeleteBlogTags(data.TagsTitle)
        await expect(blogTags.BlogTagsNoData).toBeEnabled()
        await expect(blogTags.BlogTagsNoData).toBeDisplayed()
    });
    
    it('verify the Blog Tags editing functionality ', async () => {
        await blogTags.refresh()
        await blogTags.doEditBlogTags(data.TagsTitle, data.EditTagsTitle)
        await expect(blogTags.BlogTagsAddedMsg).toBeEnabled()
        
    });

    it('verify the Blog Tags should be created after providing name and clicking save button ', async () => {
        await blogTags.refresh()
        await blogTags.doCreateBlogTags(data.TagsTitle)
        await expect(blogTags.BlogTagsAddedMsg).toBeEnabled()
        
    });
    it('verify the Blog Tags searching functionality ', async () => {
        await blogTags.doSearchBlogTags(data.TagsSearchingText)
        await expect(blogTags.BlogTagsNoData).not.toBeExisting()
        await expect(blogTags.BlogTagsNoData).not.toBeDisplayed()
        
    });
    it('verify that all created Tags should be deleted successfully ', async () => {
        await blogTags.doDeleteCreatedBlogTags(data.TagsSearchingText)
        await expect(blogTags.BlogTagsNoData).toBeEnabled()
        await expect(blogTags.BlogTagsNoData).toBeDisplayed()
    });

});