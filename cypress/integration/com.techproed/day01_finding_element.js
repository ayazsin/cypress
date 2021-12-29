describe("Finding Elements", () => {
  it("get method", () => {
    cy.visit("https://qa-environment.crystalkeyhotels.com/");
    cy.contains("Log in").click();

    //ASSERTIONS
    //1. Asserting if url includes Logon
    cy.url().should("include", "Logon");

    //2. Assert if Log in is visible

    //CSS LOCATORS FOR LOG IN
    //.row > .mb-4
    //h2.mb-4
    //h2{class=mb-4']

    //1. get() is used to locate elements
    //should('be.visible) : checking if the element is visible
    cy.get(".row > .mb-4").should("be.visible");

    //Finding total number of links that is child of li
    //Assert the total is 29

    // li a =>Means give me all link(a) that is listitem
    // xpath =li//a, css = li a
    cy.get("li a").should("have.length", 29);

    //2. find() is used to find any element after get()

    cy.get("a[href='/Rooms/6']").should("have.length", 1);

    //We can also say specifically
    //find a[href='/Rooms/6'] that is child of li
    cy.get("li").find("a[href='/Rooms/6']").should("have.length", 1);

    //3. within () is also used after get()
    //Looks for specific elements within that parent

    //PARENT : div.categories CHILD : a[href='/Rooms/318']
    cy.get("a[href='/Rooms/318']").should("have.length", 1);
    cy.get("div.categories")
      .find("a[href='/Rooms/6']")
      .should("have.length", 1);
    cy.get("div.categories").within(() => {
      cy.get("a[href='/Rooms/318']").should("have.length", 1);
      cy.get("a[href='/Rooms/318']").click();
    });

    /*
      NOTES: -We should always try get() to find elements first
      -If this fails to locate the element(not visible, not unique, ...)
      Then try find
      -If that also doesn't locate the element
      Then use within
      */
  });
});
