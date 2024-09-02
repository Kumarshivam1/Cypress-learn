describe("Assertion demo",()=>{
    it("Implicit assertion",()=>{
        cy.visit("https://www.simplilearn.com/?utm_source=google&utm_medium=cpc&utm_term=simplilearn&utm_content=802977548-41114892706-467574577811&utm_device=c&utm_campaign=Search-Brand-Exact-IN-AllDevice-adgroup-Brand-simplilearn&gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGP5tVBt69lAe9Rh29RIDoBbp2nJWpaKPZjCcviQx46wE0g8159En6xoCDkIQAvD_BwE");
        // cy.url().should('include','com');
        // cy.url().should('contain','c');
        // cy.url().should('eq',"https://www.simplilearn.com/?utm_source=google&utm_medium=cpc&utm_term=simplilearn&utm_content=802977548-41114892706-467574577811&utm_device=c&utm_campaign=Search-Brand-Exact-IN-AllDevice-adgroup-Brand-simplilearn&gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGP5tVBt69lAe9Rh29RIDoBbp2nJWpaKPZjCcviQx46wE0g8159En6xoCDkIQAvD_BwE");

        cy.url().should('include','com')
        .and('not.contain','11111')
        .and('eq',"https://www.simplilearn.com/?utm_source=google&utm_medium=cpc&utm_term=simplilearn&utm_content=802977548-41114892706-467574577811&utm_device=c&utm_campaign=Search-Brand-Exact-IN-AllDevice-adgroup-Brand-simplilearn&gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGP5tVBt69lAe9Rh29RIDoBbp2nJWpaKPZjCcviQx46wE0g8159En6xoCDkIQAvD_BwE");

        cy.title().should("include","Simpli")
        .and("contain","s")

        cy.get('.logo > .gm-lazy').should('be.visible') // visible
        .and('exist') //logo exists

        // cy.xpath("//a").should('have.length','24') // no of links

        cy.get('#header_srch').type("jav");
        cy.get('#header_srch').should("have.value","java")
    })

    it("Explicit assertion",()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click();
        cy.get('.oxd-userdropdown-name').then((x)=>{
            //BDD style
            let actName = x.text();
            expect(actName).to.not.equal("Kumar")
            //TDD style
            assert.notEqual(actName,"kumar")
            assert.equal(actName,"kumar")

        })
    })
})

