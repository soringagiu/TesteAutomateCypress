describe('On gsp', () => {
    it('I can login', () => {
       cy.visit('https://gsp.ro');
       cy.get('#onetrust-accept-btn-handler').click();
       cy.visit('https://welcome.login-romania.rc.ringier.com/').click();
       cy.get('#username').type('soringagiu');
       cy.get('#first-step-continue-btn').click();
       cy.get('#password').type('Faranumar1');
       cy.get('#native-login-btn').click();

       
    })


});