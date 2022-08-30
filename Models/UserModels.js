const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image:{
    type:String,
  }
});
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
