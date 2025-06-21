let homePage
let signupPage

let emailAddress
let email
let serverID = '0s1ijrzq'
let emailDomain = '@0s1ijrzq.mailosaur.net'
import {fakerEN_NG as faker } from "@faker-js/faker"



beforeEach(()=>{
    const checker = new Date().getTime()
    const emailSuffix = checker.toString().substring(6,13)
    const emailPrefix = `test${emailSuffix}`
    emailAddress = `${emailPrefix}${emailDomain}`
    const userDetails = {
    emailAddress: emailAddress
   }
   cy.writeFile('cypress/fixtures/creds.json', JSON.stringify(userDetails, null, 2))

   cy.fixture('elements').then(sel=>{
        homePage = sel.elements.homePage
         signupPage = sel.elements.signupPage


    })
   
    cy.fixture('creds').then((cred)=>{
        email = cred
    })

})

Cypress.Commands.add('clickAnyButtonwithText',(text) =>{
    cy.get('button').contains(text).click()
   })
Cypress.Commands.add('typeInAnyValue', (field, text) =>{
    cy.get(field).type(text)
   })

Cypress.Commands.add('clickHowYouHeardAboutUsDropdown',  (text) => {
     cy.get(signupPage.howdidYouHearAoutUs).click()
    cy.get('#scrollableDiv').contains(text).click()
        
     })
Cypress.Commands.add('readEmailFromFile',()=>{
   return cy.readFile('cypress/fixtures/creds.json')
})


Cypress.Commands.add('typeInUserDetails&RegNum', ()=>{
        const inputs =  [
            faker.person.fullName(),
            faker.company.buzzNoun(),
            email.emailAddress,
            faker.phone.number({style: 'international'}) ,
           // faker.string.numeric({length: {min:5, max:7}})
        ]
        cy.get('input').each(($el, index)=>{
            cy.wrap($el).fill(inputs[index])
        })
        cy.clickAnyButtonwithText('Continue')
    })

Cypress.Commands.add('typeInUserDetails', ()=>{
    cy.typeInAnyValue( signupPage.fullnameField, faker.person.fullName()) 
    cy.typeInAnyValue( signupPage.businessNameField, faker.company.buzzNoun())
    cy.fillInBusinessEmail()
    cy.typeInAnyValue( signupPage.phonenumberField, faker.phone.number({style: 'international'}))
   
    })

   Cypress.Commands.add('typeInPassword',  ()=>{
        cy.get(signupPage.passwordField).type('Quiinnxee40&')
    })

    Cypress.Commands.add('submitSignUp',  ()=>{
        cy.clickAnyButtonwithText('Continue')
    })
 Cypress.Commands.add('retrieveAndInsertOTP', ()=>{
    cy.mailosaurGetMessage(serverID, {sentTo: emailAddress})
    .then((email)=>{
      const firstCode = email.html.codes[0]
      const otp = firstCode.value
      cy.log(firstCode)
      cy.log(otp)
      cy.get('input').each(($el, index)=>{
        cy.wrap($el).type(otp[index])
      })
    })
})
Cypress.Commands.add('fillInBusinessEmail', ()=>{
   cy.typeInAnyValue(signupPage.businessemailField, email.emailAddress)
    })


Cypress.Commands.add('InsertEmail', (email)=>{
    cy.fillInBusinessEmail('cypress\fixtures\creds.json', signupPage.businessemailField)
    
})


Cypress.Commands.add('fillInBusinessName',()=>{
    cy.get(signupPage.businessnameField).fill(faker.company.buzzNoun)
})

Cypress.Commands.add('fillInPhoneNumber',()=>{
    cy.get(signupPage.phonenumberField).fill(faker.phone.number({style: 'international'}))
})



Cypress.Commands.add('fillInName',()=>{
    cy.get('My Test Name').type('#fullname')
})

Cypress.Commands.add('fillInBusinessEmail1', ()=>{
   cy.readEmailFromFile().then((email)=>{
    cy.get(signupPage.businessemailField).fill(email.emailAddress)
   })
    })