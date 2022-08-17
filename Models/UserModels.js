const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//admin user schema(feild/columnname)
const AdminUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const AdminUserModel = mongoose.model("adminusers", AdminUserSchema);
module.exports = AdminUserModel;

//user schema
const UserSchema = new Schema({
  name: String,
  email: String,
  number: Number,
  password: String,
});
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
