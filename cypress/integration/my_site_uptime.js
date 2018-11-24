describe('Jimmy Spain', function() {
    it('loads checkout successfully', function() {

        var sites = ['/es', '/eu', '/uk', '/us', '/mx'];

        sites.forEach(function(element) {
            
            cy.log('starting test for site: ' + element);

            cy.visit(element)

            cy
                .get('.navbar-main > .navbar-nav > li:first-child > a').click();
                
            cy
                .get('.products-grid .item.simple .select-size.has-stock')
                .eq(0).click()
                .closest('.actions')
                .find('.add-to-cart')
                .click({ force: true })

            cy
                .get('#ajaxcart .ajcheckout').click();    

            cy
                .get('.opc-col-left > h3')
                .should('have.length', 1)

        });
    })
})