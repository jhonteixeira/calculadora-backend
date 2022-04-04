import express from "express";
import bodyParser from "body-parser";

import calculator from "./calculator.js";

const port = process.env.PORT || 8000;

const app = express();

const jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  res.send(
    "Hello World! This is a calculator server. Make your request via POST"
  );
});

app.post("/", jsonParser, (req, res) => {
  console.log("req.body", req.body);
  const { a, b, op } = req.body;
  const result = calculator[op](a, b);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}/`);
});
