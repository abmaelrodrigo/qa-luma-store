import copyright from '../../../fixtures/copyright.json';
import footerLinks from '../../../fixtures/footerLinks.json';

class Footer {
    verifyFooterLinks(){
        footerLinks.forEach((element,index) => {
            cy.get('[class="page-footer"]')
        .should('be.visible')
        .contains(element.label).then(($Prop) => {
            expect($Prop[0].href).to.be.eq(element.href)
        })
    


        })
        

    }

    verifyCopyrightMessage(){
        cy.get('[class="copyright"]')
        .should('contain', copyright.message);
    }

}

export default new Footer();