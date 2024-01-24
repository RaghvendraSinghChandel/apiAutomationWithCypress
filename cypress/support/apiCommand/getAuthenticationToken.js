/// <reference types = "cypress"/>


 Cypress.Commands.add("authentication_token_generate",()=> {
    cy.request({
        method:"POST",
        url: "http://simple-grocery-store-api.online/api-clients",
        body:{
            "clientName": "Postman on Valentin's computer",
            "clientEmail": `valentin${Math.random()}@example.com`
         },
    }).then((generateResponse)=> {
        const token = generateResponse.body.accessToken
        expect(generateResponse.status).equal(201)
        return token
    })
 })