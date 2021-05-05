/// <reference types="Cypress" />

describe('click the correct button', () => {
    it('should be able to click the correct button', () => {
        cy.visit('https://sandeepthukral.github.io/cypress-custom-commands-samples/table-with-buttons.html');
        cy.get('div.border').should('be.visible');
        
        // we need to click the button that is next to 'Custom Report 2'
        const newTestFilterName = 'Custom Report 2';
        let buttonIndex;
        cy.get('li a').each((element, index) => {
            cy.wrap(element).invoke('text').then(text => {
                if(text===newTestFilterName) buttonIndex=index
            });
        }).then(() => {
            cy.get('li button').eq(buttonIndex).click();
        });

        cy.then(() => {
            cy.get('div.center').should('contain.text', 'Clicked 2');
        })
    })
})
