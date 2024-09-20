// import fs from "node:fs/promises";
import express from "express";
import chalk from "chalk";
import bcrypt from "bcryptjs";
import "./database/mongoose.js";
import Patient from "./database/UserModels/Patient.js";
import Doctor from "./database/UserModels/Doctor.js";
import Admin from "./database/UserModels/Admin.js";
import patientRouter from "./routes/patient.js";
import doctorRouter from "./routes/doctor.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});

app.use(patientRouter);
app.use(doctorRouter);

app.get("/", (req, res) => {
  return res.send("<h1>Welcome!</h1>");
});

app.get("/home", (req, res) => {});

/*  if we get a signup request, it will be a post requuest and we can use the request to create
a new user, redirect to login page */
app.post("/signup", async (req, res) => {
  try {
    // DATABASE CONNECTION IS SUCCESSFUL BUT req.body is not being parsed correctly
    const { userEmail, password, userType } = req.body;
    let user;
    // console.log(req.body);
    // console.log(userType);
    // check user doesn't exist already!
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
      return res.status(400).json({ error: "Invalid User Type" });
    }
    try {
      await user.save();
      console.log(user);
      return res.status(200).json({ message: "Signup successful", user });
    } catch (error) {
      console.log("Error!", error);
      return res.status(400).json({ error: "Invalid User Type" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
/* if we get a login request, it will be a get req and we can query the database and check the
credentials. Ensure that token creation is also done here. Redirect to home page. */
app.post("/login", async (req, res) => {
  try {
    const { userEmail, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    // console.log(req.body);
    let user;
    // handle the type of user an login accordingly
    if (userType === "ADMIN") {
      user = await Admin.findByCredentials(userEmail, password);
    } else if (userType === "DOCTOR") {
      user = await Admin.findByCredentials(userEmail, password);
    } else if (userType === "PATIENT") {
      user = await Admin.findByCredentials(userEmail, password);
    } else {
      return res.status(400).json({ error: "Invalid User Type" });
    }

    if (user) {
      // TODO: create a token for this user also, and give access to site based on userType
      return res.status(200).json({ message: "Login successful", user });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log(chalk.green("SERVER IS RUNNING ON PORT 3000..."));
});
