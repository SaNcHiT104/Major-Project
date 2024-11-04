import chalk from "chalk";
import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
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
  contactInfo: { type: String },
  // assuming only 1 appoitment can be booked for a patient in a day
  // need to configure the date, or atleast make sure user sees a human readable date
  date: { type: Date, required: true, unique: true },
  description: { type: String, required: true, maxlength: 180, trim: true },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Doctor",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Patient", // estabilishses a relationship between these two models
  },
  status: { type: Boolean, default: false, required: true },
});

// check user credentials using compare method of bcrypt
appointmentSchema.statics.findByCredentials = async (owner, date) => {
  const user = await Appointment.findOne({ owner, date });
  if (!user) {
    return null;
  }
  return user;
};

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
