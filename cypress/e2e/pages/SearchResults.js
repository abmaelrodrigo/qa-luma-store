class SearchResults {
    verifyTitleAndBreadCrumb(searchTerm) {
        // Title
        cy.get('[data-ui-id="page-title-wrapper"]')
            .should('contain', searchTerm);

        // Breadcrumb
        cy.get('[class="item search"]')
            .should('contain', searchTerm)


    }

    verifyGridOfProducts() {
        cy.get('[class="item product product-item"]')
            .should('be.visible');
    }




}

export default new SearchResults();