
const express = require("express");
const signupRoute = require("./routes/studentRoute");
const query = require('./models/studentModel');
const app = express();


app.use("/", signupRoute);
app.listen(8000, function () {
    console.log("server started");
})

