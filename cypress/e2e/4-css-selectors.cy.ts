/**
 * cy.contains: used to get the DOM elements containing the text.
 * cy.get: Get one or more DOM elements by selector.
 * cy.find: Get the descendent DOM elements of a specific selector.
 */

describe('Locators', () => {
   beforeEach(() => {
      cy.visit('/dynamicid')
   })
   it('Example 1: cy.contains', () => {
      cy.contains('Button with Dynamic ID').should(
         'have.text',
         'Button with Dynamic ID'
      )
   })

   it('Example 2: cy.get & cy.find', () => {
      cy.get('div').find('button').should('have.text', 'Button with Dynamic ID')
   })

   it('Example 3: cy.get using Attributes', () => {
      cy.get(`button[class='btn btn-primary']`).should(
         'have.text',
         'Button with Dynamic ID'
      )
   })

   it('Example 4: cy.get using a Class', () => {
      cy.get('.btn-primary').should('have.text', 'Button with Dynamic ID')
   })
})
