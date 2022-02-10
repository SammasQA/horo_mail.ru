describe('checking the horo', () => {
    //проверяем открытие сайта и и выдачу гороскопов всех знаков: сегодня, вчера, завтра, месяц, год
    beforeEach(()=>{
        cy.visit('https://horo.mail.ru/prediction/') 
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })  
    })
    it ('TC11', () => {
        cy.get('span[class="p-prediction__date__text"]').find('.p-prediction__date-day')
        .click({mutiple: true})
        cy.get('body').should('contain', 'Гороскоп для всех знаков на сегодня')

    })
    it ('TC10', () => {
        cy.contains('Вчера').click()
        cy.get('span[class="p-prediction__date__text"]').find('.p-prediction__date-day')
        .click({mutiple: true})
        cy.get('body').should('contain', 'Гороскоп для всех знаков на вчера')
    })

    it ('TC12', () => {
        cy.contains('Завтра').click()
        cy.get('span[class="p-prediction__date__text"]').find('.p-prediction__date-day')
        .click({mutiple: true})
        cy.get('body').should('contain', 'Гороскоп для всех знаков на завтра')
    })

    it ('TC13', () => {
        cy.contains('Неделя').click()
        cy.get('span[class="p-prediction__date__text"]').find('.p-prediction__date-day')
        .click({mutiple: true})
        cy.get('body').should('contain', 'Гороскоп для всех знаков на неделю')
    })

    it ('TC13', () => {
        cy.contains('Неделя').click()
        cy.get('span[class="p-prediction__date__text"]').find('.p-prediction__date-day')
        .click({mutiple: true})
        cy.get('body').should('contain', 'Гороскоп для всех знаков на неделю')
    })

    it ('TC14', () => {
        cy.get('a[href="/prediction/month/"]')
        .find('.filter__text')
        .click({multiple: true})
        cy.url().should('eq', 'https://horo.mail.ru/prediction/month/')
    })

    it ('TC15', () => {
        cy.get('a[href="/prediction/year/"]')
        .find('.filter__text')
        .click({multiple: true})
        cy.url().should('eq', 'https://horo.mail.ru/prediction/year/')
    })

})