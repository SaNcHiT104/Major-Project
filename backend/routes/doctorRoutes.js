import express from "express";
import Doctor from "../database/UserModels/Doctor.js";
import checkAuthMiddleware from "../middlewares/auth.js";

const doctorRouter = new express.Router();

doctorRouter.patch(
  "/doctor/me/profile",
  checkAuthMiddleware(["DOCTOR"]),
  async (req, res) => {
    // first check credentials: TODO
    const userId = req.user._id;
    // console.log(userId);
    try {
      const user = await Doctor.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send(user);
    } catch (error) {
      return res.status(400).send(error);
    }
    // The profile data sent by the user must be updated in the database
  }
);

export default doctorRouter;
