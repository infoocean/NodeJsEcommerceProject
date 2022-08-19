const UserModel = require("../Models/UserModels");

//####################### define user controller(Module) here #######################
//user registration controller
const userregistration = async (req, res) => {
  try {
    const userdata = new UserModel({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      password: req.body.password,
    });
    const data = await userdata.save();
    res.status(201);
    res.json({ message: "data save successfully" });
  } catch (error) {
    res.status(400);
    res.json({ message: error });
  }
};
//login user controller
const userlogin = (req, res) => {
  console.log("getadminusercontroller");
};
//get  user controller
const getuser = (req, res) => {
  console.log("getadminusercontroller");
};
//exports modules here
module.exports = {
  userregistration,
  userlogin,
  getuser,
};
