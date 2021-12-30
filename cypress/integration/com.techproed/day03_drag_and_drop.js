import "@4tw/cypress-drag-drop";
describe("drag and drop", () => {
  it("double click", () => {
    cy.visit("https://www.w3schools.com/html/html5_draganddrop.asp");

    // cy.get("#dblClkBtn").dblclick(); //
    // //cy.get('#dblClkBtn').rightclick()

    cy.get("#accept-choices").click();

    cy.on("window:alert", (str) => {
      expect(str) // getting text on the alert window
        .to.equal("hi, JavaTpoint Testing"); // asserting the text equal
    });
  });
  it("drag and drop", () => {
    /* Drag And Drop:
        1. Run on Terminal : npm install --save-dev @4tw/cypress-drag-drop
        2. import '@4tw/cypress-drag-drop'
        
        */
    cy.visit("https://www.w3schools.com/html/html5_draganddrop.asp");

    cy.get("#accept-choices").click();
    // dragging #sourceImage over #targetDiv
    cy.get("#drag1") // source
      .drag("#div2"); // target
  });
});
