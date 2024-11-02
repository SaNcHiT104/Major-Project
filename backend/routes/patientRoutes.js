import express from "express";
import Patient from "../database/UserModels/Patient.js";
import checkAuthMiddleware from "../middlewares/auth.js";

const patientRouter = new express.Router();

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

export default patientRouter;
