describe('Cypress Basics', () => {
   beforeEach(() => {
      cy.visit('/textinput')
   })

   it('Validate URL Path', () => {
      cy.url().then((url) => {
         expect(url).to.contains('/textinput')
      })
   })

   it('Validate Page Title', () => {
      cy.title().then((title) => {
         expect(title).to.be.eql('Text Input')
      })
   })

   it('Input Challenge', () => {
      cy.get('#newButtonName').type('Hello')
      cy.get('#updatingButton').click().should('have.text', 'Hello')
   })
})
