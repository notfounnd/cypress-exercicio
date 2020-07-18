/// <reference types="Cypress" />

describe('Validar analise de economia de combustível', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/fuel-savings')
    })

    describe('Cálculo por semana', () => {
        it('Deve apresentar economia positiva', function () {

            cy.fixture('dataFuelInfoWeek').as('testDataFuel').then(() => {
                cy.get('[name="newMpg"]').type(this.testDataFuel.NewVehicleMPG)
                cy.get('[name="tradeMpg"]').type(this.testDataFuel.TradeinMPG)
                cy.get('[name="newPpg"]').type(this.testDataFuel.NewVehiclePPG)
                cy.get('[name="tradePpg"]').type(this.testDataFuel.TradeinPPG)
                cy.get('[name="milesDriven"]').type(this.testDataFuel.MilesDriven)
                cy.get('[name="milesDrivenTimeframe"]').select('Week')

                cy.get('td[class="savings"]:eq(0)').should('contain', this.testDataFuel.SavingsMonthly)
                cy.get('td[class="savings"]:eq(1)').should('contain', this.testDataFuel.SavingsYear1)
                cy.get('td[class="savings"]:eq(2)').should('contain', this.testDataFuel.SavingsYear3)
            })

        })
    })

    describe('Cálculo por mês', () => {

        it('Deve apresentar economia positiva', function () {

            cy.fixture('dataFuelInfoMonth').as('testDataFuel').then(() => {
                cy.wrap(this.testDataFuel).its('fuelInfoPos').then($el => {
                    cy.get('[name="newMpg"]').type($el.NewVehicleMPG)
                    cy.get('[name="tradeMpg"]').type($el.TradeinMPG)
                    cy.get('[name="newPpg"]').type($el.NewVehiclePPG)
                    cy.get('[name="tradePpg"]').type($el.TradeinPPG)
                    cy.get('[name="milesDriven"]').type($el.MilesDriven)
                    cy.get('[name="milesDrivenTimeframe"]').select('Month')

                    cy.validateSavings($el.Savings)
                })
            })

        })

        it('Deve apresentar economia negativa', function () {

            cy.fixture('dataFuelInfoMonth').as('testDataFuel').then(() => {
                cy.wrap(this.testDataFuel).its('fuelInfoNeg').then($el => {
                    cy.get('[name="newMpg"]').type($el.NewVehicleMPG)
                    cy.get('[name="tradeMpg"]').type($el.TradeinMPG)
                    cy.get('[name="newPpg"]').type($el.NewVehiclePPG)
                    cy.get('[name="tradePpg"]').type($el.TradeinPPG)
                    cy.get('[name="milesDriven"]').type($el.MilesDriven)
                    cy.get('[name="milesDrivenTimeframe"]').select('Month')

                    cy.validateSavings($el.Savings)
                })
            })

        })
    })

})