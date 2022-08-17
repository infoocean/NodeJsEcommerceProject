const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
    },
    password:{
        type :String,
        required: true,
    }
  });
  
  const AdminUserModel = mongoose.model('adminusers', AdminUserSchema);
  module.exports = AdminUserModel;