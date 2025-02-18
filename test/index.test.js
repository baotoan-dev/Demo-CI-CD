const request = require("supertest");
const app = require("../src/index");

test("GET / should return 'Hello, Docker CI/CD!'", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello, Docker CI/CD!");
});

afterAll(() => {
  app.close();
});
