describe('Tests Suites', function() 
{
  it('Flujo Planes',function ()  
  {
      cy.visit('https://ww2.toctoc.com/gestioncorredor/')
      cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
      cy.get('.gCdesktop > :nth-child(2) > a').click()
      cy.get('.acelera > .col-12 > .plan-btn > .btn').click({force:true})
      cy.get('#nombreUser').type('Mariela Hurtado')
      cy.get('#telefonoUser').type('+56993947209')
      cy.get('#emailUser').type('hurtadomariela2@gmail.com')
      cy.get('#password').type('#password')
      cy.get('#nextStep').click()
      cy.get('#razonSocial').type('Prueba de Flujo QA')
      cy.get('#rutFacturacion').clear().type('267008469')
      cy.get('#nombreFantasia').type('Tuinmueble.com')
      cy.get('#giro').type('Giro 123')
      cy.get('#telefono').type('+56993947209')
      cy.get('#nextStep').click()
      cy.get('#representanteLegal').type('Mariela Hurtado')
      cy.get('#rutRepresentanteLegal').clear().type('267008469')
      cy.get('#emailFacturacion').type('mariela.hurtado@toctoc.com')
      cy.get('#direccionFacturacion').type('Manuel Rodriguez')
      cy.get('#region').select('13')
      cy.get('#comuna').select('339')
      cy.get('#aceptaTerminos').click()
      cy.get('.btn-danger').click()
      cy.wait(3000)
      cy.get('#verDetalle').click()
      cy.get('div.pago__Productos__Extra__detalle.contenedor-padre:nth-child(4) section.flujo__pago div.container.detallePago div.row.detalle__datos:nth-child(5) div.btn-next.col-12 a.btn.btn-danger.button.btn-block > span:nth-child(1)').click()
      cy.get('.modal-footer > .btn').click()

     
      
    })
  

  /*  it('Flujo Producto Marketing',function ()  
  {
      cy.visit('https://ww2.toctoc.com/gestioncorredor/')
      cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
      cy.get("div.menuPrincipal:nth-child(2) div.menuGestionCorredores:nth-child(3) div.container div.menu__interno.d-flex.flex-row ul.gCdesktop.menu__section--list.d-flex.flex-row li.item:nth-child(3) > a:nth-child(1)").click()
      cy.get('.gCdesktop > :nth-child(3) > a').click()
      cy.get(':nth-child(1) > .item_superior > .desktop').click()
      cy.get('.modal-footer > :nth-child(2) > .btn').click()
      
      cy.wait(6000)
      
      //cy.get('#razonSocial').clear().type('Prueba de Flujo QA')
      //cy.get('#rutFacturacion').clear().type('267008469')
      //cy.get('#nombreFantasia').clear().type('Test de Prueba')
      //cy.get('#giro').clear().type('Giro3')
      //cy.get('#telefono').clear().type('+56993947209')
      //cy.get('#direccion').clear().type('Bella Vista')
      //cy.get('#nextStep').click()


      
      
    }) */


  
  })