import AppointMentHeader from "./AppointMentHeader.jsx";
import classes from "./Appointment.module.css";
import AppointmentCard from "./AppointmentCard.jsx";
import { useState } from "react";
import { fetchPatientUpcomingAppointments } from "../../util/appointment.js";
import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../../UI/LoadingIndicator.jsx";
import ErrorBlock from "../../UI/ErrorBlock.jsx";
import AppointmentModal from "./AppointmentModal.jsx";
import { AnimatePresence } from "framer-motion";
export default function Appointment() {
  const [upcoming, changeUpcoming] = useState(true);
  const {
    data: content,
    isPending,
    isError,
    error,
  } = useQuery({
    queryFn: () => fetchPatientUpcomingAppointments(!upcoming),
    queryKey: ["patient"],
  });

  let mainData;
  const [openModal, changeModal] = useState(false);
  const [singleObj, changeSingleObj] = useState(undefined);
  function handleRemove(id) {
    // mutate({ id: id });
    changeModal(true);
    const doneclickedObj = content.appointments.filter((obj) => obj._id === id);
    changeSingleObj(doneclickedObj);
  }
  function upcomingAppointmentHandler() {
    changeUpcoming(true);
  }
  function pastAppointmentHandler() {
    changeUpcoming(false);
  }
  let data;
  if (isPending) {
    data = (
      <div className="ringCenter">
        <LoadingIndicator />;
      </div>
    );
  }
  let isDataPresent;
  if (isError) {
    data = (
      <ErrorBlock
        title={"Was not able to fetch appointments"}
        message={error.info?.message || "Failed to fetch "}
      />
    );
  }
  if (content && upcoming) {
    const upcomingAppointments = content.appointments.filter((obj) => {
      return obj.status === false;
    });
    data = upcomingAppointments.map((obj) => (
      <AppointmentCard
        key={obj._id}
        obj={obj}
        state={upcoming}
        handleRemove={() => {
          handleRemove(obj._id);
        }}
      />
    ));
    if (upcomingAppointments.length === 0) isDataPresent = true;
  } else {
    if (content && !upcoming) {
      const pastAppointments = content.appointments.filter((obj) => {
        return obj.status === true;
      });
      data = pastAppointments.map((obj) => (
        <AppointmentCard
          key={obj._id}
          obj={obj}
          state={upcoming}
          handleRemove={() => {
            handleRemove(obj.id);
          }}
        />
      ));
      if (pastAppointments.length === 0) isDataPresent = true;
    }
  }

  mainData = (
    <div>
      <div className={classes.container}>
        <AnimatePresence>
          {!openModal && (
            <div>
              <AppointMentHeader
                upcomingAppointmentHandler={upcomingAppointmentHandler}
                pastAppointmentHandler={pastAppointmentHandler}
                upcoming={upcoming}
              />
              {upcoming && isDataPresent && (
                <p className={classes.appoint}>No upcoming appointments</p>
              )}
              {!upcoming && isDataPresent && (
                <p className={classes.appoint}>No past appointments</p>
              )}
              {data}
            </div>
          )}

          {openModal && singleObj && (
            <AppointmentModal
              obj={singleObj}
              onClose={() => {
                changeModal(false);
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return mainData;
}
