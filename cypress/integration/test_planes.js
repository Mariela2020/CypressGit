const d = new Date
  const date = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('-') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')
    
describe('Test Planes', function() 
{

  before(function(){
     cy.fixture('data').then(function(data){
       this.data=data
     })
  })


  it('Flujo Planes',function ()  
  {
      cy.visit('https://ww2.toctoc.com/gestioncorredor/')
      cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
      cy.get('.gCdesktop > :nth-child(2) > a').click()
      cy.get('.crece > .col-12 > .plan-btn > .btn').click({force:true})
      cy.get('#nombreUser').type(this.data.name)
      cy.get('#telefonoUser').type(this.data.phone)
      cy.get('#emailUser').type(this.data.email)
      cy.get('#password').type(this.data.password)
      cy.get('#nextStep').click()
      cy.get('#razonSocial').type(this.data.razonsocial)
      cy.get('#rutFacturacion').clear().type(this.data.rut)
      cy.get('#nombreFantasia').type(this.data.fantasia)
      cy.get('#giro').type(this.data.giro)
      cy.get('#telefono').type(this.data.phone)
      cy.get('#nextStep').click()
      cy.get('#representanteLegal').type(this.data.name)
      cy.get('#rutRepresentanteLegal').clear().type(this.data.rut)
      cy.get('#emailFacturacion').type(this.data.email_facturacion)
      cy.get('#direccionFacturacion').type(this.data.direccion)
      cy.get('#region').select('13')
      cy.get('#comuna').select('339')
      cy.get('#aceptaTerminos').click()
      cy.get('.btn-danger').click()
      cy.wait(3000)
      cy.get('#verDetalle').click()
      
      cy.get(':nth-child(2) > span.total').then(function($valorelem){
        const totalrestxt= $valorelem.text()
        cy.log(totalrestxt)       
        cy.writeFile('fichero.txt', '\n\nTotal Resumen: ' +totalrestxt + ';  ' + date, {flag: 'a+'} )
                  
      })
      
      //cy.screenshot()
      cy.get('div.pago__Productos__Extra__detalle.contenedor-padre:nth-child(4) section.flujo__pago div.container.detallePago div.row.detalle__datos:nth-child(5) div.btn-next.col-12 a.btn.btn-danger.button.btn-block > span:nth-child(1)').click()
      cy.get('.modal-footer > .btn').click()
         
      cy.get('.col-md-8 > :nth-child(2)').then(function($valorelem){
        
        const productotxt= $valorelem.text()
        cy.log(productotxt)       
        cy.writeFile('fichero.txt', '\nProducto: ' +productotxt + ';  ' + date, {flag: 'a+'} )
                  
      })

      cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').then(function($valorelem){
        
        const preciotxt= $valorelem.text()
        cy.log(preciotxt)
        cy.writeFile('fichero.txt', '\nPrecio del producto: ' +preciotxt + ';  ' + date, {flag: 'a+'} )
                  
      })
      
      cy.get(':nth-child(3) > .col-sm-12 > .title-c').then(function($valorelem){
        
          const ivatxt= $valorelem.text()
          cy.log(ivatxt)             
          cy.writeFile('fichero.txt', '\n'+ivatxt + ';  ' + date, {flag: 'a+'} )
                      
      })  

      cy.get('.total > strong').then(function($valorelem){
        
        const totaldetxt= $valorelem.text()
        cy.log(totaldetxt)
        cy.writeFile('fichero.txt', '\nTotal Detalle del producto: ' +totaldetxt + ';  ' + date, {flag: 'a+'} )
      
      })  
       
  })
     
      
})
  
