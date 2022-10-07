/// <reference types="cypress" />

// change cypress viewport size to 1
// https://on.cypress.io/viewport
Cypress.config("viewportWidth", 1280);
Cypress.config("viewportHeight", 720);

describe("All Basic Tests", () => {
  it("Check header texts in homepage", () => {
    cy.visit("https://milaan.vercel.app/");
    cy.contains("h1", "MILAN");
    cy.contains("h2", "Where HELP meets NEED");
  });

  it("Check for all homepage buttons", () => {
    cy.visit("https://milaan.vercel.app/");
    cy.contains("button", "Continue as a Club");
    cy.contains("button", "Continue as a User");
    cy.contains("button", "Share your love");
    cy.contains("button", "Explore");
    cy.contains("button", "Report");
  });
});
