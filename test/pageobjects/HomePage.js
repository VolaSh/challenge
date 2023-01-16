

import BasePage from './BasePage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get scheduleTab () {
        return $('[href="/schedule"][aria-expanded]');
    }

     /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('/home');
    }
}

export default new HomePage();
