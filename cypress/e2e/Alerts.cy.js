describe("Alerts",()=>{
    //1. Js Alert: It will have some text and an 'OK' button
    it.skip('Js alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        //For alert we have to trigger an event
        //t - event is stored
        //window:alert - its normal alert
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        //Alert automatically closed by cypress
        cy.get("#result").contains("You successfully clicked an alert")
        cy.get("#result").should("have.text","You successfully clicked an alert")
    })
    //2.JS Confirm Alert: will have 'ok' and 'cancel'
    //To close alert window via cancel we have to use event
    it.skip("Confirm Alert - OK",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        //Confirm Box
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
        })
        //Window is automatically closed by cypress
        cy.get('#result').should("have.text","You clicked: Ok")
    })
    it.skip("Confirm Alert - Cancel",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        //Confirm Box
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
        })
        //Using Cancel button to close window
        cy.on('window:confirm',()=>false)
        cy.get('#result').should("have.text","You clicked: Cancel")
    })
    //3. JS prompt alert - Takes i/p, use cancel or ok
    it.skip("JS Prompt Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //creating before opening alert window
        //to getv control over window and pass input
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click()
        //will automatically close prompted window by using 'ok'
        cy.get("#result").should("have.text",'You entered: welcome')
    })
    //4. Authenticated alert
    it("Authenticated Alert",()=>{
        //Approach 1
        // cy.visit("https://the-internet.herokuapp.com/basic_auth",
        //     {
        //         auth:{
        //             username:"admin",
        //             password:"admin"
        //         }
        //     }
        // )
        // cy.get("p").should('have.contain','Congratulations')
        //Approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("p").should('have.contain','Congratulations')
        
        
    })
})