describe("scroll", () => {
  /*
    scrollIntoView()
    To scroll into the elemnt
    1. Locate the element you want to scroll
    2. Use scrollIntoView()
    */
  it("scroll into view", () => {
    cy.visit("https://qa-environment.crystalkeyhotels.com/");
    cy.wait(2000);

    //Scrolling down to 'Our Rooms' element
    cy.get(".col-md-7 > .mb-4").scrollIntoView();

    cy.get(":nth-child(1) > .form-group > .wrap > label").scrollIntoView();

    // scrollTo(x y)
    cy.wait(2000);
    cy.scrollTo(0, 1000); //scrolling 1000 px down
    cy.wait(2000);
    cy.scrollTo(0, -500); //scrolling 500 px up

    /*
    scrollTo()
    1. we do not scroll on an element
    2.We scroll a certain amount (pixel or percent)
    */
  });
});
