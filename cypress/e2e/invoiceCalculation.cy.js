/// <reference types="Cypress" />

import { tourItemsPage } from "../support/pageObjects/tourItemsPage"
import { activityPage } from "../support/pageObjects/activityDetailsPage"
import { personCountPage } from "../support/pageObjects/personCountPage"
import { paymentDetails } from "../support/pageObjects/PaymentDetailsPage"
import fareHarborData from '../fixtures/example.json'

describe('FareHarbor - Activity invoice calculation', { testIsolation: false }, () => {


    before('Open Fareharbor Homepage', () => {

        cy.LaunchFareharbor()
    })

    context('Validate invoice calculation ', function () {
        it('I validate invoice perform correct calculation', function () {
            tourItemsPage.validatePageResponse()
            tourItemsPage.selectActivity(fareHarborData.activitiesName[1])
            activityPage.checkTourPage(fareHarborData.activitiesName[1])
            activityPage.selectAvailableDate()
            activityPage.selectAvailableTime()
            personCountPage.addPerson(fareHarborData.sightSeeingPersons)
            cy.log('Total Person: ' + fareHarborData.sightSeeingPersons)
            paymentDetails.captureActivityAmount()
            paymentDetails.compareSubtotalAmount(fareHarborData.sightSeeingPersons)
            cy.log('Subtotal is correctly captured')
        })
    })

})