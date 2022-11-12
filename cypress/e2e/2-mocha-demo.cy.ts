/**
 * Every 'it' is a Test Case
 * Hooks:
 *    'before': will run once BEFORE ALL TCs
 *    'after': will run once AFTER ALL Tcs have ran
 *    'beforeEach': will run before EACH TCs
 *    'afterEach': will run after each TCs
 *
 * Skip: Will SKIP the current TC ( it.skip() )
 * Only: Will run ONLY the current TC ( it.only() )
 */

describe('empty spec', () => {
   // ------------------------------------------------
   before(() => {
      cy.log('This is a BEFORE hook')
   })
   after(() => {
      cy.log('This is an AFTER hook')
   })
   beforeEach(() => {
      cy.log('This is a beforeEACH hook')
   })
   afterEach(() => {
      cy.log('This is an afterEACH hook')
   })
   // ------------------------------------------------
   it('Test Case #1', () => {
      cy.visit('https://example.cypress.io')
   })

   it('Test Case #2', () => {
      cy.visit('https://example.cypress.io')
   })

   it('Test Case #3', () => {
      cy.visit('https://example.cypress.io')
   })
})
