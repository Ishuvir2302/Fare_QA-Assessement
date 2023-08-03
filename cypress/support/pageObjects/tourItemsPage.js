export class TourItemsPage {

  validatePageResponse() {
    cy.request('https://demo.fareharbor.com/api/v1/companies/bigappletours/').then((response) => {
      //changing the name value to Big Apple Tours and Activities
      expect(response.body.company.name).to.eq("Big Apple Tours and Activities")
      //changing respone code to 200
      expect(response.status).to.eq(200)
    })
  }

  selectActivity(activityName) {
    cy.get('.item-grid').find('li h3').as('activities')
    cy.get('@activities').each(($el, index, $list) => {
      cy.get($el).should('be.visible')
    })

    cy.contains(activityName).click()


  }

}

export const tourItemsPage = new TourItemsPage()