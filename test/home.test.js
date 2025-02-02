const request = require("supertest");
const app = require("../modules/express.js");

describe("GET /home", () => {
  it("1. should return HTML content with status 200", async () => {
    const response = await request(app)
      .get("/home")
      .expect("Content-Type", /html/)
      .expect(200);

    expect(response.text).toContain("<h1> Helo word </h1>");
  });

  it("2. should have correct content type", async () => {
    const response = await request(app).get("/home");

    expect(response.headers["content-type"]).toMatch("text/html");
  });

  it("3. should return the exact HTML content", async () => {
    const response = await request(app).get("/home");

    expect(response.text).toBe("<h1> Helo word </h1>");
  });
});
