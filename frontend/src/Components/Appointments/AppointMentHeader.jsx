import classes from "./AppointMentHeader.module.css";
import { useState } from "react";
export default function AppointMentHeader({
  upcomingAppointmentHandler,
  pastAppointmentHandler,
  upcoming,
}) {
  return (
    <>
      <p className={classes.heading}>Appointments</p>
      <div className={classes.btnContainer}>
        <button
          className={classes.btn}
          id={upcoming && classes.active}
          onClick={upcomingAppointmentHandler}
        >
          Upcoming
        </button>
        <button
          className={classes.btn}
          id={!upcoming && classes.active}
          onClick={pastAppointmentHandler}
        >
          Past
        </button>
      </div>
      <div className={classes.mainHeading}>
        <p className={classes.headingContent}>Name</p>
        <p className={classes.headingContent}>Email</p>
        <p className={classes.headingContent}>Contact</p>
        <p className={classes.headingContent}>Description</p>
        <p className={classes.headingContent}>Date</p>
        {/* <p className={classes.headingContennt}>Status</p> */}
      </div>
    </>
  );
}
