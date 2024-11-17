import React from "react";
import EducationSecondComponent from "./EducationSecondComponent";
import EducationHeader from "./EducationHeader";
import MentalHealth from "./MentalHealth/MentalHealth";
export default function Education() {
  return (
    <div>
      <EducationHeader />
      <EducationSecondComponent />
      <MentalHealth />
    </div>
  );
}
