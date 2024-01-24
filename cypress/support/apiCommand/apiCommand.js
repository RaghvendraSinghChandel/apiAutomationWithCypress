/// <reference types = "cypress"/>

/**
 * This command is used for create api request 
 */
Cypress.Commands.add("trigger_api_request",(requestType,url,queryParam = {},body = null)=> {
    cy.authentication_token_generate("/api-clients").then((token)=> {
        cy.request({
            method: requestType,
            url: url,
            qs: queryParam, 
            headers: {
              accessToken: token
            },
            body: body
          })

    })
    
})