describe('Test Retasalo', function() 
{

    it('Flujo Retasalo',function ()  
    {
        cy.visit('https://www.retasalo.com/')
        cy.title().should('eq','TOCTOC.com - Retasalo - Tasación de propiedades')
       // cy.get('.btn > strong').click()    
      
   })
      
    it ('Busco Propiedad por Rol', () => {
  
        cy.get(':nth-child(2) > .nav-link').click()
    
       // cy.get('.form-control > .selector__control > .selector__value-container').eq(0).click()
       cy.get('.selector__value-container').eq(0).click()
         .find('#react-select-4-input').first().focus()
        cy.contains('Santiago').click({force:true})
         
        cy.get('.form-control').type('235-15').first().focus()
        cy.contains('235-15 - ROSAS 3024 - Santiago').click({force:true})   
  
        cy.get('.resuls').should('to.visible').and('contain', '235-15 - ROSAS 3024 - Santiago')
      
        cy.get('.custom-control').click()
        // cy.get('.c-rol > form > .text-left > .btn').click()
        cy.get('[data-test=btn_continuar]').should('to.enabled').click()
        cy.url().should('include', 'https://sso.toctoc.com/')
  
    })
  
    it('Login de Retasalo',function ()  
    {
      cy.get('#email').type('hurtadomariela2@gmail.com')
      cy.get('#password').type('prueba',{sensitive: true})
      cy.get('.contenido > .row > .btn').click()  
      cy.wait(3000)
  
     // cy.get('#email').type('camilo.olivos@toctoc.com')
     // cy.get('#password').type('josefa41',{sensitive: true})
      
    })
  
    it('visualizar partes del informe', function()
    {
      
     // cy.get('.comreg').should('be.visible').and('contain', 'Santiago 235-15')
      //cy.get('.dir').should('be.visible').and('contain', 'ROSAS N°3024,') 
      cy.get('.dir').should('be.visible')
      cy.get(':nth-child(1) > .accordion-feat').should('be.visible')
      cy.get(':nth-child(2) > .accordion-feat').should('be.visible')
      cy.get(':nth-child(3) > .accordion-feat').should('be.visible')
      cy.get(':nth-child(4) > .accordion-feat').should('be.visible')
  
    }) 
  
    it('Medio de Pago disponible', function()
    {
      cy.get('.btn').click()
      cy.wait(3000)
      cy.url().should('include', 'https://ventas.toctoc.com/')
    
    })
   
  })
