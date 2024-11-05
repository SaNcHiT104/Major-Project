import classes from "./AppointMentHeader.module.css";
import { motion } from "framer-motion";
export default function AppointMentHeader({
  upcomingAppointmentHandler,
  pastAppointmentHandler,
  upcoming,
}) {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        className={classes.heading}
      >
        Appointments
      </motion.p>
      <motion.div
        className={classes.btnContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={classes.btn}
          id={upcoming && classes.active}
          onClick={upcomingAppointmentHandler}
        >
          Upcoming
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={classes.btn}
          id={!upcoming && classes.active}
          onClick={pastAppointmentHandler}
        >
          Past
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={classes.mainHeading}
      >
        <p className={classes.headingContent}>Name</p>
        <p className={classes.headingContent}>Email</p>
        <p className={classes.headingContent}>Contact</p>
        <p className={classes.headingContent}>Description</p>
        <p className={classes.headingContent}>Date</p>
        {/* <p className={classes.headingContennt}>Status</p> */}
      </motion.div>
    </>
  );
}
