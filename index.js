const express = require("express");
const bodyParser = require("body-parser");
const constantRouter = require("./routers/constants.js");
const indexRouter = require("./routers/index.js");

const app = express();

app.use(bodyParser.json());

//#region Routers
app.use("/", indexRouter);
app.use("/constant", constantRouter);
//#endregion Routers

app.listen(3000, () => {
  console.log("started listening on 3000");
});
