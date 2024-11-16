import React from "react";
import classes from "./Doctorprofileintro.module.css";
import Appointmentform from "./Appointmentform";
import img from "./../../../assets/doctorProfilePatientImage.webp";
import { motion } from "framer-motion";
export default function Doctorprofileintro(props) {
  const string = props.intro.qualification.join(", ");
  console.log(props);
  return (
    <motion.div
      className={classes.Doctorprofileintro}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classes.Doctorprofilestart}>
        <div className={classes["left-side"]}>
          <div className={classes.Doctorprofileimg}>
            <img src={img}></img>
          </div>
          <motion.div
            className={classes.Doctorprofilecontent}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={classes.Doctorprofilename}>
              Dr {props.intro.name.toUpperCase()}
            </div>
            <div className={classes.Doctorprofiledetais}>
              {props.intro.email.toUpperCase()}
            </div>
            <div className={classes.Doctorprofiledetais}>
              {props.intro.officeAddress.toUpperCase()}
            </div>
            <div className={classes.Doctorprofiledetais}>
              {props.intro.specialty.toUpperCase()}
            </div>
            <div className={classes.Doctorprofiledetais}>
              {string.toUpperCase()}
            </div>
          </motion.div>
        </div>
        <motion.div className={classes["right-side"]}>
          <Appointmentform />
        </motion.div>
      </div>
    </motion.div>
  );
}
