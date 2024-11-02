import express from "express";
import Appointment from "../database/AppointmentModel/Appointment.js";
import checkAuthMiddleware from "../middlewares/auth.js";

const appointmentRouter = new express.Router();

// will create a new appointment for patient
appointmentRouter.post(
  "/patient/me/appointment",
  checkAuthMiddleware(["PATIENT"]),
  async (req, res) => {
    /* As the middleware ran without error throwing, we have the patient user! 
    The request body will also have the doctor's id so we can store that also! */
    try {
      const appointment = new Appointment({
        ...req.body,
        owner: req.user._id,
      });

      // save user
      try {
        await appointment.save();
        return res
          .status(201)
          .json({ message: "Appointment successfully created!", appointment });
      } catch (error) {
        console.log("Error!", error);
        return res.status(403).send(error);
      }
    } catch (error) {
      console.error("Error! Appointment could not be created:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

// will fetch all appointments and send to the frontend for displaying in appointments section for patient
appointmentRouter.get(
  "/patient/me/appointments",
  checkAuthMiddleware(["PATIENT"]),
  async (req, res) => {
    try {
      const ownerId = req.user._id;
      // fetch all appointments of this user with this ownerId
      // as this user exists, checked in middleware, this request will not fail, it can though return null
      const appointments = await Appointment.find({ owner: ownerId });
      return res.status(200).json({
        message: `Appointments found: ${appointments.length}`,
        appointments,
      });
    } catch (error) {
      console.error("Error occured!", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

// will fetch all appointments and send to the frontend for displaying in appointments section for doctor
appointmentRouter.get(
  "/doctor/me/appointments",
  checkAuthMiddleware(["DOCTOR"]),
  async (req, res) => {
    try {
      const doctorId = req.user._id;
      // fetch all appointments of this user with this doctorId
      // as this user exists, checked in middleware, this request will not fail, it can though return null
      const appointments = await Appointment.find({ doctorId: doctorId });
      return res.status(200).json({
        message: `Appointments found: ${appointments.length}`,
        appointments,
      });
    } catch (error) {
      console.error("Error occured!", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

// allow the doctor to mark the appointment as complete
appointmentRouter.patch(
  "/doctor/me/appointment",
  checkAuthMiddleware(["DOCTOR"]),
  async (req, res) => {
    try {
      // the req body will also have the appointment id
      const doctorId = req.user._id;
      const updatedAppointment = await Appointment.findOneAndUpdate(
        { _id: req.body.aptId, doctorId: doctorId },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (updatedAppointment.length === 0) {
        return res
          .status(404)
          .json({ message: "Appointment not found or illegal access!" });
      }
      res.status(200).send(updatedAppointment);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default appointmentRouter;
