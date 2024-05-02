import globalMessage from '../../../fixtures/globalMessage.json';
import panelHeader from '../../../fixtures/panelHeader.json';
import logo from '../../../fixtures/logo.json';
import searchBar from '../../../fixtures/searchBar.json'
import cart from '../../../fixtures/cart.json'


class Header {

    verifyGlobalMessageBanner() {
        cy.get('[class="message global demo"]')
            .should('be.visible')
            .and('contain', globalMessage.message);
    }

    verifyPanelHeader() {
        cy.get('[class="panel header"]')
            .should('be.visible')
            .and('contain', panelHeader.mainMessage)
            .and('contain', panelHeader.sign)
            .and('contain', panelHeader.createAnAccount);

    }

    verifyLogo() {
        cy.get('.logo')
            .should('be.visible')
            .find('img').then($prop => {
                cy.wrap($prop[0].currentSrc).should('contain', logo.src)

            })

    }

    verifySearchBar() {
        cy.get('[id="search"]')
            .should('be.visible')
            .invoke('attr', 'placeholder')
            .should('eq', searchBar.placeholder)

    }

    verifyCartIcon() {
        cy.get('[data-block="minicart"]')
            .should('be.visible')
            .find('[class="action showcart"]')
            .invoke('attr', 'href')
            .should('eq', cart.cartURL);

    }

    verifyMenuNavigation() {
        var navMenuItems = ["What's New", "Women", "Men", "Gear", "Training", "Sale"]
        navMenuItems.forEach((item,index)  => {
            cy.get(`[id="ui-id-${index+3}"]`)
            .then($itemProp => {
                cy.wrap($itemProp[0].innerText).should('eq', item )
            })
    

        })
       
    }

}

export default new Header();