describe("alerts", () => {
  it("alert", () => {
    //Cypress automatically accepts alert when you click on alert
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(1) > button").click();

    //Assert the text is matching "You successfully clicked an alert"
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("accept alert test", () => {
    /*
      Cypress automatically accepts alert when you click on alert button
    
      */

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //clicking the second alert button
    //by default the alert will be accepted
    cy.get(":nth-child(2) > button").click();
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("dismiss alert test", () => {
    /*
      Cypress automatically accepts alert when you click on alert button
      With cypress we can control the browser events using on function 
      on is a jquey function
      */

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //clicking the second alert button
    //by default the alert will be accepted
    cy.get(":nth-child(2) > button").click();

    //window(object):confirm(functionality)
    cy.on("window:confirm", (str) => {
      return false; //DEFAULT CYPRESS BEHAIVOUR return true
    });
    //Asserting the result now has you clicked: Cancel
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it.only("entering text on the alert test", () => {
    /*
      Cypress automatically accepts alert when you click on alert button
      We will use window()
      */

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //clicking the third alert button
    //by default the alert will be accepted

    cy.window() //to controll the popup window
      .then(($windowElement) => {
        //$windowELelemt represent window popup element
        cy.stub($windowElement, "prompt").returns("Hi");
        cy.wait(3000);
        cy.get(":nth-child(3) > button").click();
      });

    cy.get("#result").should("have.text", "You entered: Hi");
  });
});
