describe('Testing ordering the goods', () => {
  it('the order can be placed correctly', () => {
    // ordering first item, quantity: 3, subtotal: 60
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="blue-figma-hat"]').click();
    cy.location('pathname', { timeout: 10000 }).should(
      'eq',
      '/products/blue-figma-hat'
    );
    cy.get('[data-cy="plus-button"]').click().click();
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="shop-link"]').click();

    // ordering second item, quantity: 2, subtotal: 40
    cy.get('.swiper-button-next').click().click();
    cy.get('[data-cy="rainbow-logo-tee"]').click();
    cy.location('pathname', { timeout: 10000 }).should(
      'eq',
      '/products/rainbow-logo-tee'
    );
    cy.get('[data-cy="plus-button"]').click();
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="shop-link"]').click();

    // ordering third item, quantity: 1, subtotal: 22
    cy.get('[data-cy="item-9"]').click();
    cy.location('pathname', { timeout: 10000 }).should(
      'eq',
      '/products/elevated-workflows-tee'
    );
    cy.get('[data-cy="add-button"]').click();

    // checking that cart total is 122
    cy.get('[data-cy="cart-link"]').click();
    cy.get('[data-cy="items-in-cart"]').contains('3 items in Cart');
    cy.get('[data-cy="total"]').contains('$122');

    // filling the information
    cy.get('[data-cy="checkout-link"]').click();
    cy.get('[data-cy="email"]').type('example@mail.ru');
    cy.get('[data-cy="country"]').select('UNITED STATES');
    cy.get('[data-cy="state"]').select('Texas');
    cy.get('[data-cy="first-name"]').type('John');
    cy.get('[data-cy="last-name"]').type('Smith');
    cy.get('[data-cy="city"]').type('Austin');
    cy.get('[data-cy="address"]').type('Lincoln st., 125, 33');
    cy.get('[data-cy="postal-code"]').type('223223');

    // applying the gift card and placing order
    cy.get('[data-cy="gift-card"]').type('gift');
    cy.get('[data-cy="apply"]').click();
    cy.get('[data-cy="discount-sum"]').contains('116');
    cy.get('[data-cy="place-order"]').click();

    // successful order
    cy.get('[data-cy="thanks"]').contains('Thank you for your order!');
    cy.get('[data-cy="continue"]').click();
    cy.location('pathname', { timeout: 10000 }).should('eq', '/');
    cy.get('[data-cy="cart-link"]').contains('0').should('have.length', 1);
  });
});
export {};
