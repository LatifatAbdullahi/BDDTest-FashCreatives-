
Feature: Signup Flow
    Users should be able to signup

   Background: Intial signup steps
     Users are able to sign up successfully without referral code using otp
        Given I am on the home page
        When I click on the "Sign up" Button
        Then I should see the sign up form
        And I fill "Firstname Lastname " into  "#fullname" field
         And I fill "My Business name " into  "#tradingName" field
        And I fill business email field
        And I fill phone number field
        And I fill " RC-12345" into  "#businessRegNum" field
        And I click on the "Continue" Button
        And I fill " @instagram" into  "#instagramHandle" field
        And I fill "@twitter" into  "#twitterHandle" field

Scenario Outline: Users should be able to signup successfully without referral code
        And I select how I heard about Fash creatvives  through "<info-source>"
        And I fill "Quiinnxee40&" into  "[type='password']" field
        And I click on the "Sign Up" Button
        Then I should see the OTP page
        When I insert the OTP
        And I click on the "Continue" Button
        Then I should see the welcome page
    


    Examples:
        | info-source     |
        | Webinar/Seminar |
        | Instagram       |
        | Facebook        |
        | Twitter         |