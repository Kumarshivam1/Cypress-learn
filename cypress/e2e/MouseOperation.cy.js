import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe("Mouse Operations",()=>{
    it.skip("MouseHover",()=>{
        cy.visit("https://www.browserstack.com/guide/cypress-touch-and-mouse-events");
        cy.get('#developers-dd-toggle').trigger('mouseover')
        cy.wait(2000)
        cy.get(".bstack-mm-sub-li").each(($el,index,$els)=>{
            let k = cy.wrap($el)
            cy.log(k)
        })
        cy.wait(3000)
    })

    it.skip("Right click",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        //Approach 1
        // cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        //Approach 2
        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
        cy.wait(3000)
        cy.get('.context-menu-icon-cut').should('be.visible').click()
    })

    it.skip("Double Click",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        //Loading of iFrame
        cy.frameLoaded("#iframeResult")

        //Approach 1
        //Getting button element from iFrame
        // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick");

        //Approach 2
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
        
    })

    it.skip("Drag and Drop using plugin",()=>{
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette");
        cy.get("#box6").drag('#box106')
    })

    it("Scrolling",()=>{
        cy.visit('https://www.worldometers.info/geography/flags-of-the-world/');
        //Scrolling till we get India element
        cy.get(':nth-child(79) > [align="center"] > a > img').scrollIntoView()
        
    })

})