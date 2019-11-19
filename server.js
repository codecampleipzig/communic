const express = require("express");

const app = express();

app.use(express.static(__dirname + "/dist/communic"));

const port = process.env.PORT || 8080;
app.listen(port);
console.log(
  `Communic Frontend Server is listening on http://localhost:${port}`
);
