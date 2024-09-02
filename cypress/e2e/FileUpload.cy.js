import 'cypress-file-upload'
//whatever files we want to attach should be in fixture folder
describe("File Uploads",()=>{

    it("Single File Upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile("example.json")
        cy.get('#file-submit').click()
        cy.get('h3').should("have.text","File Uploaded!")
    })
    //Changing the name of file while uploading
    it("File Upload - rename",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath:"example.json",fileName:"new"})
        cy.get('#file-submit').click()
        cy.get('h3').should("have.text","File Uploaded!")
    })
    //Drag and drop
    it("Drag and Drop",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#drag-drop-upload').attachFile("example.json",{subjectType:'drag-n-drop'});
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should("have.text","example.json")
    })
    it("Multiple Files Upload",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(["example.json","k.json"]);

    })
    it.only("Shadow-Dom",()=>{
        //shadow-root wll be their
        //Get element inside shadow dom and attach file , not the 'choose' button
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('kr.pdf');
        cy.get(".smart-item-name",{includeShadowDom:true}).should("have.text",'kr.pdf');
        
    })
})