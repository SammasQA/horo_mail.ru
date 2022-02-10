describe('checking the date', () => {
    //
    beforeEach(()=>{
        cy.visit('https://horo.mail.ru/prediction/') 
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        }) 
    }) 
        it ('test TC34', () =>{
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '01').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'декабря').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('1900').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.get('body').should('contain', 'Дата рождения: 1 декабря 1900 г.').and('contain', 'Стрелец')
        })

        it ('test TC35', () =>{
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '31').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'января').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('2022').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.get('body').should('contain', 'Дата рождения: 31 января 2022 г.').and('contain', 'Козерог')
        })
      
        it ('test TC36', () =>{
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '01').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'января').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('1900').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.get('body').should('contain', 'Дата рождения: 1 января 1900 г.').and('contain', 'Козерог')
        })
        it ('test TC38', () =>{
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '01').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'декабря').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('2022').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.get('body').should('contain', 'Дата рождения: 1 декабря 2022 г.').and('contain', 'Стрелец')
        })

        it ('test TC39', () =>{
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable js-date__select"]')
            .click()
            .contains( '31').click();
            cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains( 'декабря').click();
            cy.get('div[class="dropdown dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]')
            .click()
            .contains('2022').click();
            cy.get('div[class="p-formitem__content"]')
            .find('.button__inner')
            .click({multiple: true} )
            cy.get('body').should('contain', 'Дата рождения: 31 декабря 2022 г.').and('contain', 'Козерог')
        })
    })