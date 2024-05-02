import bodyBanners from '../../../fixtures/bodyBanners.json';
import hotSellers from '../../../fixtures/hotSellers.json';




class Body {

    verifyPageBanners() {
        bodyBanners.forEach((banner, index) => {
            cy.get('.block-promo')
                .eq(index)
                .should('have.attr', 'href', banner.href)
                .find('img')
                .should('have.attr', 'src', banner.imgSrc);

        })


    }

    verifyHotSellersSection() {

        cy.get('[class="content-heading"]')
            .should('contain', hotSellers.title)
            .and('contain', hotSellers.info);

        cy.get('[class="products-grid grid"]')
            .find('[class="product-item"]')
            .should('be.visible')

    }



}

export default new Body();