var accountCreatedMessage = "Thank you for registering with Main Website Store.";


class LoginAndCreateAccount {
    generateUserData(){
        cy.request('https://randomuser.me/api/')
        .then((body) => {
            const fileContent = JSON.stringify(body)
            console.log('body ' + fileContent)
            cy.writeFile('cypress/fixtures/userData.json', fileContent)
        })

    }

    creatAnAccount() {
        this.generateUserData();
        
        cy.readFile('cypress/fixtures/userData.json').then(userData => {
            cy.get('[id="firstname"]')
            .type(userData.body.results[0].name.first);

            cy.get('[id="lastname"]')
            .type(userData.body.results[0].name.last); 

            cy.get('[id="email_address"]')
            .type(userData.body.results[0].email); 

            cy.get('#password')
            .type(userData.body.results[0].login.password+userData.body.results[0].name.first+'#'); 

            cy.get('[id="password-confirmation"]')
            .type(userData.body.results[0].login.password+userData.body.results[0].name.first+'#');
            
            cy.get('[class="action submit primary"]')
            .click();


        })

        

    }

    verifyAccountIsCreated() {
        cy.get('.message-success > div')
        .should('contain',accountCreatedMessage)     
    
    }
        



}

export default new LoginAndCreateAccount();