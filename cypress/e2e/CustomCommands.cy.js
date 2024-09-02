describe("Custom Commands",()=>{

    //we create custom command so that just by passing label and it can perform click on it
    it("Handling Links",()=>{
        cy.visit("https://demo.nopcommerce.com/");
        //using Custom Command
        cy.clickOnLinkByLabel("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should("have.text","Apple MacBook Pro 13-inch")
    })
    //OverWrite Command - see afterWards [IMP]

    it.only("login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.login("Admin","admin123");
    })

})