import classes from "./AppointmentCard.module.css";
import { upcomingAppointments, pastAppointments } from "../../util/data";
export default function AppointmentCard({ obj, state, handleRemove }) {
  // let state = true;
  // console.log(obj);
  function handleCheckChange() {
    handleRemove();
  }
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.mainHeading} key={obj.id}>
          <p className={classes.headingContent}>{obj.name}</p>
          <p className={classes.headingContent}>{obj.email}</p>
          <p className={classes.headingContent}>{obj.contact}</p>
          <p className={classes.headingContent}>{obj.description}</p>
          <p className={classes.headingContent}>{obj.date}</p>
        </div>
        {state && (
          <div className={classes.checkBlock} onClick={handleCheckChange}>
            <button className={classes.button}>
              <span className={classes.transition}></span>
              <span className={classes.gradient}></span>
              <span className={classes.label}>Done!</span>
            </button>
          </div>
          // <button onClick={handleCheckChange}>Click here</button>
        )}
      </div>
    </>
  );
}
