import React from "react";
import { useState } from "react";
import styles from "./DoctorListHead.module.css";

import SpecialisationList from "./SpecialisationList";
import QualificationList from "./QualificationList";
import DoctorCard from "./DoctorCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, falocation } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function DoctorListHead() {
  return (
    <div className={styles.doctorlisthead}>
      <div className={styles.Liststartpic}>
        <div className={styles.doctorlist_image}>
          <motion.img
            src="https://www.medanta.org/storage/banners/October2023//lCBUkH43Vhj5oHvd5gdFVjZjoh0kiy-metaRmluZCBhIGRvY3Rvci5qcGc=-.jpg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.img>
        </div>
        <motion.div
          className={styles.doctortext}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Medical Experts
        </motion.div>
      </div>
      <div className={styles.locationlist}>
        <motion.select
          className={styles.select}
          name="disease"
          whileHover={{ scale: 1.1 }}
        >
          <option value="">Select Disease</option>
          <option value="dengue">Dengue</option>
          <option value="typhoid">Typhoid</option>
          <option value="fever">Fever</option>
        </motion.select>
        {/* <button className={styles.button}>ALL</button>
        <button className={styles.button}>Delhi</button>
        <button className={styles.button}>Lucknow</button>
        <button className={styles.button}>Lucknow</button>
        <button className={styles.button}>Patna</button>
        <button className={styles.button}>Patna</button>
        <button className={styles.button}>Patna</button>
        <button className={styles.button}>Patna</button> */}
      </div>
      <div className={styles["Doctor-display"]}>
        <DoctorCard
          name="Dr.Arun Sharma"
          post="Chairman"
          field="Neuroscience"
        />
        <DoctorCard
          name="Dr.Arun Sharma"
          post="Chairman"
          field="Neuroscience"
        />
        <DoctorCard
          name="Dr.Arun Sharma"
          post="Chairman"
          field="Neuroscience"
        />
        <DoctorCard
          name="Dr.Arun Sharma"
          post="Chairman"
          field="Neuroscience"
        />
        <DoctorCard
          name="Dr.Arun Sharma"
          post="Chairman"
          field="Neuroscience"
        />
        <DoctorCard
          name="Dr.Arun Sharma"
          post="Chairman"
          field="Neuroscience"
        />
      </div>
    </div>
  );
}
