import React from "react";
import ErrorBlock from "../../../UI/ErrorBlock.jsx";
import LoadingIndicator from "../../../UI/LoadingIndicator.jsx";
import Doctorprofilenav from "./Doctorprofilenav.jsx";
import Doctorprofileintro from "./Doctorprofileintro.jsx";
import Doctorprofileabout from "./Doctorprofileabout.jsx";
import Doctorexpertise from "./Doctorexpertise.jsx";
import Doctoreview from "./Doctoreview.jsx";
import Doctorfaq from "./Doctorfaq.jsx";
// import Appointmentform from "./Appointmentform.jsx";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import DoctorCard from "../DoctorList/DoctorCard.jsx";
import { fetchSingleDoctor } from "../../../util/doctor..js";
export default function FindADoctor() {
  const params = useParams();
  const doctorid = params.doctorId;
  // console.log(doctorid);
  const { data, isPending, isLoading, error, isError } = useQuery({
    queryKey: ["doctor", doctorid],
    queryFn: () => fetchSingleDoctor(doctorid),
  });
  let content;
  if (isError) {
    content = (
      <ErrorBlock
        title="Not able to fetch your profile"
        message={error.info?.message || "Please try again later"}
      />
    );
  } else if (isLoading) {
    content = <LoadingIndicator />;
  } else if (data) {
    content = (
      <>
        <Doctorprofilenav />
        <Doctorprofileintro intro={data.doctors[0]} />
        <Doctorprofileabout intro={data.doctors[0]} />
        <Doctorexpertise />
        <Doctorfaq />
        <Doctoreview />
      </>
    );
  }
  return content;
}
