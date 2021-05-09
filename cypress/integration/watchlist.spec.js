describe('Movie Watchlist', () => {
  it('adds a new movie to the list', () => {
    cy.visit('/');
    cy.get('[data-cy=add-movie]').type('The Godfather');
    cy.get('input[id=where-to-watch]').type('Netflix{enter}');
    cy.get('[data-cy=submit').click()

    cy.get('[data-cy=watchlist] li').contains('The Godfather - Netflix').should('exist')
    cy.get('[data-cy=watchlist] li').should('have.length', 1)
  })

  it('clears the form', () => {
    cy.visit('/');
    cy.get('[data-cy=add-movie]').type('Star Wars');
    cy.get('input[id=where-to-watch]').type('Amazon Prime{enter}');
    cy.get('[data-cy=clear').click();
    
    cy.get('[data-cy=add-movie]').should('be.empty');
    cy.get('input[id=where-to-watch]').should('be.empty');
  })
})