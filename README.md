# # FareHarbor | QA Assessment

  

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

  

Thank you for your interest in joining the QA team @ FareHarbor. To assess how fluent you are in solving different types of problems, we have designed these small tasks. The purpose of these tasks is not only to see how well can you write new scenarios but also to determine your abilities to find issues and break down problems into smaller tasks.

  
  

## Setting Up

  

### Install Cypress

To install Cypress for Mac, Linux, or Windows, then [get started](https://on.cypress.io/install).

    npm install cypress --save-dev

[ You can also follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

If you have any issues with the installation, we recommend you follow the [troubleshooting guide.](https://docs.cypress.io/guides/references/troubleshooting)

  
### Fork this Repo

First, you will need to fork: https://github.com/FareHarbor/qa-assessment

In order for us to be able to properly evaluate your results, we ask you to submit your changes within a private repository on GitHub and add our [email](priamo.ramirez@fareharbor.com), as a contributor.

When submitting your changes we would like for you to use GitHub flow, meaning that we expect you to create a branch from your fork, make changes and submit a pull request with your changes.

 
After forking the repo, we recommend you continue with the following commands:

    
    ## clone this repo to a local directory
    
    git clone https://github.com/<your-username>/qa-assessment.git
    
    ## cd into the cloned repo
    
    cd qa-assessment
    
    ## install the node_modules
    
    npm install
    
    ## run the tests
    
    npm test
    
      
      
      

## Tasks

  

This exercise will be divided into different stages: Fixing the current issues that the test suite has, implementing new tests, and refining the current test suite.

  

### Fixes
As you can see when you first execute our test suite, there are some issues that are not allowing it to succeed. Your first task is to be able to find the cause of these issues, fix them, and also explain via comments what was wrong and how you fixed it.


### New Scenarios
We would like to implement the following scenarios:

 - Create a scenario that reproduces a failed payment method. We use stripe as one of our payment processors, you can find how to test with different credit cards number here [Stripe Testing](https://stripe.com/docs/testing#declined-payments).
- Create a scenario that validates the total amount of the invoice based on the calculation of the services purchased. If you added 5 adults, make sure that at the end the invoice matches the price per adult.
- Create a scenario to book activity 1 month from now, and 1 year from now.
- Create a scenario to book **[Big Apple's Private Tour](https://demo.fareharbor.com/embeds/book/bigappletours/items/58792/availability/47763921/book/?flow=64752)**, with 4 people, filling up all the necessary fields during the booking process.


### Improvements (Bonus)
Do you see any areas of improvement?  This can be related to our use of POM or are we not doing a good job implementing [DRY](https://www.mindfultester.com/dry-or-dont-repeat-yourself-in-test-automation-part-1/), let us know what you would change and why. This can be documented in a new markdown file within the repo, or using your documenting tool of choice.

