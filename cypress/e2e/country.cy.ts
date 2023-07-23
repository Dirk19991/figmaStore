describe('Testing country select', () => {
  it('select works correctly', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="price"]').each((elem) => {
      expect(elem).to.contain('$');
      expect(elem).to.not.contain('£');
    });
    cy.get('[data-cy="country-select"]').select('UNITED KINGDOM');
    cy.get('[data-cy="price"]').each((elem) => {
      expect(elem).to.contain('£');
      expect(elem).to.not.contain('$');
    });
  });
});
export {};
