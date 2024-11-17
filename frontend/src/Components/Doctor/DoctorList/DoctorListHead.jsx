import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./DoctorListHead.module.css";
import DoctorCard from "./DoctorCard";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../../../UI/LoadingIndicator.jsx";
import ErrorBlock from "../../../UI/ErrorBlock.jsx";
import { fetchDoctorList } from "../../../util/patient.js";

export default function DoctorListHead() {
  const [specialty, setSpecialty] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [rating, setRating] = useState(null);
  // console.log(doctorprofile);'
  const { data, isPending, isError, error, refetch } = useQuery({
    queryFn: () => fetchDoctorList({ specialty, cityName, rating }),
    queryKey: ["doctorlist"],
    config: {
      refetchOnWindowFocus: false, // Prevents automatic refetching on window focus
    },
  });

  const handleSpecialtyChange = (value) => {
    setSpecialty(value);
  };

  const handleCityNameChange = (value) => {
    setCityName(value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  useEffect(() => {
    refetch();
  }, [specialty, cityName, rating]);

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
      return <DoctorCard id={obj._id} obj={obj} />;
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
            onChange={(e) => handleSpecialtyChange(e.target.value)}
          >
            <option value="">Select Speciality</option>
            <option value="ENT">ENT</option>
            <option value="Oncologist">Oncologist</option>
            <option value="Physician">Physician</option>
          </motion.select>

          <motion.select
            className={styles.select}
            name="location"
            whileHover={{ scale: 1.1 }}
            onChange={(e) => handleCityNameChange(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Patna">Patna</option>
            <option value="Delhi">Delhi</option>
          </motion.select>

          <motion.select
            className={styles.select}
            name="rating"
            whileHover={{ scale: 1.1 }}
            onChange={(e) => handleRatingChange(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="4">4.0+</option>
          </motion.select>
        </div>
      </div>
      <div className={styles["Doctor-display"]}>{content}</div>
    </div>
  );
}
