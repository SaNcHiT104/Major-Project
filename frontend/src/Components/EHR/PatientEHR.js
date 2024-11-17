import classes from "./PatientEHR.module.css";
import MedicalHistoryCard from "./MedicalHistoryCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPatientEHR } from "../../util/ehr.js";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../UI/LoadingIndicator";
import ErrorBlock from "../../UI/ErrorBlock";
import styles from "./PatientEHR.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const PatientEHR = () => {
  const { patientId: pid } = useParams();
  console.log("PID: " + pid);
  const {
    data: patientpro,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["getPatientInfo", pid],
    queryFn: () => fetchPatientEHR(pid),
  });

  const [filterArr, setFilterArr] = useState();
  const [displayType, setDisplayType] = useState("patientData");
  const handleMedicationChange=(type)=>{
    // console.log(patientpro.ehr.prescriptions);
    let arr=patientpro.ehr.prescriptions.filter(val=>val.medication==type)
    setDisplayType("prescriptionData")
    setFilterArr(arr);
    // console.log(arr);
  }

  const handleHistoryChange=(type)=>{
    let arr=patientpro.ehr.diagnosis.filter(val=>val.diagnosis==type)
    setDisplayType("diagnosisData")
    setFilterArr(arr);
  }

  let content;

  if (isPending) {
    return (
      <div className={classes["ehr-container"]}>
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={classes["ehr-container"]}>
        <ErrorBlock
          title="Fetch Error"
          message={`Failed to load EHR data: ${error}`}
        />
      </div>
    );
  }

  const { diagnosis, prescriptions, bloodGroup, height, weight, bmi } =
    patientpro.ehr;

  const { name, DOB, allergies } = patientpro.ehr.patientId;

  content = (
    <>
      
      {" "}
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
            {new Date(DOB).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
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
            <strong>Weight (in KG): </strong>
            <br /> {weight}
          </p>
          <p>
            <strong>BMI: </strong>
            <br /> {bmi}
          </p>
          <p>
            <strong>Blood Group: </strong> <br />
            {bloodGroup}
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
                <td>
                  {new Date(medication.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
  return (
    <>
    <div className={styles.locationlist}>
          <motion.select
            className={styles.select}
            name="disease"
            whileHover={{ scale: 1.1 }}
            onChange={(e) => handleMedicationChange(e.target.value)}
          >
            <option value="">Select Medication</option>
            <option value="Paracetamol">Paracetamol</option>
            <option value="Metformin">Metformin</option>
            <option value="Combiflam">Combiflam</option>
          </motion.select>

          <motion.select
            className={styles.select}
            name="location"
            whileHover={{ scale: 1.1 }}
            onChange={(e) => handleHistoryChange(e.target.value)}
          >
            <option value="">Select Disease</option>
            <option value="Headache">Headache</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Polio">Polio</option>
            <option value="Dengue">Dengue</option>
          </motion.select>
        </div>
        {
          displayType=="patientData" && <motion.div
          className={classes["ehr-container"]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content}
        </motion.div>
        }
        {
          displayType=="prescriptionData" &&  <div className={classes["medications"]}>
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
              {filterArr.map((medication) => (
                <tr key={medication._id}>
                  {" "}
                  {/* Assuming there's an id property */}
                  <td>{medication.medication}</td>
                  <td>{medication.dosage}</td>
                  <td>{medication.frequency}</td>
                  {/* Display formatted date */}
                  <td>
                    {new Date(medication.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }
        {
          displayType=="diagnosisData" && <div className={classes["medical-history"]}>
          <h3>MEDICAL HISTORY</h3>
          <ul>
            {filterArr.map((consultation) => (
              <MedicalHistoryCard
                key={consultation._id}
                date={consultation.date}
                diagnosis={consultation.diagnosis}
              ></MedicalHistoryCard>
            ))}
          </ul>
        </div>
        }
    </>
  );
};

export default PatientEHR;
