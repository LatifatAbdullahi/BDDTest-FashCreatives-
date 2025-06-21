
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



Then(/^I fill in full name$/, () => {
	cy.get('#fullname').type('My Test Name')
});


Then(/^I fill "([^"]*)" into  "([^"]*)" field$/, (text, field) => {
	cy.typeInAnyValue(field, text)
});



Then(/^I fill business email field$/, () => {
	cy.fillInBusinessEmail1()
});


Then(/^I fill phone number field$/, () => {
   cy.fillInPhoneNumber()
});


Then(/^I select how I heard about Fash creatvives  through "([^"]*)"$/, (text) => {
	cy.clickHowYouHeardAboutUsDropdown(text);
	
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



