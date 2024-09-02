describe("MyTestSuites",()=>{

    it("Fixture Demo - Direct access",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture("orangehrm1").then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",data.expected)
        })
        
    })

    let testData;
    //This data can be used in all it blocks and we dont need to get get data again n again from fixture
    before(()=>{
        cy.fixture("orangehrm1").then((data)=>{
            testData = data;
        })
    })

    it("Fixture Demo - Acess through Hook",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type(testData.username);
        cy.get("input[placeholder='Password']").type(testData.password);
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",testData.expected)
    })
    
    let dataArray;
    before(()=>{
        cy.fixture("orangehrm2").then((data)=>{
            dataArray = data;
        })
    })

    //Multiple Test Data
    it.only("Fixture Demo - Multiple data",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        for(let i=0;i<dataArray.length;i++){
            cy.get("input[placeholder='Username']").type(dataArray[i].username);
            cy.get("input[placeholder='Password']").type(dataArray[i].password);
            cy.get("button[type='submit']").click();
           if(dataArray[i].username=="Admin" && dataArray[i].password=="admin123"){
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",dataArray[i].expected);
            //Logout if match
            cy.get('.oxd-userdropdown-tab').click();
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
           }
           else{
            cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').contains(dataArray[i].expected);
           }
        }
        
    })
})