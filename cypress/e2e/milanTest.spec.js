/// <reference types="cypress" />

// change cypress viewport size to 1
// https://on.cypress.io/viewport
Cypress.config('viewportWidth', 1280);
Cypress.config('viewportHeight', 720);

// set a new env for cypress
// https://on.cypress.io/environment-variables
Cypress.env('CI', false);


describe('Landing page checks', () => {
  it('Check club signup button', () => {
    cy.visit('/');
    cy.get('#landingpage-club-signup').click({ force: true });
    cy.url().should('include', '/clubs/register');
  })
})

describe('All auth checks', () => {
  it('Checking Club logins', () => {
    cy.visit('/clubs/login');
    cy.get('[ data-cy="desktop-club-email"]').type('rotary@gmail.com',, { force: true });
    cy.get('[ data-cy="desktop-club-password"]').type('rotary',, { force: true });
    cy.get('.login-btn').click();
    cy.getCookie('clubToken');
  });

  it('Checking User logins', () => {
    cy.visit('/user/login');
    cy.get('#desktopUserEmail').type('gyansujan69@gmail.com',, { force: true });
    cy.get('#desktopUserPassword').type('tamaldas69',, { force: true });
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
