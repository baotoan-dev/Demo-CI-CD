// test/index.test.js
const request = require("supertest");
const { server } = require("../src/index"); // Import server

afterAll(() => {
  server.close(); // Đảm bảo đóng server sau khi test xong
});

test("GET / should return Hello, Docker CI/CD!", async () => {
  const response = await request(server).get("/");
  expect(response.text).toBe("Hello, Docker CI/CD!");
});

test("GET /health should return Server is running!", async () => {
  const response = await request(server).get("/health");
  expect(response.text).toBe("Server is running!!!");
});
