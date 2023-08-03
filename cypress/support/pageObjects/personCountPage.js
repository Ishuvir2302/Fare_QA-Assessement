export class PersonCountPage {


  addPeople(adults, children) {

    cy.dropdownSelect('.test-select-count-adult select', adults)
    if (children > 0) {

      cy.dropdownSelect('.test-select-count-child select', children)
    }

  }

  addPerson(persons) {

    cy.dropdownSelect('[data-test-id="user-type-person"]', persons)
  }

  privatetourPerson(people) {

    cy.dropdownSelect('[data-test-id="user-type-four-to-six-people"]', people)

  }

  cateringOption() {

    cy.get('.customer-type-cards-list [class*="custom-field-values"] ul span[role="combobox"]').each(($cateringDropdown) => {
      // select the first option in each dropdown
      cy.wrap($cateringDropdown).click()
      cy.get('.select2-results__option--highlighted').click()
    });
  }

}

export const personCountPage = new PersonCountPage()