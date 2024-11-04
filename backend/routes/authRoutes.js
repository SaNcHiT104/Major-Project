import express from "express";
import Patient from "../database/UserModels/Patient.js";
import Doctor from "../database/UserModels/Doctor.js";
import Admin from "../database/UserModels/Admin.js";
import checkAuthMiddleware from "../middlewares/auth.js";
import validator from "validator";

const authRouter = new express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    const { userEmail, password, userType } = req.body;
    let user;
    // TODO: check user doesn't exist already!
    if (userType === "ADMIN") {
      user = new Admin({
        email: userEmail,
        password,
      });
    } else if (userType === "DOCTOR") {
      user = new Doctor({
        email: userEmail,
        password,
      });
    } else if (userType === "PATIENT") {
      user = new Patient({
        email: userEmail,
        password,
      });
    }
    if (!user) {
      return res.status(401).json({ error: " BAD REQUEST! Validation errors detected." });
    }
    // console.log(user);
    try {
      await user.save();
      const token = await user.generateAuthToken();
      // console.log(user);
      return res
        .status(201)
        .json({ message: "Signup successful", user, token });
    } catch (error) {
      console.log("Error!", error);
      return res.status(401).json({ error: "Invalid User Type" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
/* if we get a login request, it will be a get req and we can query the database and check the
  credentials. Ensure that token creation is also done here. Redirect to home page. */
authRouter.post("/login", async (req, res) => {
  try {
    const { userEmail, password, userType } = req.body;
    console.log(req.body);
    let user;
    // handle the type of user on login accordingly
    if (userType === "ADMIN") {
      user = await Admin.findByCredentials(userEmail, password);
    } else if (userType === "DOCTOR") {
      user = await Doctor.findByCredentials(userEmail, password);
    } else if (userType === "PATIENT") {
      user = await Patient.findByCredentials(userEmail, password);
    } else {
      return res.status(401).json({ error: "Invalid User Type" });
    }

    if (user) {
      const token = await user.generateAuthToken();
      return res.status(200).json({ message: "Login successful", user, token });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

authRouter.post(
  "/logout",
  checkAuthMiddleware(["DOCTOR", "PATIENT", "ADMIN"]),
  async (req, res) => {
    try {
      // When I logout, I remove the token and assign an empty string as token, effectively removing it
      req.user.tokens = { token: "" };
      // console.log(req.user)
      await req.user.save();
      res.send(req.user);
    } catch (error) {
      res.status(500).send();
    }
  }
);

export default authRouter;