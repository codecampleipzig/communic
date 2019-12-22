const express = require("express");
const app = express();

const appFolder = __dirname + "/dist/communic";
const { redirectToHTTPS } = require("express-http-to-https");

app.use(redirectToHTTPS([/localhost:8080/]));

app.get("*.*", express.static(appFolder));

app.all("*", (req, res) => {
  res.status(200).sendFile("/", { root: appFolder });
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`Communic Frontend Server is listening on Port ${port}`);
