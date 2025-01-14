import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';

import LoginPage from '../login.page.js';
import SecurePage from '../secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).to.exist;
    await expect(await (await SecurePage.flashAlert).getText()).to.contain('message');
});

