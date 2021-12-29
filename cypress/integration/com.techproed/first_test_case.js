// describe ('Name of the class',Another fuction to create test cases)
// it : used to create TEST CASES. Like @Test annotation.
// it('NAME OF THE TEST CASE', ANOTHER FUNCTION TO CREATE)
describe("My First Test", () => {
  it("URL Test", () => {
    // And Verify the url contains google
    cy.visit("https://www.google.com");
    cy.url().should("include", "google");
  });

  // Create second test case
  it("Title Test", () => {
    // And the title equals Google
    cy.visit("https://www.google.com");
    cy.title().should("eq", "Google");
  });
});
