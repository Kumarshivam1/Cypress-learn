//HOOKS:-
//before - run once
//after - run once
//beforeEach - runs before every it block
//afterEach - run after every it block

describe("Hooks and Tags",()=>{
    beforeEach(()=>{
        cy.log("Login before Each block")
    })
    afterEach(()=>{
        cy.log("LogOUT after Each block")
    })
    it("search",()=>{

    })
})