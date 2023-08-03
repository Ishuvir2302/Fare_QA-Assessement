/// <reference types="Cypress" />

import { tourItemsPage } from "../support/pageObjects/tourItemsPage"
import { activityPage } from "../support/pageObjects/activityDetailsPage"
import { personCountPage } from "../support/pageObjects/personCountPage"
import { paymentDetails } from "../support/pageObjects/PaymentDetailsPage"
import fareHarborData from '../fixtures/example.json'
import { bookingConfirmed } from "../support/pageObjects/bookingConfirmationPage"

describe('FareHarbor - Future Booking', { testIsolation: false }, () => {


    beforeEach('Open Fareharbor Homepage', () => {

        cy.LaunchFareharbor()
    })

    context('Validate future bookings', function () {
        it('I validate booking 1 month from now', function () {
            tourItemsPage.validatePageResponse()
            tourItemsPage.selectActivity(fareHarborData.activitiesName[1])
            activityPage.checkTourPage(fareHarborData.activitiesName[1])
            activityPage.selectFutureMonthDate()        
            activityPage.selectAvailableTime()
            cy.log('Future Month availability selected')
            personCountPage.addPerson(fareHarborData.sightSeeingPersons)
            cy.log('Total Person: ' + fareHarborData.sightSeeingPersons)
            paymentDetails.fillContactInformation()
            paymentDetails.fillPaymentCC(fareHarborData.cardNumber, fareHarborData.expiryMonth, fareHarborData.expiryYearIndex)
            paymentDetails.confirmPayment()
            bookingConfirmed.CheckBookingStatus()
            bookingConfirmed.validateBookingDetails(fareHarborData.activitiesName[1],fareHarborData.sightSeeingPersons)
            bookingConfirmed.validateBookingMonth()
        })

        it('I validate booking 1 year from now', function () {
            tourItemsPage.validatePageResponse()
            tourItemsPage.selectActivity(fareHarborData.activitiesName[1])
            activityPage.checkTourPage(fareHarborData.activitiesName[1])
            activityPage.selectFutureYearDate()
            activityPage.checkNoFutureAvailability()
            
        })
    })

})