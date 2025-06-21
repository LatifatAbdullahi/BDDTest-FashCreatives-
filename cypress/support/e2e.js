
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-mailosaur'
import 'cypress-fill-command'
import './custom-commands/common-actions'
import './custom-commands/homepage'

            
beforeEach(() =>{
    cy.on('uncaught:exception',()=>{
        return false
        
    })
    cy.visit('/');
})
