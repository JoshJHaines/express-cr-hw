//Step 1a initialize express by bringing in require express
const express = require("express");
//step 2a bringing in morgan
const logger = require("morgan");
//Step 1b initialize express app
const app = express();
//step 2b use logger
app.use(logger("dev"));
//Step 1c start express server
app.listen(3000, function () {
  console.log("Server started in port 3000");
});