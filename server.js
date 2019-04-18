const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = require("./router/router");
const app = express();
const port = process.env.port || 3000;

//bind port and start server
app.listen(port, () => {
  console.log(`Server Started at port ${port}`);
});

//bind body-parser

app.use(bodyParser.json());

//connect to mongodb
mongoose.connect("mongodb://localhost/db", { useNewUrlParser: true }, () => {
  console.log("DB Connection Doen Successfully");
});
mongoose.Promise = global.Promise;

//bind the router
app.use("/router", router);
