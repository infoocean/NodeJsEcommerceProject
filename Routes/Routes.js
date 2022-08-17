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
router.post("/userregistration", async(req, res) => {
    //console.log(req.body);
    //res.send(req.body);
    const adminuserdata = new AdminUserModel({
        name: req.body.name,
        email: req.body.email,
        number:req.body.number,
        password:req.body.password
    });
    //console.log(adminuserdata);
    try {
        const dataToSave = await adminuserdata.save();
        res.status(200);
        //res.json(dataToSave);
        res.json({ message: "data save successfully" });
    } catch (error) {
        res.status(400);
        res.json({ message: error.message });
    }
});

//export router
module.exports = router;