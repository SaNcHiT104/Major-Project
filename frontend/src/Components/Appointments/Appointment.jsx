import AppointMentHeader from "./AppointMentHeader";
import classes from "./Appointment.module.css";
import AppointmentCard from "./AppointmentCard";
export default function Appointment() {
  return (
    <div className={classes.container}>
      <AppointMentHeader />
      <AppointmentCard />
    </div>
  );
}
