class utils {

    addPeople(adults,children) {
        cy.get('.test-select-count-adult select').select(adults);
        if(children>0)
        {
        cy.get('.test-select-count-child select').select(children);
        }
    }
}
 export default utils