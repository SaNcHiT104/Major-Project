import { useNavigate, useParams } from "react-router-dom";
import classes from "./AppointmentCard.module.css";
import { motion } from "framer-motion";
export default function AppointmentCard({ obj, state, handleRemove }) {
  const { id } = useParams();
  const navigate = useNavigate();
  // let state = true;
  console.log(obj);
  function handleCheckChange() {
    handleRemove();
  }

  function viewEHRHandler() {
    navigate(`/doctor/${id}/viewEHR/${obj.owner._id}`);
  }
  const formattedDate = new Date(obj.date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <>
      <motion.div
        className={classes.mainContainer}
        layout
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className={classes.mainHeading}>
          <p className={classes.headingContent}>{obj.owner?.name}</p>
          <p className={classes.headingContent}>{obj.email}</p>
          <p className={classes.headingContent}>{obj.contactInfo}</p>
          <p className={classes.headingContent}>{obj.description}</p>
          <p className={classes.headingContent}>{formattedDate}</p>
        </div>
        {state && (
          <motion.div
            className={classes.checkBlock}
            onClick={viewEHRHandler}
            whileHover={{ scale: 1.1 }}
          >
            <button className={classes.button}>
              <span className={classes.transition}></span>
              <span className={classes.gradient}></span>
              <span className={classes.label}>View EHR</span>
            </button>
          </motion.div>
        )}
        {state && (
          <div className={classes.checkBlock} onClick={handleCheckChange}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className={classes.button}
            >
              <span className={classes.transition}></span>
              <span className={classes.gradient}></span>
              <span className={classes.label}>Done!</span>
            </motion.button>
          </div>
        )}
      </motion.div>
    </>
  );
}
