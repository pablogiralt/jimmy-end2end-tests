describe('Jimmy Spain', function() {
    it('loads checkout successfully', function() {

        var sites = [
            '/es/calcetines-hombre', 
            '/eu/men-socks', 
            '/uk/men-socks', 
            '/us/men-socks', 
            '/mx/calcetines-hombre',
            '/it/calzini-uomo',
            '/fr/chaussettes-homme',
            '/de/herrensocken'
        ];

        sites.forEach(function(element) {
            
            cy.log('starting test for site: ' + element);

            cy.visit(element)

            // cy.get('.navbar-main > .navbar-nav > li:first-child > a').click();
                
            cy
                .get('.products-grid .item.simple .select-size.has-stock')
                .eq(0).click({ force: true })
                .closest('.actions')
                .find('.add-to-cart')
                .click({ force: true })

            cy
                .get('#ajaxcart .ajcheckout').click({ force: true });    

            cy
                .get('.opc-col-left > h3')
                .should('have.length', 1)

        });
    })
})