describe("Handling tabs",()=>{
    //Approach 1 - limitation (domain should be same for parent and child URL)
    it("Limited Approach",()=>{
        //Method
        //1. cy.visit
        cy.visit("https://the-internet.herokuapp.com/windows");

        //2. Capture href reference(Target page Url)
        cy.get(".example>a").then((e)=>{
            //extracting href from element
            let url = e.prop("href")
            
        //3. again cy.visit with new url
            cy.visit(url);
        })
        cy.go("back");
        

    })
    //Approach 2 - removing target attribute
    it("Remove attribute - invoke",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        //Instead of clicking this element directly, we are removing target attribute with help of invoke and then performing click opr
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click();
        //.example>a can also be used for our selector
        //Get child window URL and do confirmation
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")
        //Navigate back to parent window
        cy.go("back");
    })
})