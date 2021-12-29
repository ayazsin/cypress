describe("Go to the application", () => {
  it("Test Case 1", () => {
    // visit () => to go to the URL
    cy.visit("https://qa-environment.crystalkeyhotels.com/");

    //clicking on Log in
    cy.contains("Log in").click();

    //Find username and type manager
    cy.get("#UserName").type("manager");
    //driver.findElement(By.cssLocator('#UserName')).sendkeys("manager");
    //Find password and type 'Manager2!'
    cy.get("#Password").type("Manager2!");
    //Click on the submit button
    cy.get("#btnSubmit").click();

    //
  });
});
