/**
 * This test requires to have installed: xPath Dependency
 */

describe('xPath Locators', () => {
   beforeEach(() => {
      cy.visit('/classattr')
   })
   it('xPath Example 1: Find elements by its Text', () => {
      cy.xpath(`//*[text()='Correct variant is']`).should(
         'contain.text',
         'Correct'
      )
   })

   it('xPath Example 2: Find elements by its Attribute', () => {
      cy.xpath(`//pre[@class=' language-html']`).should(
         'contain.text',
         'button'
      )
   })

   it('xPath Example 3: Find elements by its Attribute the CORRECT way', () => {
      cy.xpath(
         `//button[contains(concat(' ', @class, ' '), ' btn-success ')]`
      ).should('have.css', 'background-color', 'rgb(40, 167, 69)')
   })
})
