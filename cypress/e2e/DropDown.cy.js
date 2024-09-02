describe("Handle Dropdowns",()=>{

    it.skip("DropDown with Select(Tag)",()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("#zcf_address_country")
        .select("India")
        .should("have.value","India")
    })

    //it.skip("Skip This Block",()=>{})
    it.skip("DropDown without Select",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        //On clicking we get input box and we type value and enter 
        //,after do this the input box will be gone
        cy.get("input[role='combobox']").type("Iceland").type('{enter}')
        //The val will be stored here, we can't use have.value(used when we have select tag)
        cy.get("#select2-billing_country-container").should("have.text","Iceland")
    })

    //Static auto suggestion dropdown, suggestions comes from pre-defined list
    it.skip("Auto suggest DropDown",()=>{
       //whever we give string input , auto-suggestion are given acc to string entered which are fixed 
       //And on selecting the suggestion we get respective page

       //Enter string and click and check in other page
       cy.visit("https://www.wikipedia.org/")
       cy.get("#searchInput").type("delhi")
       cy.get("button[type='submit']").click()
       cy.get(".mw-page-title-main").should("have.text","Delhi")

        //Enter input, select one of the opt and click
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("delhi")
        cy.get(".suggestion-title").contains("Delhi University").click()
        cy.get(".mw-page-title-main").contains("Delhi University")

    })
    
    //The suggestions are dynamic can come from api call, db, etc
    it("Dynamic DropDown",()=>{
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("csk")
        //To get Length
        cy.get(".wM6W7d").should("have.length",13)

        //in suggestion the class are common so we can get all suggested items and we can check whether it contains "x or not"
        //.contains used to match text content
        // cy.get(".wM6W7d").contains("csk vs kkr").click()
        
        //To read each and every option
        //$el - refers to element
        //index is used to traverse through set of elements
        //$list - the whole array of elements

        cy.get(".wM6W7d").each(($el,index,$list)=>{
           
            if($el.text()=='csk vs rcb'){
                cy.wrap($el).click()
             }
        })
        cy.get("#APjFqb").contains("csk vs rcb")
           
        
    })
})