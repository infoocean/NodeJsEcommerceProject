const express = require("express");
const path  = require('path');
const app = express();
app.use(express.json());

//server info...
const hostname = "127.0.0.1";
//const port     = 5000;
const port = process.env.PORT || 5000;

//include database connection file
const Createdbconnection = require("./DB/Db.config.js");
Createdbconnection();


//load static page
const static_path  = path.join(__dirname + "/public");
app.use(express.static(static_path));


//include routes file
const router = require("./Routes/Routes.js");
//app.use(router);
app.use("/", router);

//create server and start
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
