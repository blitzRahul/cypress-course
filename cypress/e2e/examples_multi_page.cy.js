describe('multi page testing',()=>{

    //before each test visit the  /examples endpoint
beforeEach(()=>{

    cy.visit('/examples');
});

it('multi-page testing',()=>{
    cy.visit('/');
    cy.getDataTest('nav-best-practices').click();
    cy.location("pathname").should("equal","/best-practices");

    //this way you can test various locations....


});

it('intercepts testing',()=>{
    cy.intercept("POST",'http://localhost:3000/examples',{
        fixture:'example.json',
    });

    cy.getDataTest("post-button").click();
});

it.only('grudge addition testing',()=>{


    //before we add anything we need to test if the UL is empty
    cy.getDataTest("grudge-list").within(()=>{

        //inside, we confirm that the no. of lis is zero
        cy.get("li").should("have.length",0);
    });

    cy.getDataTest("grudge-input").within(()=>{

        cy.get("input").type("cypress is time consuming ugh");

    });

    cy.getDataTest("add-grudge-button").click();

    //after adding the length of the list should be 1
    cy.getDataTest("grudge-list").within(()=>{

        //inside, we confirm that the no. of lis is zero
        cy.get("li").should("have.length",1);
        cy.get("li").its(0).should("contain.text","cypress is time consuming ugh");
    });
});


});