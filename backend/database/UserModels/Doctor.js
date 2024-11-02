import chalk from "chalk";
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { createJSONToken } from "../../AuthManager/auth.js";
/* We have set up our token as a single unit only, assuming usercan login from one device only. 
If there are multiple devices, we can use an array of tokens to store them! This was causing issue
as "tokens.token" was not being accessed correctly so I removed it */

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(
          chalk.redBright.inverse("Please check you enter a valid email!")
        );
      }
    },
  },
  name: { type: String },
  age: { type: Number, min: 21 },
  gender: { type: String },
  specialty: { type: String },
  officeContactInfo: { type: String },
  officeAddress: { type: String, trim: true },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 8,
    validate(value) {
      if (value.toLowerCase().includes("password"))
        throw new Error(
          chalk.redBright.inverse("Password contains the word password!")
        );
    },
  },
  tokens: {
    token: {
      type: String,
    },
    default: {},
  },
});

// method to send the data we want to send, removing password and tokens from the object
// the toJSON function converts the object we sent back to a json object, allowing us to manipulate it before
doctorSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// method for generating auth Tokens
doctorSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = createJSONToken({
    _id: user._id.toString(),
    userType: "DOCTOR",
  });
  // we are also going to store the token in the database, and overwrite it if one already exists
  user.tokens = { token };
  await user.save();
  return token;
};

// check user credentials using compare method of bcrypt
doctorSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  // console.log("FROM FN: " + user);

  if (!user) {
    return null;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  // console.log("IS MATCHED?" + isMatch);
  if (!isMatch) {
    return null;
  }
  return user;
};
// hash the user password before saving
doctorSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
const User = mongoose.model("Doctor", doctorSchema);
export default User;
