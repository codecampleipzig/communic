const express = require("express");

const app = express();
const appFolder = __dirname + "/dist/communic";

app.get("*.*", express.static(appFolder));

app.all("*", (req, res) => {
  res.status(200).sendFile("/", { root: appFolder });
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(
  `Communic Frontend Server is listening on http://localhost:${port}`
);
