import React from "react";

import Doctorprofilenav from "./Doctorprofilenav.jsx";
import Doctorprofileintro from "./Doctorprofileintro.jsx";
import Doctorprofileabout from "./Doctorprofileabout.jsx";
import Doctorexpertise from "./Doctorexpertise.jsx";
import Doctoreview from "./Doctoreview.jsx";
import Doctorfaq from "./Doctorfaq.jsx";
import Appointmentform from "./Appointmentform.jsx";
import { useParams } from "react-router-dom";
import { singledoctor } from '../../../util/data';

export default function FindADoctor() {
  const params=useParams();
  const doctorid = params.id;
  console.log("intro", singledoctor)
  return (
    <>
      <Doctorprofilenav />
      <Doctorprofileintro intro={singledoctor}/>
      <Doctorprofileabout />
      <Doctorexpertise />
      <Doctorfaq />
      <Doctoreview />
      {/* <DoctorList/> */}
      {/* <DoctorList/> */}
    </>
  );
}
