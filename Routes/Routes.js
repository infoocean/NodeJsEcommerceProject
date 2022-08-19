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
  getuserbyid,
} = require("../Controllers/UserController");

//include Premium user Controller
const {
  premiumuserregistration,
  premiumuserlogin,
  getpremiumuser,
  deletepremiumuser,
  updatepremiumuser,
  deletepremiumuserbyid,
  getpremiumuserbyid,
} = require("../Controllers/PremiumUserController");

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
//get   user by id  routes
router.get("/getuserbyid/:id", getuserbyid);

// ***************** define premium user routes *****************//
//define the premium  user Registration routes
router.post("/premiumuser", premiumuserregistration);
//define the  premium user ligin routes
router.post("/premiumuser", premiumuserlogin);
//get premium  user routes
router.get("/premiumuser", getpremiumuser);
//get Premium  user by id routes
router.get("/premiumuser/:id", getpremiumuserbyid);
//define the delete premium user  routes
router.delete("/premiumuser", deletepremiumuser);
//update premium  user by id routes
router.patch("/premiumuser/:id", updatepremiumuser);
//delete Premium  user by id routes
router.delete("/premiumuser/:id", deletepremiumuserbyid);

//export router
module.exports = router;
