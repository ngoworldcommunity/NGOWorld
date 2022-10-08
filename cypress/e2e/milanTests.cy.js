/// <reference types="cypress" />

// change cypress viewport size to 1
// https://on.cypress.io/viewport
Cypress.config("viewportWidth", 1280);
Cypress.config("viewportHeight", 720);

describe("All Basic Tests", () => {
  it("Check header texts in homepage", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("h1", "MILAN");
    cy.contains("h2", "Where HELP meets NEED");
  });

  it("Check for all homepage buttons", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("button", "Continue as a Club");
    cy.contains("button", "Continue as a User");
    cy.contains("button", "Share your love");
    cy.contains("button", "Explore");
    cy.contains("button", "Report");
  });

  it("Check for Social icons", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".fa-twitter").should("be.visible");
    cy.get(".fa-github").should("be.visible");
    cy.get(".fa-message").should("be.visible");
  });
});

describe("All Redirect Tests", () => {
  it("Button -> Club register ", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("button", "Continue as a Club").click();
    cy.url().should("include", "/clubs/register");
  });

  it("Button -> User register", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("button", "Continue as a User").click();
    cy.url().should("include", "/user/register");
  });

  it("Button -> Donate", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("button", "Share your love").click();
    cy.url().should("include", "/donateus");
  });

  it("Button -> Events", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("button", "Explore").click();
    cy.url().should("include", "/display/events");
  });
});

describe("All Data Tests", () => {
  it("Events should be > 0", () => {
    cy.visit("http://localhost:3000/display/events");
    cy.get(".clubCard").should("have.length.greaterThan", 0);
  });

  it("Clubs should be > 0", () => {
    cy.visit("http://localhost:3000/display/clubs");
    cy.get(".clubCard").should("have.length.greaterThan", 0);
  });
});

// check if login works on /clubs/login
// use email as "rotary@gmail.com" and password as "rotary"

describe("All Login tests", () => {
  it("Check login for club", () => {
    cy.visit("http://localhost:3000/clubs/login");
    cy.get("#desktop_clubEmail").type("rotary@gmail.com");
    cy.get("#desktop_clubPassword").type("rotary");
    cy.get(".login-btn").click();
    cy.contains("Logging you in").should("be.visible");
    cy.url().should("include", "/");
  });

  it("Check login for user", () => {
    cy.visit("http://localhost:3000/user/login");
    cy.get("#desktop_userEmail").type("gyansujan69@gmail.com");
    cy.get("#desktop_userPassword").type("tamaldas69");

    cy.get(".login-btn").click();
    cy.contains("Logging you in").should("be.visible");
    cy.url().should("include", "/");
  });
});
