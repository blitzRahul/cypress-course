describe('template spec', () => {

beforeEach(()=>{
  cy.visit('/fundamentals');
});

  it('fundamentals header test', () => {

    //css attribute selector
    cy.getDataTest("fundamentals-h1").should("contain.text","Testing Fundamentals");
  });

  it('accordion text stuff',()=>{
    //making an assertion, checkiing if the text is not visible
    cy.contains(/Your tests will exist in a/i).should("not.be.visible");
    cy.get('[data-test="ac-item-1"] div[role="button"]').click();
    //making an assertion, checking if the text is now visible
    cy.contains(/Your tests will exist in a/i).should("be.visible");
    //close it
    cy.get('[data-test="ac-item-1"] div[role="button"]').click();

  });

});