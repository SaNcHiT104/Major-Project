import AppointMentHeader from "./AppointMentHeader";
import classes from "./AppointMent.module.css";
import AppointmentCard from "./AppointmentCard";
export default function Appointment() {
  return (
    <div className={classes.container}>
      <AppointMentHeader />
      <AppointmentCard />
    </div>
  );
}
