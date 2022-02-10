describe('checking the date', () => {
    //
    beforeEach(()=>{
        cy.visit('https://horo.mail.ru/prediction/') 
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        }) 
    }) 
        it ('test TC16', () =>{
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '02').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'февраля').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('1986').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.get('body').should('contain', 'Дата рождения: 2 февраля 1986 г.')
        })
        it ('TC16', () => {
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '02').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'февраля').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('1986').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.contains('Вчера').click()
            cy.get('body').should('contain', 'Гороскоп на вчера: Водолей')
        })
        it ('TC18', () => {
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '02').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'февраля').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('1986').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.contains('Завтра').click()
            cy.get('body').should('contain', 'Гороскоп на завтра: Водолей')
        })
        it ('TC19', () => {
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '02').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'февраля').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('1986').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.contains('Неделя').click()
            cy.get('body').should('contain', 'Водолей: гороскоп на неделю')
        })
        it ('TC20', () => {
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '02').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'февраля').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('1986').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.contains('Месяц').click()
            cy.get('body').should('contain', 'Гороскоп на месяц:')
        })
        it ('TC21', () => {
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '02').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'февраля').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('1986').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.get('a[href="/prediction/aquarius/year/"]')
            .find('.filter__text')
            .click({multiple: true})
            cy.url().should('eq', 'https://horo.mail.ru/prediction/aquarius/year/')
            //cy.get('body').should('contain', 'Гороскоп на месяц:')
        })
    })
    