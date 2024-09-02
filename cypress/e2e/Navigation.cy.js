describe("TestSuite",()=>{
    it("Navigation",()=>{
        cy.visit("https://www.automationexercise.com/");
        cy.get("div[class='features_items'] h2[class='title text-center']").should("have.text","Features Items");
        //Going to gift page
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.wait(2000)
        //Comming back
        cy.go("back");
        cy.wait(2000)
        //Going to gift page
        cy.go("forward");
        cy.wait(2000)
        //Going back
        cy.go(-1);
        cy.wait(2000)
        //Going forward
        cy.go(1);
        cy.wait(2000)
        //Reload
        cy.reload();
    })
})