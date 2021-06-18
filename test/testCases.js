

const chai = require ('chai');
const chaiHttp = require ('chai-http');
const path = require ('path');
const server = require (path.resolve (__dirname, '..', 'app.js'));


// Assertion Style that we are going to use

const expect = chai.expect;
chai.use (chaiHttp);

// describing the Test API Testing
describe ('API Testing', () => {

    // GET /api endpoint Test
    describe ('GET /api', () => {

        // First Test Case for GET /api endpoint
        it ('It should return the welcome message', (done) => {

            chai.request (server)
            .get ('/api')
            .end ((err, res) => {
                
                expect (err).to.be.null
                expect (res).to.have.status (200)
                expect (res.body).to.be.a ('object')
                expect (res.body).to.have.property ('message')

                // completed the test case
                done ()


            })

        })

    })

})