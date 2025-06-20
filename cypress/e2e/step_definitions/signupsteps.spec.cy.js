
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the home page$/, () => {
    cy.visit('/');
});


When(/^I click on the "([^"]*)" Button$/, (buttonText) => {
	cy.clickAnyButtonwithText(buttonText)
});


Then(/^I should see the sign up form$/, () => {
	return true;
});


Then(/^I insert fullname$/, () => {
	cy.fillInFullname()
});



// Then(/^I fill in "([^"]*)" into "([^"]*)" field$/, (text, field) => {
// 	cy.typeInAnyValue(field, text)
// });


// Then(/^I fill in "([^"]*)"$/, (text) => {
// 	cy.InsertDetails(text)
// });


Then(/^I fill in "([^"]*)" into "([^"]*)" field$/, (field, text) => {
	cy.typeInPassword(field, text)
});



Then(/^I select how I heard about Fash creatvives  through "([^"]*)"$/, (text) => {
	cy.clickHowYouHeardAboutUsDropdown(text)
});


Then(/^I should see the OTP page$/, () => {
	return true;
});


When(/^I insert the OTP$/, () => {
	cy.retrieveAndInsertOTP()
});


Then(/^I should see the welcome page$/, () => {
	return true;
});

