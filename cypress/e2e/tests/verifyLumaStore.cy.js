/// <reference types="cypress" />

import Body from "../pages/homepage/Body";
import Footer from "../pages/homepage/Footer";
import Header from "../pages/homepage/Header"


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

    context.only('Verify page Footer', ()=>{
        it('Verify the footer links are present', ()=>{
            Footer.verifyFooterLinks();
        })
        it('Verify the Copyright message is present', ()=>{
            Footer.verifyCopyrightMessage();
        })
    })
})