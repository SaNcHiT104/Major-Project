<<<<<<< HEAD
import AppointMentHeader from "./AppointMentHeader.jsx";
import classes from "./Appointment.module.css";
import AppointmentCard from "./AppointmentCard.jsx";
=======
import AppointMentHeader from "./AppointMentHeader";
import classes from "./Appointment.module.css";
import AppointmentCard from "./AppointmentCard";
>>>>>>> c48205a858c305a1ae666a8e1ff984bc7fa1e57f
export default function Appointment() {
  return (
    <div className={classes.container}>
      <AppointMentHeader />
      <AppointmentCard />
    </div>
  );
}
