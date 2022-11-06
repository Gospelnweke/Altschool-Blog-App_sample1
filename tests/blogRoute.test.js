const express = require("express");
const request = require("supertest");
const blogRouter = require("../routes/blogRoute");
const app = express();

app.use(express.json());
app.use("/blogs", blogRouter);

//title author id

describe("Integration tests for the blogs API", () => {
  it("GET /blogs/getblogs - success -  get all blogs ", async () => {
    const { body, statusCode } = await request(app).get("/blogs/getblogs");

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          title: expect.any(String),
          author: expect.any(String),
        }),
      ])
    );

    expect(statusCode).toBe(200);
  }, 500_000);

  //get one blog test
  it("GET /blogs/getoneblog - success -  get one blog ", async () => {
    const { body, statusCode } = await request(app)
      .get("/blogs/getoneblog")
      .send({
        id: "userid",
      });

    expect(body).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      author: expect.any(String),
    });

    expect(statusCode).toBe(200);
  }, 500_000);
});
