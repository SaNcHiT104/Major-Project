// import fs from "node:fs/promises";
import express from "express";
import chalk from "chalk";
import "./database/mongoose.js";
import patientRouter from "./routes/patientRoutes.js";
import doctorRouter from "./routes/doctorRoutes.js";
import authRouter from "./routes/authRoutes.js";
import appointmentRouter from "./routes/appointmentRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});

app.use(patientRouter);
app.use(doctorRouter);
app.use(authRouter);
app.use(appointmentRouter);

app.get("/", (req, res) => {
  return res.send("<h1>Welcome!</h1>");
});

app.get("/home", (req, res) => {});

app.listen(3000, () => {
  console.log(chalk.green("SERVER IS RUNNING ON PORT 3000..."));
});
