describe('Testing buttons', () => {
  it('buttons work correctly', () => {
    cy.visit('http://localhost:3000/products/elevated-workflows-tee');
    cy.get('[data-cy="amount"]').contains('1').should('have.length', 1);
    cy.get('[data-cy="minus-button"]').click();
    cy.get('[data-cy="amount"]').contains('1').should('have.length', 1);
    cy.get('[data-cy="plus-button"]').click().click();
    cy.get('[data-cy="amount"]').contains('3').should('have.length', 1);
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="cart-link"]').click();
    cy.get('[data-cy="table"]').children().should('have.length', 3);
    cy.get('[data-cy="cart-quantity"]').contains('3').should('have.length', 1);
    cy.get('[data-cy="plus-button"]').click();
    cy.get('[data-cy="cart-quantity"]').contains('4').should('have.length', 1);
    cy.get('[data-cy="minus-button"]').click().click().click().click();
    cy.get('[data-cy="table"]').children().should('have.length', 0);
  });
});
export {};
