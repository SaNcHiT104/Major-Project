import mongoose from "mongoose";

const EHRSchema = new mongoose.Schema({
  // will populate the schema with useful information
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  bloodGroup: {
    type: String,
  },
  bmi: { type: String },
  height: { type: String },
  weight: { type: String },
  diagnosis: {
    type: [
      {
        date: {
          type: Date,
          // required: true,
        },
        diagnosis: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
    minlength: 1,
  },
  prescriptions: {
    type: [
      {
        date: {
          type: Date,
          //required: true,
        },
        medication: {
          type: String,
          required: true,
        },
        dosage: {
          type: String,
          required: true,
        },
        frequency: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

const EHR = mongoose.model("EHR", EHRSchema);
export default EHR;
