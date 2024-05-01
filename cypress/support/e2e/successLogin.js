describe('The Login Page', function() {

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.session('session_id', 'remember_token');

    })

    it('success login', function(){
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    afterEach(function() {
        if (this.currentTest.state === 'failed') {
          Cypress.runner.stop()
        }
      });
})