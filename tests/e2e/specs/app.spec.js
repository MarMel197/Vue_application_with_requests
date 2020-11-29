describe('App', () => {
    beforeEach(() => {
        cy.visit('/', () => {
            console.log("App loaded");
        })
    })

    it('Should have populated select', () => {
        const movieSelectOptions = cy.get('#movie_select option')
        movieSelectOptions.should('have.length', 21)
    })

    it('should show selected movie on select change', () => {
        cy.get('#movie_select').select('Castle in the Sky')
        cy.get('#selected_movie > h3').contains('Castle in the Sky')
    })

    it('should show another movie on select change', () => {
        cy.get('#movie_select').select('Porco Rosso')
        cy.get('#selected_movie > h3').contains('Porco Rosso')
    })

})