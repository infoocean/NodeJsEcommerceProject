const express = require("express");
const router = express.Router();
// include admin user  controller
const {
  adminuserregistration,
  adminuserlogin,
  getadminuser,
} = require("../Controllers/AdminUserController");
// include user controoler
const {
  userregistration,
  userlogin,
  getuser,
} = require("../Controllers/UserController");

//####################  define all Routes here #########################//

//define the Home page routes
router.get("/", (req, res) => {
  res.send("home");
});

//define the Home page routes
router.get("/home", (req, res) => {
  res.send("home");
});

//define the About page routes
router.get("/about", (req, res) => {
  res.send("about");
});

//define the Contact page routes
router.get("/contact", (req, res) => {
  res.send("contact");
});

//define the admin user Registration routes
router.post("/adminuserregistration", adminuserregistration);
//define the admin user Registration routes
router.post("/adminuserlogin", adminuserlogin);
//get  admin user routes
router.get("/getadminuser", getadminuser);
//define the  user Registration routes
router.post("/userregistration", userregistration);
//define the  user ligin routes
router.post("/userlogin", userlogin);
//get   user routes
router.get("/getuser", getuser);

//export router
module.exports = router;
