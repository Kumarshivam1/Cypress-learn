

describe("XPathLocators",()=>{
    
    it('find no of products', ()=>{
        cy.visit("https://www.simplilearn.com/?utm_source=google&utm_medium=cpc&utm_term=simplilearn&utm_content=802977548-41114892706-467574577811&utm_device=c&utm_campaign=Search-Brand-Exact-IN-AllDevice-adgroup-Brand-simplilearn&gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGP5tVBt69lAe9Rh29RIDoBbp2nJWpaKPZjCcviQx46wE0g8159En6xoCDkIQAvD_BwE");
        cy.xpath("//div[@class='show-list']/div").should('have.length',14);
    })
})