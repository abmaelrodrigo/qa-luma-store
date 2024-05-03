/// <reference types="cypress" />

import LoginAndCreateAccount from "../pages/LoginAndCreateAccount";
import PLP from "../pages/PLP";
import PDP from "../pages/PDP";
import SearchResults from "../pages/SearchResults";
import Body from "../pages/homepage/Body";
import Footer from "../pages/homepage/Footer";
import Header from "../pages/homepage/Header";

let searchTerms = ["shirt", "pants"]


context('Verify if Homepage is laoding correctly', ()=>{
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })
    context('Verify page Header', ()=>{
        it('Verify global banner is present', ()=>{
            Header.verifyGlobalMessageBanner();
        })
        it('Verify the Panel message with Sign and Create an Accout is present', ()=>{
            Header.verifyPanelHeader();
        })

        it('Verify the Logo is present', ()=>{
            Header.verifyLogo();
        })

        it('Verify the Search Bar is present', ()=>{
            Header.verifySearchBar();
        })

        it('Verify the Cart Icon is present', ()=>{
            Header.verifyCartIcon();
        })

        it('Verify the Menu Navigation is present', ()=>{
            Header.verifyMenuNavigation();
        })
    })

    context('Verify page Body', ()=>{
        it('Verify page body banners are present', ()=>{
            Body.verifyPageBanners();
        })
        it('Verify the Hot Sellers product section is present', ()=>{
            Body.verifyHotSellersSection();
        })
    })

    context('Verify page Footer', ()=>{
        it('Verify the footer links are present', ()=>{
            Footer.verifyFooterLinks();
        })
        it('Verify the Copyright message is present', ()=>{
            Footer.verifyCopyrightMessage();
        })
    })
})

context('Verify the searching functionaly', ()=>{
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })
    it('Verify serach for a term', ()=>{
        // For this specific test case, we search for a term selecting the last option on Autocomplete
        // It also verifies if the search result page was loaded by verify Title, breadcrum and product grid
        Header.selectLastTermOnAutocomplete(searchTerms[0]);
        SearchResults.verifyGridOfProducts();
        
    })
})

context('Verify user checkout experience', ()=>{
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })

    it('Verify guest user can register',()=>{
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/'); 
        LoginAndCreateAccount.creatAnAccount();
        LoginAndCreateAccount.verifyAccountIsCreated();

    })

    it('Verify user can add a product to the cart', ()=>{
        // This test case is to navigate to a menswear page and add one ite to the cart

        // Navigate to menswear page
        Header.navigateToPLP('Men', 'Top');

        // Add a product to the cart
        PLP.navigateToPDP();
        PDP.addProductToCart();

    })

    it.only('Verify user can leave a product review', ()=>{
        // Navigate to menswear page
        Header.navigateToPLP('Men', 'Top');

        // Add a product to the cart
        PLP.navigateToPDP();

        PDP.writeAReview();

    })
})
