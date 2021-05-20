//Step 1a initialize express by bringing in require express
const express = require("express");
//step 2a bringing in morgan
const logger = require("morgan");
//Step 1b initialize express app
const app = express();

const indexRouter = require("./routes/indexRouter")
const todoRouter = require("./routes/todoRouter")



//step 2b use logger
app.use(logger("dev"));
//use express json
app.use(express.json());

app.set("view engine", "ejs");



// app.get("/", function (req, res){
//     console.log("it worked")
// })


//Step 1c start express server
app.listen(3000, function () {
  console.log("Server started in port 3000");
});