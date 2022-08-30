const express = require("express");
const router = express.Router();
const app = express();

//midddle weares
const uploads = require("../Middlewares/uploadmulter");

// require model
const olympicdata = require("../Models/OlympicModel");

// include admin user  controller
const {
  adminuserregistration,
  adminuserlogin,
  getadminuser,
  deletadminuserbyid,
} = require("../Controllers/AdminUserController");
// include user controoler
const {
  userregistration,
  userlogin,
  getuser,
  getuserbyid,
  deleteuserbyid,
  updateuserbyid,
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
  getpremiumuserbymultipleid,
} = require("../Controllers/PremiumUserController");

//olympic data controller
const {
  addolympicdatacontroller,
  updateolympicdatacontroller,
} = require("../Controllers/Olympicdatacontroller");

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
router.delete("/deleteadminuserbyid/:admin_user_id", deletadminuserbyid);

//define the  user Registration routes
router.post("/userregistration", uploads.single("image"), userregistration);
//define the  user ligin routes
router.post("/userlogin", userlogin);
//get   user routes
router.get("/getuser", getuser);
//get   user by id  routes
router.get("/getuserbyid/:id", getuserbyid);
//delete  user by id  routes
router.delete("/deleteuserbyid/:id", deleteuserbyid);
//update  user by id  routes
router.patch("/updateuser/:id", uploads.single("image"), updateuserbyid);

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
//delete Premium  user by id routes
router.get("/multiplepremiumuser/:id", getpremiumuserbymultipleid);

//olympics data api
router.post("/olympicdata", addolympicdatacontroller);
router.get("/olympicdata", async (req, res) => {
  //console.log("getdata");
  try {
    const data = await olympicdata.find().sort({ ranking: 1 });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/olympicdata/:id", async (req, res) => {
  //console.log("getdata");
  try {
    _id = req.params.id;
    const data = await olympicdata.findById(_id);
    if (data != null) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
router.patch("/olympicdata/:id", updateolympicdatacontroller);
router.delete("/olympicdata/:id", (req, res) => {
  const _id = req.params.id;
  olympicdata
    .findByIdAndDelete({ _id: _id })
    .then(() => {
      res.status(200);
      res.json({ message: "data deleted successfully" });
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

//export router
module.exports = router;
