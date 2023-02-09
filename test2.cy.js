//Test verificare segment URL

const { it } = require("mocha");

it('Verific daca un URL contine ceva');

cy.visit('https://www.realitatea.net/stiri/actual/romania-ingheata-de-frig-meteorologii-au-emis-o-atentionare-cod-galben-pentru-vreme-deosebit-de-rece-cand-expira-avertismentul_63e4a488d774a937f8358a83');

cy.url().should('include', 'actual');


//Test delay

it('Asteapta 10 secunde', () => {
    cy.visit('https://www.google.com/');

    cy.get('#L2AGLb').click();

    cy.wait(10000);

    cy.get('.gLFyf').type('Au trecut 10 secunde');

}
)

//Test cu selector de tip atribut

it('Selectez folosind un atribut', () =>{
    cy.visit('https://www.google.com/');

    cy.get('#v').click();

    cy.get('[alt = "Google"]').shoud('be.visible');
})

//Test screenshot pagina

it('fac un screenshot la pagina', () => {
    cy.visit('https://www.google.com/');

    cy.screenshot();


})

//Testul constanta si verificare continut input

it('verific o valoare in input', () =>{


    cy.visit('https://www.google.com/');

    cy.get('#L2AGLb').click();

    const googleSearch = cy.get('.gLFyf');

    googleSearch.type('123');
    googleSearch.shoud('have.value', '123');

})

//Testul verifica existenta unei clase pe un element selectat

it('Verific o valoare din input', () => {

    cy.visit('https://www.libris.ro/');

    cy.get('#autoCompleteButton').should('have.class', 'onSearchClick');


})