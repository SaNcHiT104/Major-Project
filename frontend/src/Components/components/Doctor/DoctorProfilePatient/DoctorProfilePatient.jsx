import React from "react";

import Doctorprofilenav from "./Doctorprofilenav";
import Doctorprofileintro from "./Doctorprofileintro";
import Doctorprofileabout from "./Doctorprofileabout";
import Doctorexpertise from "./Doctorexpertise";
import Doctoreview from "./Doctoreview";
import Doctorfaq from "./Doctorfaq";
import Appointmentform from "./Appointmentform";

export default function FindADoctor() {
  return (
    <>
      <Doctorprofilenav />
      <Doctorprofileintro />
      <Doctorprofileabout />
      <Doctorexpertise />
      <Doctorfaq />
      <Doctoreview />
      {/* <Appointmentform/> */}
    </>
  );
}
