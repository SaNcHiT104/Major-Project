import React, { useState } from "react";

import classes from "./Appointmentform.module.css";
import { useMutation } from "@tanstack/react-query";
import { createPatientAppointment } from "../../../util/appointment";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchPatientProfile } from "../../../util/patient";
import { motion } from "framer-motion";
export default function Appointmentform() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getPatientInfo"],
    queryFn: fetchPatientProfile,
  });
  // console.log(data, "sahil");
  const [formSubmit, changeFormSubmit] = useState(false);
  const { doctorId } = useParams();
  const [didEdit, setDidEdit] = useState({
    fullname: false,
    contactInfo: false,
    email: false,
    date: false,
    description: false,
  });
  const [enteredValues, setEnteredValues] = useState({
    fullname: "",
    contactInfo: "",
    email: "",
    date: "",
    description: "",
  });
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const phoneIsValid =
    didEdit.contactInfo && enteredValues.contactInfo.length != 10;
  function handleInput(identifier, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
  }
  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }
  const {
    data: mutateData,
    mutate,
    isPending,
    isError: mutateErrorMessage,
  } = useMutation({
    mutationFn: createPatientAppointment,
  });
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(enteredEmail);
    // console.log(enteredValues);

    if (enteredValues.date === " " || enteredValues.description === "") {
      alert("Please enter the details before submitting");
    } else {
      const DataDoctor = {
        ...enteredValues,
        doctor: doctorId,
        email: data.email,
      };
      mutate(DataDoctor);
      // console.log(DataDoctor);
      changeFormSubmit(true);
      setDidEdit({
        fullname: false,
        contactInfo: false,
        email: false,
        date: false,
        description: false,
      });
      setEnteredValues({
        fullname: "",
        contactInfo: "",
        email: "",
        date: "",
        description: "",
      });
    }
  }
  let content;

  if (
    !isLoading &&
    !formSubmit &&
    data?.name !== undefined &&
    data?.contactInfo !== undefined &&
    data?.email !== undefined
  ) {
    content = (
      <motion.div
        className={classes.registerform}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <form className={classes.innerloginform} onSubmit={handleSubmit}>
          <div className={classes.row}>
            <div className={classes.full}>Full Name</div>
            <div className={classes.formdata}>{data?.name}</div>
          </div>
          <div className={classes.row}>
            <div>
              <div className={classes.full}>Phone Number</div>
              <div className={classes.formdata}>{data?.contactInfo}</div>
            </div>
          </div>
          <div className={classes.row}>
            <div>
              <div className={classes.full}>Email</div>
              <div className={classes.formdata}>{data?.email}</div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.fill}> Date</div>
            <motion.input
              whileFocus={{ scale: 1.1 }}
              className={classes.input}
              type="date"
              name="date"
              value={enteredValues.date}
              onChange={(event) => handleInput("date", event)}
            />
          </div>
          <div className={classes.row}>
            <div className={classes.fill}> Purpose of Appointment</div>
            <motion.input
              whileFocus={{ scale: 1.1 }}
              className={classes.input}
              type="text"
              name="description"
              value={enteredValues.description}
              onChange={(event) => handleInput("description", event)}
            />
          </div>
          <br />
          <motion.button
            className={classes["book_button"]}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
          >
            Book Appointment
          </motion.button>
        </form>
      </motion.div>
    );
  } else if (data?.name === undefined || data?.contactInfo === undefined) {
    content = (
      <motion.div
        className={classes.bookedAppointment}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className={classes.appointmentBook}>Please Update Your Profile!</h2>
      </motion.div>
    );
  } else {
    content = (
      <motion.div
        className={classes.bookedAppointment}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: -60, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className={classes.appointmentBook}>Appointment Booked!</h2>
        <motion.button
          className={classes["book_button"]}
          onClick={() => changeFormSubmit(false)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Book Another!
        </motion.button>
      </motion.div>
    );
  }
  return content;
}
