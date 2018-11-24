describe('My site', function() {
    describe('homepage', function() {
        it('loads successfully', function() {
            cy.visit('/es')
            cy.contains('Jimmy Lion')
            
            //cy.wait(3000)
            //cy.get('#esns_box_close').click()
            //cy.visit('/es/calcetines-hombre')
            //cy.get('.products-grid .item.simple').click()
        })
        it('has a dropdown cart that opens and is initially empty', function() {
            //cy.visit('/')
            cy.get('.top-link-cart').click()
            cy.get('#ajaxcart .empty').should('contain', 'No tiene artículos en su carrito de compras.')
        })
    })
    describe('mens socks category', function() {
        it('loads successfully', function() {
          cy.visit('/es/calcetines-hombre')
          cy.get('h1').should('contain', 'CALCETINES HOMBRE')
        })
    })
})