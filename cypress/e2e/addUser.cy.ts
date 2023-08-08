describe('template spec', () => {
  it('Add the new user', () => {
    cy.visit('http://localhost:5173/users').title().should('eq', 'View Users');
    cy.get('button#add_new_btn').click().title().should('eq', 'Add User').get('h1').should('have.text', 'Add User');
    cy.get('input.username')
      .type('Test User')
      .get('input.email')
      .type('testuser@localhost.com')
      .get('input.mobile')
      .type('9841235687')
      .get('input.age')
      .type('24')
      .get('select.gender')
      .select('Male')
      .should('have.value', 'male')
      .get('select.status')
      .select('Active')
      .should('have.value', 'active')
      .get('button[type="submit"]')
      .should('have.text', 'Submit')
      .click()
      .get('div.go3958317564')
      .should('have.text', 'User added successfully!')
      .get('h3')
      .should('have.text', 'All Users');
  });
});
