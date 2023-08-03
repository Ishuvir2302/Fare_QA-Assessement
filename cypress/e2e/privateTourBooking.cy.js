/// <reference types="Cypress" />

import { tourItemsPage } from "../support/pageObjects/tourItemsPage"
import { activityPage } from "../support/pageObjects/activityDetailsPage"
import { personCountPage } from "../support/pageObjects/personCountPage"
import { paymentDetails } from "../support/pageObjects/PaymentDetailsPage"
import fareHarborData from '../fixtures/example.json'
import { bookingConfirmed } from "../support/pageObjects/bookingConfirmationPage"

describe('FareHarbor - Big Apple Private Tour Booking', { testIsolation: false }, () => {


    before('Open Fareharbor Homepage', () => {

        cy.LaunchFareharbor()
    })

    context('Validate big apple private tour booking', function () {
        it('I validate the booking process', function () {
            tourItemsPage.validatePageResponse()
            tourItemsPage.selectActivity(fareHarborData.activitiesName[2])
            activityPage.matchTourHeading(fareHarborData.activitiesName[2])
            activityPage.selectAvailableDate()
            activityPage.checkAvailability()
            personCountPage.privatetourPerson(fareHarborData.privateTourPersons)
            cy.log('Total Person: ' + fareHarborData.privateTourPersons)
            personCountPage.cateringOption()
            paymentDetails.fillContactInformation()
            paymentDetails.fillPaymentCC(fareHarborData.cardNumber, fareHarborData.expiryMonth, fareHarborData.expiryYearIndex)
            paymentDetails.confirmPayment()
            bookingConfirmed.CheckBookingStatus()
            bookingConfirmed.validateBookingDetails(fareHarborData.activitiesName[2], fareHarborData.privateTourPersons)

        })


    })

})