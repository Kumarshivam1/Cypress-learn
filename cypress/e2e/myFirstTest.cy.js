describe ('My First Test',()=>{
    it('test1 - Verify Title - +ve Test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM')
    })
    it('test1 - Verify Title - -ve Test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM123')
    })
})