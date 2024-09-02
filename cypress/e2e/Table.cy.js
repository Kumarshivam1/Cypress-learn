describe("Handle Tables",()=>{
    
    //Its a cypress hook which will be executed before each it block
    //when we have common code to write in all block we can use this
    //Cypress handles alert windows automatically but not prompt windows due to their requirement for user input.
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get('.pow-button').click()
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click(); 
        // Alert normal one can be handled by Cypress
        // But we have to handle this one - prompt requires input
        cy.get(".btn-close").click();
        cy.get(".parent.collapsed[href='#collapse-5']").click();//Click on Customer
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();//Click customer under customer
    });
    

    it("Check Number of Rows and Columns",()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length",'12')
        cy.get("table[class='table table-bordered table-hover']>thead>td").should("have.length","12")
    })

    it("Check cell data",()=>{
        //have.contains is not a valid assertion syntax
        cy.get("tbody tr:nth-child(4) td:nth-child(3)").contains("gorankrezicc");
    })

    it("Read all rows and columns in First page",()=>{
        //we have to go to each row and extract data for each column
        //to iterate the rows
        cy.get("table[class='table table-bordered table-hover]>tbody>tr").each(($row,index,$rows)=>{
            //we wrap the non cypress element so that we can chain it with cypress methods
            //non cypress element can be any dom element
            //to iterate through columns
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    //log the details
                    cy.log($col.text())
                })
            })
        })
    })

    it("Pagination Table",()=>{
        //Get Total no of pages
        let totalPages;
        cy.get(".col-sm-6.text-end").then((e)=>{
            //In e we have our element
            //By using e.text we capture the text value
            let myText = e.text();
            totalPages = myText.substring(myText.indexOf('(')+1,myText.indexOf("")-1);
            //Loop to repeat each and every page number, depends on total number of pages
            let totalNopages = 5;
            for(let p=1;p<=totalNopages;p++){
                if(totalPages>1){
                    cy.log("Current Page"+p);
                    //click on each page
                    cy.get(`ul[class='pagination']>li:nth-child${p}`).click();
                    //To read data from each page
                    cy.get("table[class='table table-bordered table-hover]>tbody>tr").each(($row,index,$rows)=>{
                        //we wrap the non cypress element so that we can chain it with cypress methods
                        //non cypress element can be any dom element
                        //to iterate through columns
                        cy.wrap($row).within(()=>{
                            cy.get("td:nth-child(3)").then((e)=>{
                                cy.log(e.text())//Email address printed
                            })
                        })
                    })
                }
            }

        })
    })

})