const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("It should response the GET method", done => {
        request(app)
            .get("/real")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("It should response the GET method", done => {
        request(app)
            .get("/real/insert")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })
    });

    test("It should response the GET method", done => {
        request(app)
            .get("/real/students")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("It should response the GET method", done => {
        request(app)
            .get("/real/students?house=gryffindor")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("It should response the GET method", done => {
        request(app)
            .get("/real/randomstudent")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});