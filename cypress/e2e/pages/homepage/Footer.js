import copyright from '../../../fixtures/copyright.json';

class Footer {
    verifyFooterLinks(){
        cy.get('[class="page-footer"]')
        .should('be.visible');

    }

    verifyCopyrightMessage(){
        cy.get('[class="copyright"]')
        .should('contain', copyright.message);
    }

}

export default new Footer();