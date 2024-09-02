
/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

describe('CSSLocators', ()=>{
    it('cssLocators', ()=>{
        //launch app
        cy.visit("https://www.simplilearn.com/?utm_source=google&utm_medium=cpc&utm_term=simplilearn&utm_content=802977548-41114892706-467574577811&utm_device=c&utm_campaign=Search-Brand-Exact-IN-AllDevice-adgroup-Brand-simplilearn&gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGP5tVBt69lAe9Rh29RIDoBbp2nJWpaKPZjCcviQx46wE0g8159En6xoCDkIQAvD_BwE")
        //get search input element and enter txt
        cy.get("#header_srch").type("java") //id
        //get button and click
        cy.get("button[title='search']").click() // tag + attribute
        //Search to verify
        //Assertion
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)").contains("java");
        
    })
})