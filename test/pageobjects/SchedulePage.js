

import BasePage from './BasePage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SchedulePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    
    get scheduleGridCell () {
        return $$('.board-header__cell');
    };
    /**
     * a method to encapsule automation code to interact with the page
     */

     /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('/schedule');
    }
}

export default new SchedulePage();
