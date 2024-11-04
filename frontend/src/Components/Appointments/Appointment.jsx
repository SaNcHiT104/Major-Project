import AppointMentHeader from "./AppointMentHeader.jsx";
import classes from "./Appointment.module.css";
import AppointmentCard from "./AppointmentCard.jsx";
import { useState } from "react";
import { upcomingAppointments, pastAppointments } from "../../util/data.js";
export default function Appointment() {
  const [upcoming, changeUpcoming] = useState(true);
  const [upcomingArray, changeUpcomingArray] = useState(upcomingAppointments);
  const [pastArray, changePastArray] = useState(pastAppointments);
  function handleRemove(id) {
    const pastfilteredArray = upcomingArray.find((obj) => obj.id == id);
    changePastArray((prev) => [...prev, pastfilteredArray]);
    const upcomingfilteredArray = upcomingArray.filter((obj) => obj.id !== id);
    changeUpcomingArray(upcomingfilteredArray);
  }
  // console.log(pastArray);
  // console.log(upcomingArray);
  function upcomingAppointmentHandler() {
    changeUpcoming(true);
  }
  function pastAppointmentHandler() {
    changeUpcoming(false);
  }
  let data;

  if (upcoming) {
    data = upcomingArray.map((obj) => (
      <AppointmentCard
        key={obj.id}
        obj={obj}
        state={upcoming}
        handleRemove={() => {
          handleRemove(obj.id);
        }}
      />
    ));
  } else {
    data = pastArray.map((obj) => (
      <AppointmentCard key={obj.id} obj={obj} state={upcoming} />
    ));
  }
  return (
    <div className={classes.container}>
      <AppointMentHeader
        upcomingAppointmentHandler={upcomingAppointmentHandler}
        pastAppointmentHandler={pastAppointmentHandler}
        upcoming={upcoming}
      />
      {data}
    </div>
  );
}
