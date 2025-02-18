// src/index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Docker CI/CD!");
});

app.get("/health", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server }; // Export both app and server
