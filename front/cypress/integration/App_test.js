describe('The Home Page', () => {

    it('sets auth cookie when logging in via form submission', function () {

        cy.visit('/')

        // Header IMG Logo
        cy.get('header').find('img')

        // Button random student generator
        cy.get('button').should('contain', 'student')

        // UI should reflect this user being logged in
        cy.get('h2').should('contain', 'Here is a list of all Characters:')
    })
})