import express from "express";
import chalk from "chalk";
import EHR from "../database/EHR_Model/EHR.js";
import checkAuthMiddleware from "../middlewares/auth.js";

const ehrRouter = new express.Router();

ehrRouter.get(
  "/healthhub/getEHR",
  checkAuthMiddleware(["PATIENT", "DOCTOR"]),
  async (req, res) => {
    try {
      const patientId = req.query.patientId;
      if (!patientId) {
        return res.status(400).json({ error: "Missing patientId parameter" });
      }
      const ehr = await EHR.findOne({ patientId }).populate("patientId");
      if (!ehr) {
        return null;
      }
      return res.status(200).json({ ehr });
    } catch (error) {
      console.error(chalk.red("Error occured!"), error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

// will be run only on postman, not implemented on website yet
ehrRouter.post(
  "/healthhub/createEHR",
  checkAuthMiddleware(["PATIENT"]),
  async (req, res) => {
    try {
      const patientId = req.user._id;
      //console.log("FROM EHR" + patientId);
      const ehr = new EHR({
        ...req.body,
        patientId,
      });
      try {
        await ehr.save();
        return res
          .status(201)
          .json({ message: "EHR successfully created!", ehr });
      } catch (error) {
        console.log("Error!", error);
        return res.status(403).send(error);
      }
    } catch (error) {
      console.error(chalk.red("Error occured! Could not create EHR"), error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

// allow the doctor to update the EHR
ehrRouter.patch(
  "/healthhub/updateEHR",
  checkAuthMiddleware(["DOCTOR"]),
  async (req, res) => {
    const patientId = req.body.patientId;
    const updateData = {};
    try {
      if (req.body.height) updateData.height = req.body.height;
      if (req.body.weight) updateData.weight = req.body.weight;
      if (req.body.bmi) updateData.bmi = req.body.bmi;
      const updatedEHR = await EHR.findOneAndUpdate(
        { patientId },
        {
          $addToSet: {
            // Deduplicate diagnosis based on diagnosis & date (excluding _id)
            diagnosis: req.body.diagnosis
              ? [
                  ...new Set(
                    req.body.diagnosis.map((d) =>
                      JSON.stringify({ diagnosis: d.diagnosis, date: d.date })
                    )
                  ),
                ].map((d) => JSON.parse(d))
              : [],
            // Filter out duplicate prescriptions based on your existing logic (excluding _id)
            prescriptions: req.body.prescriptions
              ? [
                  ...new Set(
                    req.body.prescriptions.map((p) =>
                      JSON.stringify({
                        medication: p.medication,
                        date: p.date,
                        dosage: p.dosage,
                        frequency: p.frequency,
                      })
                    )
                  ),
                ].map((p) => JSON.parse(p))
              : [],
          },
          ...updateData,
        },
        { new: true }
      );

      if (!updatedEHR) {
        return res.status(404).send("EHR not found");
      }
      res.json(updatedEHR);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

export default ehrRouter;
