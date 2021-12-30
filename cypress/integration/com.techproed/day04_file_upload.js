describe("File Upload", () => {
  it("single file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    // path of image1
    const path1 = "image01.jpeg";

    cy.get("#filesToUpload").attachFile(path1);
  });

  it("multiple file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    // path of all images
    const path1 = "image01.jpeg";
    const path2 = "image02.jpeg";
    const path3 = "image03.jpeg";

    cy.get("#filesToUpload")
      .attachFile(path1)
      .attachFile(path2)
      .attachFile(path3);
  });

  it("multiple file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    // path of all images
    const path1 = "image01.jpeg";

    // overriding oroginal file name :
    //.attachFile({ filePath: 'FILE PATH', fileName: 'FILE NAME' })
    cy.get("#filesToUpload").attachFile({
      filePath: path1,
      fileName: "customFileName.json",
    });
    //Assertion
  });
});
