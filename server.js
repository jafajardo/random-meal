const express = require("express");

const app = express();

app.use(express.json());
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/", express.static(__dirname + "/public"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
});
