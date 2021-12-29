describe("alerts", () => {
  it("alert", () => {
    //Cypress automatically accepts alert when you click on alert
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(1) > button").click();

    //Assert the text is matching "You successfully clicked an alert"
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
});
