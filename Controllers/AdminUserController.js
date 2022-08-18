//include models from  models file
const AdminUserModel = require("../Models/Adminusermodel");

//####################### define admin user controller(Module) here #######################//
//admin user registration controller
const adminuserregistration = async (req, res) => {
  //console.log("adminuserregistration");
  //console.log(req.body);
  //res.send(req.body);
  const adminuserdata = new AdminUserModel({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password,
  });
  //console.log(adminuserdata);
  try {
    const dataSave = await adminuserdata.save();
    //console.log(dataSave);
    //res.json(dataSave);
    res.status(200);
    res.json({ message: "data save successfully" });
  } catch (error) {
    res.status(400);
    //res.json({ message: error });
    res.json({ message: error.message });
  }
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
