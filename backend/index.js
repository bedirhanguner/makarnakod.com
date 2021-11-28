const express = require("express");
var cors = require("cors");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.options("*", cors());

app.get("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.post("/submitCode", (req, res) => {
  let body = req.body;
  console.log(body.problemId);
  console.log(body.language);
  console.log(body.code);
  res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
