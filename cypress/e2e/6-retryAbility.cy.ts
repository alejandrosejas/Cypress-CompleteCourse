Cypress.config('defaultCommandTimeout', 16000)

describe('Retry Ability Demo', () => {
   it('Visits a website with a Delay', () => {
      cy.visit('/loaddelay', { timeout: 0 })
   })
   it('Visits a website with a Delay', () => {
      cy.visit('/loaddelay')
   })

   // 'defaultCommandTimeOut' added to pass this Test
   it('Client-side delay', () => {
      cy.visit('/clientdelay')
      cy.get('#ajaxButton').click()
      cy.get('.bg-success').should(
         'have.text',
         'Data calculated on the client side.'
      )
   })

   // Adds a timeout for to a specific selector
   it('Progress Bar Scenario', () => {
      cy.visit('/progressbar')
      cy.get('#startButton').click()
      cy.get('#progressBar', { timeout: 35000 }).should('have.text', '100%')
   })
})
