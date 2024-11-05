import { useNavigate, useParams } from "react-router-dom";
import classes from "./AppointmentCard.module.css";
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
      <div className={classes.mainContainer}>
        <div className={classes.mainHeading}>
          <p className={classes.headingContent}>{obj.owner?.name}</p>
          <p className={classes.headingContent}>{obj.email}</p>
          <p className={classes.headingContent}>{obj.contactInfo}</p>
          <p className={classes.headingContent}>{obj.description}</p>
          <p className={classes.headingContent}>{formattedDate}</p>
        </div>
        <div className={classes.checkBlock} onClick={viewEHRHandler}>
          <button className={classes.button}>
            <span className={classes.transition}></span>
            <span className={classes.gradient}></span>
            <span className={classes.label}>View EHR</span>
          </button>
        </div>
        {state && (
          <div className={classes.checkBlock} onClick={handleCheckChange}>
            <button className={classes.button}>
              <span className={classes.transition}></span>
              <span className={classes.gradient}></span>
              <span className={classes.label}>Done!</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
