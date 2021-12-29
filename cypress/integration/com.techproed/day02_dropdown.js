describe("dropdown", () => {
  it("dropdown test", () => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
    cy.wait(2000);
    //cypress uses select method to select from dropdown

    //1.locate the dropdown element
    //2.use select method to select the option

    cy.get("#dropdown") //locating the dropdown element
      .select("Option 1") //selecting Option 1
      .should("have.value", "1"); //selected value = 1
    cy.wait(2000);

    cy.get("#dropdown").select("Option 2").should("have.value", "2");
    cy.wait(2000);
  });
});
