
class PLP {
    verifyBreadcrumbs(category, subcategory) {
        cy.get('[class="breadcrumbs"]')
            .should('contain', category)
            .and('contain', subcategory);

    }

    navigateToPDP() {
        cy.get('[class="item product product-item"]')
            .first()
            .click();

    }
}

export default new PLP();