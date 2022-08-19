const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const PremiumUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email allready exists"],
  },
  number: {
    type: Number,
    required: true,
    unique: true,
    min: 10,
    //max: 10,
  },
  password: {
    type: String,
    required: true,
  },
});
const PremiumUserModel = mongoose.model("premiumusers", PremiumUserSchema);
module.exports = PremiumUserModel;
