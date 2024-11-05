import AppointMentHeader from "./AppointMentHeader.jsx";
import classes from "./Appointment.module.css";
import AppointmentCard from "./AppointmentCard.jsx";
import { useState } from "react";
import {
  fetchPatientUpcomingAppointments,
  updateAppointmentStatus,
} from "../../util/appointment.js";
import { queryClient } from "../../util/http.js";
import { useQuery, useMutation } from "@tanstack/react-query";
import LoadingIndicator from "../../UI/LoadingIndicator.jsx";
import ErrorBlock from "../../UI/ErrorBlock.jsx";
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
  const {
    data: mutateData,
    mutate,
    isError: mutateError,
    error: mutateer,
  } = useMutation({
    mutationFn: updateAppointmentStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["patient"],
      });
    },
  });

  function handleRemove(id) {
    mutate({ id: id });
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
  return (
    <div className={classes.container}>
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
  );
}
