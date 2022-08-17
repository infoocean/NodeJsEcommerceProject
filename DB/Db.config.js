const mongoose = require("mongoose");

//database info
const username = "shubhamjaiswal";
const password = "XJCRbS1TCYWuTOFZ";
const dbname = "ecommercedatabase";

const DATABASEURL = `mongodb+srv://${username}:${password}@cluster0.08polbo.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const Createdbconnection = () => {
  mongoose
    .connect(DATABASEURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("databse connction successfully");
    })
    .catch((err) => {
      console.log("database connection unsuccessfull");
      console.log(err);
    });
};

module.exports = Createdbconnection;
