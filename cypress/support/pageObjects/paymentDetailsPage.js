import { faker } from '@faker-js/faker';

export class PaymentDetailsPage {

    fillContactInformation() {

        //Name
        cy.get('#id_name').type(faker.name.fullName())
        //Telephone
        //cy.get('').select('[data-country-code='+faker.address.countryCode().toLowerCase()+'"]')
        cy.get('.flag-container').click()
        cy.get('.country-list').contains(faker.address.country()).click()
        cy.get('.bookform-contact-phone').type(faker.phone.phoneNumber('999-###-###'))
        //Email
        cy.get('#id_email').type(faker.internet.exampleEmail())

    }
    
    fillPaymentCC(cardNumber,month, yearIndex) {
        //Always use the same positive card
        cy.get('#id_card_number').type(cardNumber)
        //Select Next Year, Select second month of next year
        //changing the month from 15 to 7(15 is out of dropdown index)
        cy.get('#id_card_expiry_month').select(month)
        cy.get('#id_card_expiry_year').select(yearIndex)

        cy.get('#id_cardholders_name').type(faker.name.fullName())
        cy.get('.card-cvc').type(faker.finance.creditCardCVV())
        cy.get('#id_country_code').select(Math.floor(Math.random() * 150))

    }
    fillOtherCardDetails(cardNumber){
        
        cy.get('#id_card_number').as('cardField')
        //clear the field
        cy.get('@cardField').clear()
        //enter the card number again
        cy.get('@cardField').type(cardNumber)
        cy.get('@cardField').should('have.value', cardNumber);
    }

    confirmPayment() {
        //adding . in front of locator as its class
        cy.get('.btn-huge').click();
    }

    captureActivityAmount(){
            cy.get('.customer-type-count-select-inner').first().should('be.visible')
            cy.log('Person field is available')
            cy.get('.price-wrap').invoke('text').as('capturedText');
            cy.get('@capturedText').then((amounttext) => {
               cy.log('Activity price per person'+amounttext)
              });
    }
    


    compareSubtotalAmount(persons){
        cy.get('@capturedText').then((amounttext) => {
            //spliting the activity amount per person using $ and converting to integer
            const value = amounttext.split('$')[1];
            const numericValue = Number(value);
            const expectedSubtotal = numericValue * persons;
            cy.get('.test-subtotal-indicator').should('contain', `$${expectedSubtotal}`);
            cy.log('Subtotal is correctly captured as US$'+expectedSubtotal)
           });
}
}

export const paymentDetails = new PaymentDetailsPage()