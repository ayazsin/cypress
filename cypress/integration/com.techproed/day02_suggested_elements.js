describe("suggested elements", () => {
  it.skip("sugessted elements test", () => {
    cy.visit("https://www.google.com");
    cy.get("#L2AGLb > .QS5gu").click();
    cy.get("input[name='q']").type("usa");
    cy.wait(3000);
    cy.get("li span b") //getting the list of bold items
      .contains("covid") //choosing the one that contains map
      .click(); //then clicking on it
  });

  it("automation practice . com", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get("input[id='search_query_top']").type("dress");
    cy.wait(5000);

    //METHOD 1 is locate the one of the suggested option
    //Then click on it
    //cy.get(".ac_results > ul > :nth-child(2)").click();

    //METHOD 2 is to use contains
    //and click on it
    cy.get(".ac_results") //Summer dresses >Printed, Summer, Evening Dresses > Print
      .contains("Blouse") //Click on the 1st element if there are multible match
      .click();

    //Assertion
    cy.get("h1[itemprop='name']").should("be.visible");
  });
});
