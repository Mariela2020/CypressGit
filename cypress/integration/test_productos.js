const d = new Date
  const date = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('-') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

describe('Test Producto', function() {
  
    before(function(){
       cy.fixture('data').then(function(data){
         this.data=data
  
       })
  
      
    })
   
    it('Flujo Producto Marketing', function() {
     
        cy.visit('https://ww2.toctoc.com/gestioncorredor/')
        cy.get('.menu__section--profile > a').click()
        //cy.route2("${ssoGatewayUrl}/**").as('sso')
        cy.intercept("${ssoGatewayUrl}/**").as('sso')
        cy.get('#email').type(this.data.email)
        cy.get('#password').type(this.data.password,{sensitive: true})
        cy.get('.btn > span').click()
        cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación') 
        cy.get('.gCdesktop > :nth-child(3) > a').click()
        cy.get(':nth-child(6) > .item_superior > .desktop').click()
        cy.get('.modal-footer > :nth-child(2) > .btn').click()
        cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 1/3')
        cy.wait(3000)
        cy.get('#nextStep').click()
        cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 2/3')
        cy.get('#aceptaTerminos').click()
        cy.get('.btn-danger').click({force: true})
        cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 3/3')

        cy.get(':nth-child(2) > span.total').then(function($valorelem){
        
          const totalrestxt= $valorelem.text()
          var totalres = totalrestxt
          cy.log(totalres)     
          cy.writeFile('producto.txt', '\n\nTotal Resumen: ' +totalrestxt + ';  ' + date, {flag: 'a+'} )
                    
        }) 
        cy.wait(3000)
        cy.get('.btn').click({force: true})
        cy.title().should('eq','Pago de servicios')

        cy.get('.col-md-8 > :nth-child(2)').then(function($valorelem){
        
          const productotxt= $valorelem.text()
          cy.log(productotxt)
          cy.writeFile('producto.txt', '\nProducto: ' + productotxt + ';  ' + date, {flag: 'a+'} )
                    
        })

        cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').then(function($valorelem){
        
          const preciotxt= $valorelem.text()
          cy.log(preciotxt)
          cy.writeFile('producto.txt', '\nPrecio: ' + preciotxt + ';  ' + date, {flag: 'a+'} )
                    
        })

        cy.get(':nth-child(3) > .col-sm-12 > .title-c').then(function($valorelem){
        
          const ivatxt= $valorelem.text()
          cy.log(ivatxt)
          cy.writeFile('producto.txt', '\n' + ivatxt + ';  ' + date, {flag: 'a+'} )
                    
        })

        cy.get('.total > strong').then(function($valorelem){
        
          const totaldetxt= $valorelem.text()
          cy.log(totaldetxt)
          cy.writeFile('producto.txt', '\nTotal: ' + totaldetxt + ';  ' + date, {flag: 'a+'} )
                    
        })   
        
        
      })
  
    })    
  