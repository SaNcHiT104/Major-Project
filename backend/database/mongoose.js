import chalk from "chalk";
import mongoose from "mongoose";

export default mongoose
  .connect("mongodb://127.0.0.1:27017/healthhub-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.green("Connected to database successfully."));
  })
  .catch((error) => {
    console.log(chalk.red("Connected to database failed!."));
    console.log(error);
  });

// const patient = new User({
//   name: "Sahil",
//   age: 22,
// });

// patient
//   .save()
//   .then(() => {
//     console.log(patient);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
