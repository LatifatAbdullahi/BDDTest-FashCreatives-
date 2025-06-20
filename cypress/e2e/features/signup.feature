
Feature: Signup Flow
    Users should be able to signup

    Background: Pre-requisite steps
     Users are able to sign up successfully without referral code using otp
        Given I am on the home page
        When I click on the "Sign up" Button
        Then I should see the sign up form
       // And I fill in "Test Name" into "#fullname" field
        And I insert fullname
        And I fill in "Business Name" into "#tradingName" field
        And I fill in "businesssemail" into "#email" field
        And I fill in "+2349022180183" into "#mobile" field
        And I fill in "RC-12345" into "#businessRegNum" field
        And I click on the "Continue" Button
        And I fill in "@instagram" into "#instagramHandle" field
        And I fill in "@twitter" into "#twitterHandle" field


    Scenario Outline: Users should be able to signup successfully without referral code
        And I select how I heard about Fash creatvives  through "<info-source>"
        And I fill in "Quiinnxee40&" into "[type='password']" field
        And I click on the "Sign Up" Button
        Then I should see the OTP page
        When I insert the OTP
        And I click on the "Sign Up" Button
        Then I should see the welcome page
    


        Examples:
        | info-source     |
        | Webinar/Seminar |
        | Instagram       |
        | Facebook        |
        | Twitter         |