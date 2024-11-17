import express from "express";
import Patient from "../database/UserModels/Patient.js";
import checkAuthMiddleware from "../middlewares/auth.js";
import Doctor from "../database/UserModels/Doctor.js";

const patientRouter = new express.Router();

patientRouter.get(
  "/patient/me/profile",
  checkAuthMiddleware(["PATIENT"]),
  async (req, res) => {
    // first check credentials: TODO
    const userId = req.user._id;
    // console.log(userId);
    try {
      const user = await Patient.findById({ _id: userId });
      if (!user) {
        return res.status(404).send("USER NOT FOUND! STATUS CODE 404!");
      }
      res.status(200).send(user);
    } catch (error) {
      return res.status(400).send(error);
    }
    // The profile data sent by the user must be updated in the database
  }
);

patientRouter.patch(
  "/patient/me/profile",
  checkAuthMiddleware(["PATIENT"]),
  async (req, res) => {
    // first check credentials: TODO
    const userId = req.user._id;
    // console.log(userId);
    try {
      // we can optimise this by making sure that we don't fetch the user again and just update req.user,
      // but we will leave this now as it is.
      const user = await Patient.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true,
      });
      // console.log("FROM PATCH " + user)
      res.send(user);
    } catch (error) {
      return res.status(400).send(error);
    }
    // The profile data sent by the user must be updated in the database
  }
);

// fetch all doctors based on filters
// TODO: Limit the number of results sent back - ADD PAGINATION
patientRouter.get(
  "/patient/me/doctor_list",
  checkAuthMiddleware(["PATIENT"]),
  async (req, res) => {
    const queries = {};
    try {
      if (req.query.doctorId) {
        queries._id = req.query.doctorId;
      }
      if (req.query.specialty) {
        // For major project!
        const specialtyRegex = new RegExp(req.query.specialty, "i"); // Case-insensitive search
        queries.specialty = specialtyRegex;
      }
      if (req.query.rating) {
        const rating = parseInt(req.query.rating);
        queries.totalRating = { $gte: rating };
      }
      // City filtering using regular expression for flexibility
      if (req.query.cityName) {
        const cityRegex = new RegExp(req.query.cityName, "i"); // Case-insensitive search
        queries.officeAddress = { $regex: cityRegex };
      }
      const doctors = await Doctor.find(queries);
      return res
        .status(200)
        .json({ message: `Results Found: ${doctors.length}`, doctors });
    } catch (error) {
      console.error("Error occured!", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

// update the rating of the doctor after user gives rating after the appointment
patientRouter.patch(
  "/patient/me/appointments/:id/rate",
  checkAuthMiddleware(["PATIENT"]),
  async (req, res) => {
    // Will receive the doctorId, which is stored in the frontend in the doctor field as we populated that
    const doctorId = req.params.id;
    try {
      const newRating = parseInt(req.body.rating);
      // if newRating is empty, return an error
      if (!newRating || newRating > 5 || newRating <= 0) {
        return res
          .status(400)
          .json({ error: "BAD REQUEST. INVALID RATIING! " });
      }
      // find the appointment with this rating, update the totalRating and ratingCount
      let doctor = await Doctor.findById(doctorId);
      /* I can then find the doctor and fetch him, update his rating and save him */
      // Calculate new total rating and rating count
      const newTotalRating =
        doctor.totalRating * doctor.ratingCount + newRating;
      const newRatingCount = doctor.ratingCount + 1;

      // Calculate new average rating with 2 decimal places
      const newAverageRating = (newTotalRating / newRatingCount).toFixed(2);
      // Update the doctor document
      doctor = await Doctor.findByIdAndUpdate(doctorId, {
        totalRating: newAverageRating,
        ratingCount: newRatingCount,
      });
      res
        .status(200)
        .json({ message: "Doctor rated successfully!", doctor: doctor });
    } catch (error) {
      console.error("Error occured!", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default patientRouter;
