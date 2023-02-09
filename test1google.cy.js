
describe('Suita 1', () => {

    it('test 1', () => {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('emag').type('{enter}');
        cy.get('#result-stats').should('exist');

    })
})