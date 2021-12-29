describe("move over", () => {
  it("move over", () => {
    cy.visit("https://www.amazon.com");
    cy.get("#icp-nav-flyout") //getting the element
      .trigger("mouseover");

    cy.wait(3000);

    /*
    Test Case
    Click on change country region
    select canada from dropdown 
    */

    cy.contains("Change country/region").click();

    cy.get("#icp-selected-country").select("Canada", { force: true });
  });
});
