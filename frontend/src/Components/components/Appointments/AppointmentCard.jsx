import classes from "./AppointmentCard.module.css";
export default function AppointmentCard({
  name,
  email,
  contact,
  description,
  date,
  status,
}) {
  return (
    <>
      <div className={classes.mainHeading}>
        <p className={classes.headingContent}>{name}</p>
        <p className={classes.headingContent}>{email}</p>
        <p className={classes.headingContent}>{contact}</p>
        <p className={classes.headingContent}>{description}</p>
        <p className={classes.headingContent}>{date}</p>
        {/* <p className={classes.headingContent}>{status}</p> */}
      </div>
    </>
  );
}
