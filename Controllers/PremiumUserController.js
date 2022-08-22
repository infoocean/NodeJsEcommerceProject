const PremiumUserModel = require("../Models/PremiumuserModel");

//####################### define premium user controller(Module) here #######################//
//premium user registration controller
const premiumuserregistration = async (req, res) => {
  //res.send(req.body);
  //console.log(req.body);
  const premiumuserdata = new PremiumUserModel({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password,
  });
  //console.log(premiumuserdata);
  try {
    await premiumuserdata.save();
    res.status(201);
    res.json({ message: "data save successfully" });
  } catch (error) {
    res.status(400);
    res.send({ message: error.message });
  }
};

//premium  user login controller
const premiumuserlogin = async (req, res) => {
  console.log("premiumuserregistration");
};

//get premium  user controller
const getpremiumuser = async (req, res) => {
  //console.log(req.path);
  const path = req.path;
  const method = req.method;
  //console.log(path+method);
  try {
    if (path === "/premiumuser" && method === "GET") {
      const data = await PremiumUserModel.find();
      //console.log(data);
      if (data != "") {
        res.status(200);
        res.json(data);
      } else {
        res.status(204);
        res.json({ message: "data not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//get premium  user controller by id
const getpremiumuserbyid = async (req, res) => {
  try {
    const data = await PremiumUserModel.findById(req.params.id);
    //console.log(data);
    if (data !== null) {
      res.status(200);
      res.json(data);
    } else {
      res.status(204); // no content
      //res.status(500); // internal server error
      res.json({ message: "data not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//delete premium  user controller
const deletepremiumuser = async (req, res) => {
  //console.log("delete premium user ");
  try {
    const data = await PremiumUserModel.deleteMany();
    //console.log(data);
    res.status(200).send({ message: `users deleted successsfully..` });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//update premium  user by id  controller
const updatepremiumuser = async (req, res) => {
  //console.log("updatepremiumuser");
  try {
    id = req.params.id;
    data = req.body;
    const updatedata = await PremiumUserModel.findOneAndUpdate(id, data, {
      new: true,
    });
    //res.json(updatedata);
    res.status(200).send({ message: "data updated successfully" });
  } catch (err) {
    res.status(404);
    res.send(err);
  }
};

//delete premium user by id controller
const deletepremiumuserbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await PremiumUserModel.findByIdAndDelete(id);
    res.status(200).send({ message: `user  ${data.name} has been deleted..` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//exports modules here
module.exports = {
  premiumuserregistration,
  premiumuserlogin,
  getpremiumuser,
  deletepremiumuser,
  updatepremiumuser,
  deletepremiumuserbyid,
  getpremiumuserbyid,
};
