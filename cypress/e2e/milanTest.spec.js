/// <reference types="cypress" />

// change cypress viewport size to 1
// https://on.cypress.io/viewport
Cypress.config('viewportWidth', 1280);
Cypress.config('viewportHeight', 720);

// set a new env for cypress
// https://on.cypress.io/environment-variables
Cypress.env('CI', false);

describe('All Basic Tests', () => {
  it('Check header texts in homepage', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('h1', 'MILAN');
    cy.contains('h2', 'Where HELP meets NEED');
  });

  it('Check for all homepage buttons', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('button', 'Continue as a Club');
    cy.contains('button', 'Continue as a User');
    cy.contains('button', 'Share your love');
    cy.contains('button', 'Explore');
    cy.contains('button', 'Report');
  });

  it('Check for Social icons', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.fa-twitter').should('be.visible');
    cy.get('.fa-github').should('be.visible');
    cy.get('.fa-message').should('be.visible');
  });
});

describe('All auth checks', () => {
  it('Checking Club logins', () => {
    cy.visit('http://localhost:3000/clubs/login');
    cy.get('#desktopClubEmail').type('rotary@gmail.com');
    cy.get('#desktopClubPassword').type('rotary');
    cy.get('.login-btn').click();
    cy.getCookie('clubToken');
  });

  it('Checking User logins', () => {
    cy.visit('http://localhost:3000/user/login');
    cy.get('#desktopUserEmail').type('gyansujan69@gmail.com');
    cy.get('#desktopUserPassword').type('tamaldas69');
    cy.get('.login-btn').click();
    cy.getCookie('token ');
  });
});

describe('Checking if the backend is working properly or not', () => {
  it('Check if the backend is working', () => {
    cy.request('https://milan-server.vercel.app/display/allusers').then(
      (response) => {
        expect(response.status).to.eq(200);
      },
    );
  });
});
