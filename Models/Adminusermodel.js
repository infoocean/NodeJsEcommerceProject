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