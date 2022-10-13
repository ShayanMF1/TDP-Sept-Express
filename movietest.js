const chai = require("chai");

const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index");

const { movieModel } = require("../db");

describe("movie tests", () => {
    let testMovie;

    beforeEach(async () => {
        try {
            await movieModel.deleteMany({});
            testMovie = await movieModel.create({
                name: "Batman",
                genre: "SuperHero"
            });
            testMovie = JSON.parse(JSON.stringify(testMovie));
        } catch (err) {
            console.error(err)
        }
    })

    it("should create a Movie", (done) => {
        const newMovie = {
            "name": "Man of Steel",
            "genre": "SuperHero"
        }
        chai.request(server).post("/movies/createMovie").send(newMovie).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newMovie);
            done();
        })
    });

    it("should get a Movie", (done) => {
        chai.request(server).get("/movies/getMovie/" + testMovie._id).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(testMovie);
            done();
        })
    });

    it("should get all Movies", (done) => {
        chai.request(server).get("/movies/getAllMovies/").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(testMovie);
        })
    });
})