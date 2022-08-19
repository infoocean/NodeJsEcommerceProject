//include models from  models file
const AdminUserModel = require("../Models/Adminusermodel");

//####################### define admin user controller(Module) here #######################//
//admin user registration controller
const adminuserregistration = (req, res) => {
  //console.log("admin user registration");
  //console.log(req.body);
  //res.send(req.body);
  const adminuserdata = new AdminUserModel(req.body);
  //console.log(adminuserdata);
  //save data into db 
  adminuserdata.save().then(()=>{
    res.status(201);
    res.json({ message: "data save successfully" });
  }).catch((error)=>{
    res.status(400);
    //res.json({ message: error });
    res.json({ message: error.message });
  })
};
//admin user login controller
const adminuserlogin = (req, res) => {
  console.log("adminuserlogincontroller");
};
//get admin user controller
const getadminuser = (req, res) => {
  console.log("getadminusercontroller");
};

//exports modules here
module.exports = {
  adminuserregistration,
  adminuserlogin,
  getadminuser,
};
