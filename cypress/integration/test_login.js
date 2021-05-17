describe('Test Login Home', function() {
  
    beforeEach(function(){

        cy.visit('https://www.toctoc.com/')
        cy.get('#onesignal-slidedown-cancel-button').click()
        cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
        cy.get('#btnLogin').click()
        cy.get('p.text-center > strong').should('be.visible').and('contain','Inicia sesión con tu cuenta')
        cy.intercept("${ssoGatewayUrl}/**").as('sso')
     })
       
    it("Iniciar sesión con Credenciales valida", function() {
     
        //cy.route2("${ssoGatewayUrl}/**").as('sso')
        cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('hurtadomariela2@gmail.com')
        cy.get('[id="IngresoUsuario.Contrasena"]').type('prueba')
        cy.get(':nth-child(5) > .btn').click()
        cy.wait(3000)
        cy.get('.nom-user').should('be.visible').and('contain','Mariela')  
    })

    it("Ingresa los credenciales invalida", function(){

        cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('hurtadomariela2@gmail.com')
        cy.get('[id="IngresoUsuario.Contrasena"]').type('12345')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('.alert').contains('La información entregada no permite ingresar al sistema,') 

    })

    it("Recuperar Contraseña", function(){
 
        cy.get('.link').click()
        cy.get('#CorreoElectronico').type('hurtado_mariela@hotmail.com')
        cy.get('.btn').click() 
        cy.get('.alert-success').contains('Se ha enviado un correo') 

    })

})   