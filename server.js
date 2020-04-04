// import requried modules 
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 4000;
// configure the express app to serve static files and to handle data decoding 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


