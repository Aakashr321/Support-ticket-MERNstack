const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 85000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support desk API" });
});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
