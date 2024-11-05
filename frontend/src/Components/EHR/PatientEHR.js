import classes from "./PatientEHR.module.css";
import { patientpro } from "../../util/data";
import MedicalHistoryCard from "./MedicalHistoryCard";

const PatientEHR = () => {
  const {
    name,
    DOB,
    allergies,
    height,
    weight,
    bmi,
    diagnosis,
    prescriptions,
  } = patientpro;
  return (
    <div className={classes["ehr-container"]}>
      {/* Patient Summary Section */}
      <div className={classes["patient-summary"]}>
        <h2>{name.toUpperCase()}</h2>
      </div>

      {/* Critical Info Section */}
      <div className={classes["critical-info"]}>
        <h3>CRITICAL INFO</h3>
        <div className={classes["personal-details"]}>
          <p>
            <strong>Date of Birth: </strong> <br />
            {DOB}
          </p>
          <p>
            <strong>Allergies: </strong>
            <br />
            {allergies}
          </p>
          <p>
            <strong>Height: </strong>
            <br /> {height}
          </p>
          <p>
            <strong>Weight: </strong>
            <br /> {weight}
          </p>
          <p>
            <strong>BMI: </strong>
            <br /> {bmi}
          </p>
        </div>
      </div>

      {/* Medical Consultations section */}
      <div className={classes["medical-history"]}>
        <h3>MEDICAL HISTORY</h3>
        <ul>
          {diagnosis.map((consultation) => (
            <MedicalHistoryCard
              key={consultation._id}
              date={consultation.date}
              diagnosis={consultation.diagnosis}
            ></MedicalHistoryCard>
          ))}
        </ul>
      </div>

      {/* Medications Section */}
      <div className={classes["medications"]}>
        <h3>PRESCRIPTIONS</h3>
        <table>
          <thead>
            <tr>
              <th>Medication</th>
              <th>Dose</th>
              <th>Frequency</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((medication) => (
              <tr key={medication._id}>
                {" "}
                {/* Assuming there's an id property */}
                <td>{medication.medication}</td>
                <td>{medication.dosage}</td>
                <td>{medication.frequency}</td>
                {/* Display formatted date */}
                <td>{new Date(medication.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientEHR;
