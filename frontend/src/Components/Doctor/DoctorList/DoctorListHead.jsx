import React from "react";
import { useState } from "react";
import styles from "./DoctorListHead.module.css";

import SpecialisationList from "./SpecialisationList";
import QualificationList from "./QualificationList";
import DoctorCard from "./DoctorCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, falocation } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { doctorprofile } from "../../../util/data";
import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../../../UI/LoadingIndicator.jsx";
import ErrorBlock from "../../../UI/ErrorBlock.jsx";
import { fetchDoctorList } from "../../../util/patient.js";

export default function DoctorListHead() {
  // console.log(doctorprofile);'
  const { data, isPending, isError, error } = useQuery({
    queryFn: () => fetchDoctorList(),
    queryKey: ["doctorlist"],
  });

  let content;

  if (isPending) {
    content = (
      <div className="ringCenter">
        <LoadingIndicator />;
      </div>
    );
  }
  if (isError) {
    content = (
      <ErrorBlock
        title={"Was not able to fetch appointments"}
        message={error.info?.message || "Failed to fetch "}
      />
    );
  }
  if (data) {
    content = data.doctors?.map((obj) => {
      return (
        <DoctorCard
          id={obj._id}
          name={obj.name}
          post={obj.gender}
          field={""}
          sl={[]}
          ql={[]}
        />
      );
    });
  }
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
        </div>
      </div>
      <div className={styles["Doctor-display"]}>{content}</div>
    </div>
  );
}
