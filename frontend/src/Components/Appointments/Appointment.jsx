import AppointMentHeader from "./AppointMentHeader.jsx";
import classes from "./Appointment.module.css";
import AppointmentCard from "./AppointmentCard.jsx";
export default function Appointment() {
  return (
    <div className={classes.container}>
      <AppointMentHeader />
      <AppointmentCard />
    </div>
  );
}
