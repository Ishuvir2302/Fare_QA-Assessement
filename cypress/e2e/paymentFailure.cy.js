/// <reference types="Cypress" />

import { tourItemsPage } from "../support/pageObjects/tourItemsPage"
import { activityPage } from "../support/pageObjects/activityDetailsPage"
import { personCountPage } from "../support/pageObjects/personCountPage"
import { bookingConfirmed } from "../support/pageObjects/bookingConfirmationPage"
import { paymentDetails } from "../support/pageObjects/PaymentDetailsPage"
import fareHarborData from '../fixtures/example.json'

describe('FareHarbor - Book Online | Failed Payment', { testIsolation: false }, () => {


    before('Open Fareharbor Homepage', () => {

        cy.LaunchFareharbor()
    })

    // beforeEach(() => {
    //     Cypress.on('test:after:run', (test) => {
    //         // @ts-expect-error Property runnner is not exposed by Cypress
    //         if (test.state !== 'passed' && test.retries > 0) Cypress.runner.stop()
    //       })
    //   })

    context('When page is initially opened', function () {
        it('company information is present', function () {
            tourItemsPage.validatePageResponse()
        })
    })

    context('Select Activity: Walking tour', function () {
        it('I picked the activity: walking tour', function () {
       //     tourItemsPage.selectActivity()
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

    context('I select the adults & children', function () {
        it('I added 1 adult & 2 children', function () {
            personCountPage.addPeople(fareHarborData.adultCount, fareHarborData.childrenCount)
            cy.log('Total Adult: ' + fareHarborData.adultCount + ' & ' + 'Total childrene: ' + fareHarborData.childrenCount)
        })
    })
    context('I fill contact information with invalid payment card', function () {
        it('I add my name, phone number and email', function () {
            paymentDetails.fillContactInformation()
        })
        it('I enter wrong invalid card details', function () {
            paymentDetails.fillPaymentCC(fareHarborData.invalidCards[0], fareHarborData.expiryMonth, fareHarborData.expiryYearIndex)
        })
    })
    context('Payment card declined', function () {
        it('I complete and play', function () {
            paymentDetails.confirmPayment()
        })
        it('I got payment card declined', function () {
            bookingConfirmed.CheckPaymentDeclineStatus()
        })
    })

    context('No sufficent fund with new card', function () {
        it('I enter other card details & confirm payment', function () {
            paymentDetails.fillOtherCardDetails(fareHarborData.invalidCards[1])
            paymentDetails.confirmPayment()
        })
        it('I got insufficient fund decline message', function () {
            bookingConfirmed.CheckPaymentDeclineStatus()
        })
    })


})