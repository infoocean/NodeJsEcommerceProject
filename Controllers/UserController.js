const UserModel = require("../Models/UserModels");

//####################### define user controller(Module) here #######################
//user registration controller
const userregistration = async (req, res) => {
  console.log(req.body, req.file);
  try {
    if (!req.file) {
      return res.status(409).send({ message: "image required" });
    }
    const userdata = new UserModel({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      password: req.body.password,
      image: req.file.filename,
    });
    const data = await userdata.save();
    res.status(201);
    res.json({ message: "data save successfully" });
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
};
//login user controller
const userlogin = (req, res) => {
  console.log("loginuser");
};
//get  user controller
const getuser = async (req, res) => {
  //console.log("get admin user data");
  try {
    const usersdata = await UserModel.find();
    if (usersdata != "") {
      res.status(200);
      res.send(usersdata);
      //res.json(userdata);
    } else {
      res.status(204);
      //res.status(500);
      res.send({ message: "data not found" });
    }
  } catch (err) {
    res.status(400);
    res.send(err);
    //res.json(err);
    //res.json({err:err.message});
  }
};

//get  user controller
const getuserbyid = async (req, res) => {
  //console.log(req.params);
  //console.log(req.params.id);
  try {
    const userdata = await UserModel.findById(req.params.id);
    //console.log(userdata);
    if (userdata != null) {
      res.status(200);
      res.send(userdata);
      //res.json(userdata);
    } else {
      //res.status(204);
      res.status(500);
      res.send({ message: "data not found" });
    }
  } catch (err) {
    res.status(500);
    res.send(err);
    //res.json(err);
    //res.json({err:err.message});
  }
};

//delete user by id controller
const deleteuserbyid = async (req, res) => {
  const id = req.params.id;
  //console.log(id);
  try {
    const deleteuserdata = await UserModel.findByIdAndDelete(id);
    //console.log(deleteuserdata);
    res
      .status(200)
      .send({ message: `user  ${deleteuserdata.name} has been deleted..` });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//update user by id controller
const updateuserbyid = async (req, res) => {
  const id = req.params.id;
  //console.log(req.body);
  //console.log(req.file);
  //console.log(req.body,req.file);
  const updateddata = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password,
    image: req.file.filename,
  };
  //console.log(updateddata);

  try {
    const updatedata = await UserModel.findByIdAndUpdate(
      { _id: id },
      updateddata,
      { new: true }
    );
    console.log(updatedata);
    res.status(200).send({ message: "user has been updated.." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//exports modules here
module.exports = {
  userregistration,
  userlogin,
  getuser,
  getuserbyid,
  deleteuserbyid,
  updateuserbyid,
};
