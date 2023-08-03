/// <reference types="Cypress" />

import { tourItemsPage } from "../support/pageObjects/tourItemsPage"
import { activityPage } from "../support/pageObjects/activityDetailsPage"
import { personCountPage } from "../support/pageObjects/personCountPage"
import { bookingConfirmed } from "../support/pageObjects/bookingConfirmationPage"
import { paymentDetails } from "../support/pageObjects/PaymentDetailsPage"
import fareHarborData from '../fixtures/example.json'

describe('FareHarbor - Book Online | Adults', { testIsolation: false }, () => {
    let isAnyTestFailed = false;

    before('Open Fareharbor Homepage', () => {

        cy.LaunchFareharbor()
    })

    
     
    context('When page is initially opened', function () {
        it('company information is present', function () {
            tourItemsPage.validatePageResponse()
        })
    })

    context('Select Activity: Walking tour', function () {
        it('I picked the activity: walking tour', function () {
            tourItemsPage.selectActivity(fareHarborData.activitiesName[0])
            cy.log("Selected Activity:"+fareHarborData.activitiesName[0])
        })
    }),

        context('I checked the availability', function () {
            it('I picked a date/time for my activity', function () {
                activityPage.selectAvailableDate()
                activityPage.checkAvailability()
            })
        })

    context('I select the amount of people', function () {
        it('I added 1 adult', function () {
            personCountPage.addPeople(fareHarborData.adultCount)
        })
    })
    context('I fill in my contact information', function () {
        it('I add my name, phone number and email', function () {
            paymentDetails.fillContactInformation()
        })
        it('I enter my credit card details', function () {
            paymentDetails.fillPaymentCC(fareHarborData.cardNumber, fareHarborData.expiryMonth, fareHarborData.expiryYearIndex)
        })
    })
    context('I pay and get confirmation', function () {
        it('I complete and play', function () {
            paymentDetails.confirmPayment()
        })
        it('I get my receipt', function () {
            bookingConfirmed.CheckBookingStatus()
        })
    })
})

