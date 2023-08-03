import 'cypress-xpath';

export class ActivityDetailsPage{


  checkTourPage(activityName){
    cy.get('div[ng-inline="bei-item-header"] h1').should("be.visible").then((heading) => {
      expect(heading).to.contain(activityName);
    })
  }

  matchTourHeading(activityName){
    cy.contains(activityName).should("be.visible")
    cy.log('Activity heading displayed')
  }

  selectAvailableDate(){
    cy.get('.test-calendar-indicator').should('be.visible');
    cy.xpath('(//button[@disabled="disabled"])[last()]/parent::td/following::td[1]/button').then(($nextDay) => {
        cy.wrap($nextDay).click();        
    })
  }

  filterAvailableDate(){
    cy.get('.calendar-small-day:not([class*="empty"]):not([class*="no-bookable"]').first().click()
    cy.log('Selecting only available dates')
  }

  selectFutureMonthDate(){
    cy.get('.test-select-next-month-action').click();
    cy.log('Chevron is selected')
    //Getting today date
    const today = new Date();
    //Getting current day
    const currentDay = today.getDate()
    cy.get('.month-current').contains(currentDay).click();
   
  }

  selectFutureYearDate(){

    // Get the current year from the system
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const today = new Date();
    const currentDay = today.getDate()
    cy.get('[ng-model="calendarCtrl.yearDropdown"]').select(nextYear.toString());
    cy.get('.cal-nav-select--year').should("be.visible").then((yearSelected) => {
      expect(yearSelected).to.contain(nextYear);
    })
    cy.log('Next year is selected')
  }

   checkAvailability(){
     //pick first available time
     cy.get('.calendar-small-content').should('be.visible');
     //changing the locator from li
     cy.get('li[ng-repeat*="availability in day"]').first().click();
     cy.log('Date & time is selected')
   }

   checkNoFutureAvailability(){
    //No availability message check
    cy.get('.calendar-empty-message').should('be.visible').and('contain', 'Sorry, there is no online availability for August 2024');
  }
   
   selectAvailableTime(){
    cy.get('.not-current').should('be.visible');
    cy.get('.not-current li').each(($element, index) => {
      if (index === 0) {      
        cy.log('Select available first element')
        cy.wrap($element).click();
      } 
    })


   }




}

export const activityPage=new ActivityDetailsPage()