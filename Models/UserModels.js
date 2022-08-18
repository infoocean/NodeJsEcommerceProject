const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const UserSchema = new Schema({
  name: {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  number: {
    type:Number,
    required:true
  },
  password: {
    type:String,
    required:true
  }
});
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;



