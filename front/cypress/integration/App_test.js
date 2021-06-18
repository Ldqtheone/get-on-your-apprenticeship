describe('The Home Page', () => {

    it('Verify homepage access and informations', function () {

        cy.visit('/')

        // Header IMG Logo
        cy.get('header').find('img')

        // Button random student generator
        cy.get('button').should('contain', 'student')

        // Get H2 title
        cy.get('h2').should('contain', 'Here is a list of all Characters:')
    })
})