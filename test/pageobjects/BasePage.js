/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {

    open(page = '') {
        return browser.url(`https://test1234.planday.com/${page}`);
    };

    getPageTitle(name) {
        expect(browser).toHaveTitle(name);
    };

    async getPageLoaded() {
        await browser.setTimeout({ 'pageLoad': 10000 });
    };

    async clickElement(element) {
        await element.click();
    };

    async checkUrl(page) {
        await browser.url(page);
    };

    async checkPresence(elem) {
        let isDisplayed = await elem.isDisplayed();
        expect(isDisplayed);
    };
}
