import Login from "../PageObjects/LoginPage2.js"
describe('Pom',()=>{

    //General Approach
    it.skip("LoginTest",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
    })

    //PageObjectModel Approach
    it("LoginUsingPOM",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        const ln = new Login();
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.verifyLogin();
    })

    //PageObjectModel With Fixture
    it("LoginUsingPOM",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        const ln = new Login();
        cy.fixture('orangehrm1').then((data)=>{
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
        })
        
    })
})