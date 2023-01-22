describe('Click Challenge', () => {
   beforeEach(() => {
      cy.visit('/click')
   })

   it('Assertion - Class', () => {
      cy.get('#badButton').click().should('have.class', 'btn-success')
   })

   it('Assertion - Background Color', () => {
      cy.get('#badButton')
         .click()
         .should('have.css', 'background-color', 'rgb(40, 167, 69)')
   })

   // This test requires 'Cypress Real Events' package
   describe('MouseOver Challenge', () => {
      beforeEach(() => {
         cy.visit('/mouseover')
      })
      it('Hover over element', () => {
         cy.get('.text-primary').realHover()
      })
   })

   /**
    * The page displays a table with dynamic content that refreshes on each reload
    * First, find the row that contains the 'Chrome' value, and then look for it's Process % value.
    * Then compare it with the warning label
    */
   describe.only('Dynamic Tables Challenge', () => {
      beforeEach(() => {
         cy.visit('/dynamictable')
      })
      it('For Chrome process get value of CPU load', () => {
         cy.get(`div[role='row'] span`).each(($cell) => {
            if ($cell.text().includes('Chrome')) {
               cy.log(`I have found the ${$cell.text()} row!`)
               let chromeRowValues: string[] = []
               chromeRowValues.push($cell.next().text())
               chromeRowValues.push($cell.next().next().text())
               chromeRowValues.push($cell.next().next().next().text())
               chromeRowValues.push($cell.next().next().next().next().text())
               cy.log('Chrome Row Values', chromeRowValues)
               chromeRowValues.forEach((chromeValue) => {
                  if (chromeValue.includes('%')) {
                     cy.log(chromeValue)
                     cy.get('.bg-warning').should(
                        'have.text',
                        `Chrome CPU: ${chromeValue}`
                     )
                  }
               })
            }
         })
      })
   })
})
