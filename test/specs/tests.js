import LoginPage from '../pageobjects/LoginPage.js'
import HomePage from '../pageobjects/HomePage.js'
import SchedulePage from '../pageobjects/SchedulePage.js'
import randomInput from '../support/randomPasswordData.js'
import credentials from '../support/credentials.js'

describe('Planday tests', () => {
    it('should open the Planday portal and verify basic elements', async () => {
        await LoginPage.open();
        LoginPage.getPageTitle('Login | Planday');
        await LoginPage.checkPresence(LoginPage.enterUsernameField);
        await LoginPage.checkPresence(LoginPage.enterPasswordField);
        await LoginPage.checkPresence(LoginPage.logInButton);
        await LoginPage.checkPresence(LoginPage.showPasswordButton);
        await LoginPage.checkPresence(LoginPage.forgotPasswordButton);
    });

    it('should enter invalid data to the "Username" and "Password" fields and check error messages', async () => {
        await LoginPage.closeCookiesPopup();
        await LoginPage.login(randomInput.name, randomInput.password);
        await LoginPage.checkText(LoginPage.usernameFieldError, 'The username or password is incorrect.');
        await LoginPage.checkText(LoginPage.passwordFieldError, 'The username or password is incorrect.');
    });

    it('should log into the portal using specified credentials', async () => {
        await LoginPage.login(credentials.name, credentials.password);
        await HomePage.checkUrl('/home');
    });

    it('should go to the "Schedule" page via the top navigation bar and verify the URL', async () => {
        await HomePage.clickElement(HomePage.scheduleTab);
        await SchedulePage.checkUrl('/schedule');
    });
})


