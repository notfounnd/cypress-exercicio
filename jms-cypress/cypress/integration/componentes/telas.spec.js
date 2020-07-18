/// <reference types="Cypress" />

describe('Validar componentes de tela', () => {

    it('Homepage', () => {
        cy.visit('http://localhost:3000/')

        cy.get('h1')
            .should('exist')
            .should('contain', 'React Slingshot')

        cy.get('ol a[href*="fuel-savings"]')
            .should('exist')
            .should('contain', 'demo app')
    })

    it('Fuel Savings Page', function () {
        cy.visit('http://localhost:3000/fuel-savings')
        
        cy.get('#app h2').then($el => {
            expect($el).contain('Fuel Savings Analysis')
        })
        
        cy.get('label').then($arr => {
            const values = []
            $arr.each(function(){
                values.push(this.innerHTML)
            })
            expect(values).to.include.members([
                'New Vehicle MPG',
                'Trade-in MPG',
                'New Vehicle price per gallon',
                'Trade-in price per gallon',
                'Miles Driven',
                'Date Modified'])
        })

        cy.get('[name="milesDrivenTimeframe"] option').then($arr => {
            const values = []
            $arr.each(function(){
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(['Week', 'Month', 'Year'])
        })
        
        cy.get('input[type="text"]')
            .should('to.have.length', 5)

        cy.get('input[type="submit"]')
            .should('have.value', 'Save')
    })

    it('About Page', () => {
        cy.visit('http://localhost:3000/about')

        cy.xpath('//h2[@class="alt-header"]').then($el => {
            expect($el).not.to.be.empty
            expect($el).contain('About')
        })

        cy.xpath('//a[contains(@href,"git")]/parent::p').then($el => {
                expect($el).contain('This example app is part of the React-Slingshot starter kit')
            })

        cy.xpath('//a[contains(@href,"git")]/parent::p').then($el => {
            expect($el).contain('This example app is part of the React-Slingshot starter kit')
        })

        cy.xpath('//a[contains(@href,"bad")]/parent::p').then($el => {
            expect($el).contain('Click this bad link to see the 404 page')
        })

    })

})