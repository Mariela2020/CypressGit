/*

describe ('LoginTest', function (){
   it('LoginTest', function(){

      cy.login('admin@yourstore.com','admin')      //valid
      cy.title().should('be.equal','Dashboard / nopCommerce administration') 
      

      cy.login('admin@yourstore.com','admin12')     //invalid password
      cy.title().should('be.equal','Your store. Login') 


      cy.login('admin@yourstore123.com','admin')  //invalid email
      cy.title().should('be.equal','Your store. Login') 

      cy.log('Adding customer............')
   })  

  
   it('LoginTest', function(){
 
       //cy.visit('https://ww2.toctoc.com/gestioncorredor/')
       //cy.get('.menu__section--profile > a').click()
       cy.visit('https://sso.toctoc.com/gestioncorredor/?o=gc&url=aHR0cDovL3d3Mi50b2N0b2MuY29tL2dlc3Rpb25jb3JyZWRvci8=')
       cy.get('#email').type('hurtadomariela2@gmail.com')
       cy.get('#password').type('prueba')
       cy.get('.btn').click()
       
       //cy.visit('https://ww2.toctoc.com/gestioncorredor/')
       
    })
 
})
*/