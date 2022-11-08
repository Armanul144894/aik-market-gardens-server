const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello AIK Market Gardens");
});
app.listen(port, () => {
  console.log(`AIK Market Garden running on port: ${port}`);
});
