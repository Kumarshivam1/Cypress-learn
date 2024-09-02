//iframe - to show other website in ur website in a smaller window 
import 'cypress-iframe'
describe("Handling Frames",()=>{
    it("Approach 1",()=>{
         cy.visit("https://www.tiny.cloud/tinymce/features/page-embed/");

         let iframe = cy.get(".tox-edit-area__iframe")
                              .its('0.contentDocument.body')//getting 1st part which is doc's body
                              .should('be.visible')//checking visibility
                              .then(cy.wrap);

                              iframe.clear().type("Hello bro {cmd+a}")
    })
    
    //Custom Command
    it.skip("Approac 2",()=>{
        cy.visit("https://www.tiny.cloud/tinymce/features/page-embed/");
        cy.getIframe('#tiny-react_22246336721721198815666_ifr').clear().type("kumar")
    })

    it.skip("Approach 3 - using cypress iframe plugin", () => {
        cy.visit("https://www.tiny.cloud/tinymce/features/page-embed/");

        // Wait for the iframe to be loaded
        cy.frameLoaded(".tox-edit-area__iframe");

        // Switch to the iframe and interact with it
        cy.iframe(".tox-edit-area__iframe")
          .clear()
          .type("kkkk")
          
    });
})