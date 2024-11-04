import { Outlet } from "react-router-dom";
import NavBar from "../../../UI/NavBar";
import Footer from "../../../UI/Footer";

function PatientRoot() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default PatientRoot;
// import React, { useState } from "react";

// export default function PatientRoot() {
//   return <div></div>;
// }
