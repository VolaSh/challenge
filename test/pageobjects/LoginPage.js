

import BasePage from './BasePage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get enterUsernameField () {
        return $('input[name="Username"]');
    }

    get enterPasswordField () {
        return $('input[id="Password"]');
    }

    get logInButton () {
        return $('#MainLoginButton');
    }

    get showPasswordButton () {
        return $('[id="show-icon"] .login-form__input__toggle-icon-label');
    }

    get forgotPasswordButton () {
        return $('#login-form__password-forgotten-button');
    }

    get usernameFieldError () {
        return $('#Username-validation-error');
    }

    get passwordFieldError () {
        return $('#Password-validation-error');
    }

    /**
     * a method to encapsule automation code to interact with the page
     */

    async closeCookiesPopup() {
        const cookiesPopupOkButton = await $('.cookie-banner__button');
        await cookiesPopupOkButton.click();
    };

    async login(username, password) {
        await this.enterUsernameField.setValue(username);
        await this.enterPasswordField.setValue(password);
        await this.logInButton.click();
    };

    async checkText(elem, text) {
        await expect(elem).toHaveText(text);
    };
}

export default new LoginPage();
