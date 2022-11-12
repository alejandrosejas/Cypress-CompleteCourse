describe('empty spec', () => {
   it('passes', () => {
      cy.visit('https://example.cypress.io')
      cy.log('hello world!')
   })

   it('Typescript Introduction', () => {
      let stringVariable: String = 'this is a string'
      let numberVariable: number = 0
      let booleanVariable: boolean = true
      let anyVariable: any = false
   })

   // Typescript
   interface User {
      username: string
      password: string
   }
   function returningUserInformation(user: User): void {
      console.log('This is the user name: ' + user.username)
      console.log('This is the password: ' + user.password)
   }
})
