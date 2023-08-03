export class BookingConfirmationPage {


    CheckBookingStatus() {
        cy.get('.receipt-header').should('be.visible');
    }

    validateBookingDetails(activityName,person) {
        cy.get('.receipt-ticket-pk b').should('be.visible');
        cy.get('.receipt-ticket-pk b').invoke('text').then((bookingID) => {
            expect(bookingID).to.contain('Booking');       
            cy.log('Generated Booking ID', bookingID);
          });      
          cy.invokeText('.test-receipt-item-name').then((activity) => {
            expect(activity).to.contain(activityName);
        })
          cy.log('Activity Name is correct')
       //   cy.get('.test-receipt-breakdown-indicator').invoke('text').should('contain', person);
          cy.invokeText('.test-receipt-breakdown-indicator').then((personCount) => {
           
            expect(personCount).to.contain(person);
        })

    }

    validateBookingMonth(){
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        cy.log('currentMonth'+currentMonth)
    }

    CheckPaymentDeclineStatus() {

        cy.get(".form-errors.ng-scope > .test-server-error-indicator > .ng-binding").should("be.visible").then((errorMessage) => {
            //looking for reason of failure
            const errorMessageText = errorMessage.text();
            if (errorMessageText.includes("card was declined")) {
                expect(errorMessageText).to.contain('Could not process payment because the card was declined');

            } else if (errorMessageText.includes("insufficient funds")) {
                expect(errorMessageText).to.contain('Could not process payment because the account has insufficient funds.');

            } else {
                cy.log('Payment failure reason' + errorMessageText)
            }
        });

        //success message doesnt exisit
        cy.get(".receipt-header").should("not.exist");



    }

}

export const bookingConfirmed = new BookingConfirmationPage()