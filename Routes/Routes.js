const express = require('express');
const router  = express.Router();
//include models file
const AdminUserModel  = require('../Models/UserModels.js');

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

//define the user routes
router.post("/userregistration", (req, res) => {
    //res.send("userregistration");
    console.log(req.body);
    res.send(req.body);
});



//export router
module.exports = router;