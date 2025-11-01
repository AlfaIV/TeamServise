Cypress.Commands.add('login', (email, passowrd) => {
    cy.visit('/');

    cy.get('#login_email').type(email);
    cy.get('#login_passowrd').type(passowrd);

    cy.contains('button', 'Войти').click();
});

describe('интеграционные тесты', () => {
    beforeEach(() => {
        cy.login('login', 'psw');
    });

    it('авторизация', () => {
        cy.url().should('contain', '/home');
    })

    it('вкладка профиль', () => {
        cy.xpath("//button[span[contains(text(), 'Профиль')]]").click();
        cy.url().should('contain', '/userProfile');
        cy.get('h3').should('have.text', 'Cтраница профиля сотрудника');
    })
})
