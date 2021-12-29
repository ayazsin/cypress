describe("checkbox", () => {
  /*
    https://docs.cypress.io/api/commands/check#Syntax

    */
  it("checkbox", () => {
    cy.visit("http://automationpractice.com/index.php");

    cy.get(".sf-with-ul") //returning 4 elements
      .first() //selecting on the first element
      .click();

    //verify the checkbox is not checked by default
    cy.get("#layered_category_4").should("not.be.checked"); //returns true if the element is not checked
    cy.get("#layered_category_4").check().should("be.checked"); //uncheck()
  });

  it("check all checkboxes", () => {
    //click on women
    //check the first checkbox
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".sf-with-ul") //returning 4 elements
      .first() //selecting on the first element
      .click(); //clicking on the first one

    // input[type='checkbox'] returns all of the checkbox on the page
    cy.get("input[type='checkbox']").check();
    cy.wait(3000);
    cy.get("input[type='checkbox']").uncheck();
  });

  it.only("check all checkboxes with click", () => {
    //click on women
    //check the first checkbox
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".sf-with-ul") //returning 4 elements
      .first() //selecting on the first element
      .click(); //clicking on the first one

    // input[type='checkbox'] returns all of the checkbox on the page
    //cy.get("input[type='checkbox']").click({ multiple: true });

    //NOTE: click works for only single ElementInternals
    //If you want to click multible checkbox, use click({multiple: true})

    //Assertion
    //How do you understand if checkbox is checked or not

    cy.get("input[type='checkbox']").first().click({ multible: true });
    cy.get("input[type='checkbox']").first().should("be.checked");

    //NOTE THAT WE ALREADY DID ASSERTION SO FAR USING .should('be.checked')
    //WE CAN DO DIFFERENT APPROACH TO DO ADDITIONAL ASSERTION
    //FOR EXAMPLE WE CAN CHECK IF THE PARENT ELEMENT HAS class='checked'
    //The change is in the span element
    //When a check box is checked the parent span has value of
    //ASSERT IF THE PARENT SPAN CLASS VALUE IS CHECKED

    cy.get("input[type='checkbox']")
      .first() //getting the first check box
      .parent() //getting the parent element which is span
      .should("have.class", "checked"); // asserting if the span class = 'checked'

    //WITH cypress assertion, we can assert if any attribute has any value
    //should('have.id','username')//asserting if id = 'username'
    //should('have.type','text')//asserting if type='text'
    //should('have.class', 'container')//asserting if class='container'
  });
});
