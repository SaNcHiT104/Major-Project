import chalk from "chalk";
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

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
      if (value.toLowerCase().includes("password"))
        throw new Error(
          chalk.redBright.inverse("Password contains the word password!")
        );
    },
  },
  address: { type: String, trim: true },
});
// hash the user password before saving
patientSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// check user credentials using compare method of bcrypt
patientSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return null;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return null;
  }
  return user;
};

const User = mongoose.model("Patient", patientSchema);
export default User;