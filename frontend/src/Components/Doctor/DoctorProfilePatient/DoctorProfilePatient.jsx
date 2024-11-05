import React from "react";

import Doctorprofilenav from "./Doctorprofilenav.jsx";
import Doctorprofileintro from "./Doctorprofileintro.jsx";
import Doctorprofileabout from "./Doctorprofileabout.jsx";
import Doctorexpertise from "./Doctorexpertise.jsx";
import Doctoreview from "./Doctoreview.jsx";
import Doctorfaq from "./Doctorfaq.jsx";
import Appointmentform from "./Appointmentform.jsx";

export default function FindADoctor() {
  return (
    <>
      <Doctorprofilenav />
      <Doctorprofileintro />
      <Doctorprofileabout />
      <Doctorexpertise />
      <Doctorfaq />
      <Doctoreview />
      {/* <DoctorList/> */}
      {/* <DoctorList/> */}
    </>
  );
}
