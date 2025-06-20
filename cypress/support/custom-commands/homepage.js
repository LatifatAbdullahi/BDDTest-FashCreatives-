let homePage



before(()=>{
    cy.fixture('elements').then(sel=>{
        homePage = sel.elements.homePage
        
})
 
})
 
Cypress.Commands.add('clickSignUpButton', () => {
    cy.get(homePage.homepageSignupButton).click()
 })