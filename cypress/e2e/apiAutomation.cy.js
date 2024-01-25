/// <reference types = "cypress"/>

describe("test rest api",()=> {
    it("generate token",()=> {
        cy.authentication_token_generate().then((token)=> {
            console.log(token)
        })
    })

    it("validate get api with their status",()=> {
        cy.trigger_api_request("GET","/status").then((response)=> {
            const status = response.body.status
            expect(status).eql("UP")
            
        })
    })

    /**
     * This block validate get api to get all the product
     */
    it("validate get api with their first product id, category and also count of total number of product",()=> {
        cy.trigger_api_request("GET","/products").then((response)=> {
            const responseStatus = response.status
            const responseFirstProductId = response.body[0].id
            const responseFirstProductCategory = response.body[0].category
            expect(responseStatus).equal(200)
            expect(responseFirstProductId).equal(4643)
            expect(responseFirstProductCategory).equal("coffee")
            expect(response.body.length).eql(20)
        })
    })

    /**
     * This block validate product through product id
     */
    it("validate product through product id and validate only one product of specific id should be displayed ",()=> {
        const productId =  4643
        cy.trigger_api_request("GET",`/products/${productId}` ).then((response)=> {
            const responseStatus = response.status
            const responseFirstProductId = response.body.id
            const responseFirstProductCategory = response.body.category
            expect(responseStatus).equal(200)
            expect(responseFirstProductId).equal(productId)
            expect(responseFirstProductCategory).equal("coffee")
            const responseBody = Array(response.body)
            expect(responseBody.length).eql(1)
        })

    })
})
