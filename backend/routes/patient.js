import express from "express";
import Patient from "../database/UserModels/Patient.js";
const patientRouter = new express.Router()

patientRouter.patch("/patient/:id/profile", async (req, res) => {
    // first check credentials: TODO
    const userId = req.params.id;
    console.log(userId);
    try {
      const user = await Patient.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (error) {
      return res.status(400).send(error);
    }
    // The profile data sent by the user must be updated in the database
  });
  

export default patientRouter;