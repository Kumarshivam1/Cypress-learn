describe("testSuite",()=>{
    it("SSAndVid",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.wait(3000)
        //we have to use cy.screenshot() - if running via gui we have to manully capture SS
        cy.screenshot("loginPage1");
        //Automatic capture of ss and vid when we test fails - on running from cli
        cy.get('.oxd-text--h5').should("have.text","k");
    })
})