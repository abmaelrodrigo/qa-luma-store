/// <reference types="cypress" />

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
    it.only('Verify serach for a term', ()=>{
        // For this specific test case, we search for a term selecting the last option on Autocomplete
        // It also verifies if the search result page was loaded by verify Title, breadcrum and product grid
        Header.selectLastTermOnAutocomplete(searchTerms[0]);
        SearchResults.verifyGridOfProducts();
        
    })
})