describe('checking email', () => {
    //проверка подписки по невалидной электронной почте
    beforeEach(()=>{
        cy.visit('https://horo.mail.ru/prediction/') 
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        }) 
    }) 
        it ('test TC27', () =>{
            cy.get('input[type="text"]').type('3478testmail.ru')
            cy.contains('Подписаться').click()
            cy.get('body').should('contain', 'Данный email не соответствует формату')

        })

        it ('test TC28', () =>{
            cy.get('input[type="text"]').type('Иванов@mail.ru')
            cy.contains('Подписаться').click()
            cy.get('body').should('contain', 'Данный email не соответствует формату')

        })

        it ('test TC29', () =>{
            cy.get('input[type="text"]').type(' testmail.ru')
            cy.contains('Подписаться').click()
            cy.get('body').should('contain', 'Данный email не соответствует формату')

        })

        it ('test TC30', () =>{
            cy.get('input[type="text"]').type('testmail.ru ')
            cy.contains('Подписаться').click()
            cy.get('body').should('contain', 'Данный email не соответствует формату')

        })

        it ('test TC31', () =>{
            cy.get('input[type="text"]').type('@testmail.ru')
            cy.contains('Подписаться').click()
            cy.get('body').should('contain', 'Данный email не соответствует формату')

        })

        it ('test TC32', () =>{
            cy.get('input[type="text"]').type('testmail.ru@')
            cy.contains('Подписаться').click()
            cy.get('body').should('contain', 'Данный email не соответствует формату')

        })
          
    })
    
