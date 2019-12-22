const express = require("express");
const app = express();

const appFolder = __dirname + "/dist/communic";

app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

app.get("*.*", express.static(appFolder));

app.all("*", (req, res) => {
  res.status(200).sendFile("/", { root: appFolder });
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`Communic Frontend Server is listening on Port ${port}`);
