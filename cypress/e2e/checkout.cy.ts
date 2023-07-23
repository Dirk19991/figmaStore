beforeEach(() => {
  cy.visit('http://localhost:3000/products/elevated-workflows-tee');
  cy.get('[data-cy="add-button"]').click();
  cy.get('[data-cy="cart-link"]').click();
  cy.get('[data-cy="checkout-link"]').click();
});

describe('Testing checkout page', () => {
  it('validation works', () => {
    cy.get('[data-cy="email"]').type('example@mail.ru');
    cy.get('[data-cy="email-error"]').should(
      'not.include.text',
      'Please enter email in correct format'
    );
    cy.get('[data-cy="email"]').clear().type('examplemail.ru').blur();
    cy.get('[data-cy="email-error"]').should(
      'include.text',
      'Please enter email in correct format'
    );
    cy.get('[data-cy="first-name"]').focus().blur();
    cy.get('[data-cy="first-name-error"]').should(
      'include.text',
      'Mandatory field'
    );
    cy.get('[data-cy="first-name"]').type('John').blur();
    cy.get('[data-cy="first-name-error"]').should(
      'not.include.text',
      'Mandatory field'
    );
    cy.get('[data-cy="last-name"]').focus().blur();
    cy.get('[data-cy="last-name-error"]').should(
      'include.text',
      'Mandatory field'
    );
    cy.get('[data-cy="last-name"]').type('Smith').blur();
    cy.get('[data-cy="last-name-error"]').should(
      'not.include.text',
      'Mandatory field'
    );
    cy.get('[data-cy="city"]').focus().blur();
    cy.get('[data-cy="city-error"]').should('include.text', 'Mandatory field');
    cy.get('[data-cy="city"]').type('New York').blur();
    cy.get('[data-cy="city-error"]').should(
      'not.include.text',
      'Mandatory field'
    );
    cy.get('[data-cy="address"]').focus().blur();
    cy.get('[data-cy="address-error"]').should(
      'include.text',
      'Mandatory field'
    );
    cy.get('[data-cy="address"]').type('Lincoln st., 123, 23').blur();
    cy.get('[data-cy="address-error"]').should(
      'not.include.text',
      'Mandatory field'
    );
    cy.get('[data-cy="postal-code"]').focus().blur();
    cy.get('[data-cy="postal-code-error"]').should(
      'include.text',
      'Mandatory field'
    );
    cy.get('[data-cy="postal-code"]').type('invalid').blur();
    cy.get('[data-cy="postal-code-error"]').should(
      'include.text',
      'Postal code can only contain numbers'
    );
    cy.get('[data-cy="postal-code"]').clear().type('323233').blur();
    cy.get('[data-cy="postal-code-error"]')
      .should('not.include.text', 'Mandatory field')
      .should('not.include.text', 'Postal code can only contain numbers');
  });

  it('selects work', () => {
    cy.get('[data-cy="country"]').select('UNITED STATES');
    cy.get('[data-cy="state"]').select(1).should('have.value', 'Alaska');
    cy.get('[data-cy="country"]').select('UNITED KINGDOM');
    cy.get('[data-cy="state"]').select(0).should('have.value', 'Avon');
  });

  it('gift card works', () => {
    cy.get('[data-cy="gift-card"]').type('invalid');
    cy.get('[data-cy="apply"]').click();
    cy.get('[data-cy="incorrect"]').contains('Incorrect code!');
    cy.get('[data-cy="applied"]').should('not.exist');
    cy.get('[data-cy="gift-card"]').clear().type('gift');
    cy.get('[data-cy="apply"]').click();
    cy.get('[data-cy="applied"]').contains('Code applied!');
    cy.get('[data-cy="incorrect"]').should('not.exist');
  });
});
export {};
