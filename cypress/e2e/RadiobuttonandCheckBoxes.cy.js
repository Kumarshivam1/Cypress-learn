describe("Check UI Elements",()=>{
    it("Checking Radio Btn",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        //Visibility of elements
        cy.get("#male").should("be.visible");
        cy.get("#female").should("be.visible");
        //Selected or not
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('be.not.checked')
        //We dont have option for Uncheck in radioBtn
    })
    it("Checking CheckBoxes",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        //Check Visibility
        cy.get("#sunday").should("be.visible");
        //Selected or not
        cy.get("#monday").should("be.not.checked");
        cy.get("#sunday").check().should("be.checked")
        //Selecting all checkBoxes
        cy.get("input.form-check-input[type='checkbox']").check();
        //Checking if all checkBoxes are checked or not
        cy.get("input.form-check-input[type='checkbox']").should("be.checked")
        //Uncheck all checkbox
        cy.get("input.form-check-input[type='checkbox']").uncheck();
        cy.get("input.form-check-input[type='checkbox']").should("be.not.checked")
        //Check First checkBox
        cy.get("input.form-check-input[type='checkbox']").first().check();
        cy.get("#sunday").should('be.checked')
        //Check last checkBox
        cy.get("input.form-check-input[type='checkbox']").last().check();
        cy.get("#saturday").should("be.checked")

    })
})