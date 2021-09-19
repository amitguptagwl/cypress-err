
describe('example to-do app', () => {
  it.only('displays two todo items by default', () => {
    cy.visit('https://example.cypress.io/todo')
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    fs.readFile("fileDoesn'tExist.js");
  });
});