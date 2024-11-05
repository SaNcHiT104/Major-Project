import chalk from "chalk";
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { createJSONToken } from "../../AuthManager/auth.js";

const patientSchema = new mongoose.Schema({
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
  name: { type: String, trim: true },
  age: { type: Number, min: 0, default: 0 },
  gender: { type: String },
  contactInfo: { type: String },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 8,
    validate(value) {
      if (value.trim().toLowerCase().includes("password"))
        throw new Error(
          chalk.redBright.inverse("Password contains the word password!")
        );
    },
  },
  address: { type: String, trim: true },
  allergies: { type: String },
  DOB: { type: Date },
  tokens: {
    token: {
      type: String,
    },
    default: {},
  },
});

// hash the user password before saving
patientSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// method to send the data we want to send, removing password and tokens from the object
patientSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// method for generating auth Tokens
patientSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = createJSONToken({
    _id: user._id.toString(),
    userType: "PATIENT",
  });
  // we are also going to store the token in the database, and overwrite it if one already exists
  user.tokens = { token };
  await user.save();
  return token;
};

// check user credentials using compare method of bcrypt
patientSchema.statics.findByCredentials = async (email, password) => {
  const user = await Patient.findOne({ email });

  if (!user) {
    return null;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return null;
  }
  return user;
};

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
