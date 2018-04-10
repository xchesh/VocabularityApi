const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const api = require("./api");

const app = express();
app.use(bodyParser.json());

app.use(morgan("combined"));

app.use("/api", api);

module.exports.start = (port = 3000) => {
  app.listen(port, () => console.log("Server listening on port 3000"));
};
