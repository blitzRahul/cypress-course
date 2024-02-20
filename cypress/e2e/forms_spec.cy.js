//this spec file is used to test the form

describe('form tests',()=>{

beforeEach(()=>{

    cy.visit("/forms");
});

    it('Test Subscribe Form',()=>{
        //checking to see if we are indeed on the right page
        cy.contains(/testing forms/i).click();

        //defining alias for input and button
        cy.getDataTest("subscribe-form").find("input").as("sub-input");
        cy.getDataTest("subscribe-form").find("button").as("sub-btn");

        cy.get("@sub-input").type("rahul.cmaurya@gmail.com");
        cy.contains(/Successfully subbed/i).should("not.exist");
        cy.get("@sub-btn").click();
        cy.contains(/Successfully subbed/i).should("exist");

        cy.wait(3000);

        cy.get("@sub-input").type("rahul.cmairya");
        cy.get("@sub-btn").click();

        cy.contains(/invalid/i).should("exist");
        
    }); 
});