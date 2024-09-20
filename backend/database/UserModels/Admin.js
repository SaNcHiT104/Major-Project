import chalk from "chalk";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const adminSchema = new mongoose.Schema({
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
});

// check user credentials using compare method of bcrypt
adminSchema.statics.findByCredentials = async (email, password) => {
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

// hash the user password before saving
adminSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  // need to call next for the user to be saved, or it will run forever
  next();
});

const User = mongoose.model("Admin", adminSchema);
export default User;
