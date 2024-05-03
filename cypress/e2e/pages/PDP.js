import userReview from '../../fixtures/user5StarReview.json'
import Header from './homepage/Header';

class PDP {
    addProductToCart() {
        // Select size M
        cy.get('[id="option-label-size-143-item-167"]')
            .click();

        // Select the only color available
        cy.get('[id="option-label-color-93-item-50"]')
            .click();

        // Add to cart
        cy.get('[id="product-addtocart-button"]')
            .click()

        // Verify if product was added to cart
        cy.get('[id="qty"]')
            .then($prop => {
                Header.verifyNumberOnItemCart($prop[0].value);

            })


    }

    writeAReview() {
        cy.get('[id="tab-label-reviews-title"]')
            .click();

        cy.get('[id="Rating_5_label"]')
            .click({ force: true });

        cy.get('[id="nickname_field"]')
            .type(userReview.nickname, { delay: 100 });

        cy.get('[id="summary_field"]')
            .type(userReview.summary, { delay: 100 });

        cy.get('[id="review_field"]')
            .type(userReview.review);

        cy.get('[class="action submit primary"]')
            .click();



    }
}

export default new PDP();