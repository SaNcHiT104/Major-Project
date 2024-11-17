import React from "react";
import classes from "./DoctorCard.module.css";
import { useState } from "react";
import SpecialisationList from "./SpecialisationList";
import QualificationList from "./QualificationList";
import { Link } from "react-router-dom";
import img from "../../../assets/doctorCardImage.jpg";
import { motion } from "framer-motion";

export default function DoctorCard(props) {
  const [expertise, setExpertise] = useState(true);
  const [quali, setQualification] = useState(false);
  console.log("doctor list", props);
  function handleExpertise() {
    setExpertise(true);
    setQualification(false);
  }
  function handleQualification() {
    setQualification(true);
    setExpertise(false);
  }

  const obj = props.obj;
  const sp = [obj.specialty];
  // console.log("doctor Obj", obj);
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={classes.doctorlist_cards}>
        <div className={classes.doctorlist_card}>
          <div className={classes.doctorlist_top}>
            <div className={classes.doctorlist_left}>
              <img src={img}></img>
            </div>
            <div className={classes.doctorlist_right}>
              <div className={classes["content-top"]}>
                <div className={classes.name}>{obj.name}</div>
                <div className={classes.post}>{props.post}</div>
              </div>
              <hr />
              <div className={classes["content-bottom"]}>
                <div className={classes.row1}>
                  <div className={classes.location}>{obj.officeAddress}</div>

                  {/* <Link to={`${props.id}`} className={classes.pro}>
                    <motion.div
                      className={classes.visit}
                      whileHover={{ scale: 1.1 }}
                    >
                      Visit the Profile
                    </motion.div>
                  </Link> */}
                  <div className={classes}>
                    {/* <Link
                      to={`/doctor/${userId}/home`}
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                    </Link> */}
                  </div>
                </div>
                <div className={classes.row2}>
                  <div className={classes.field}>{obj.officeContactInfo}</div>
                </div>
                <div className={classes.row3}>
                  <div className={classes.location}>{obj.email}</div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={classes.bottom}>
            <div className={classes["bottom-row"]}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={classes.expertise}
                onClick={handleExpertise}
                id={expertise ? classes.active : undefined}
              >
                Specialisation and Expertise
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={classes.qualification}
                id={!expertise ? classes.active : undefined}
                onClick={handleQualification}
              >
                Qualification
              </motion.div>
            </div>
            <motion.div className={classes["bottom-content"]}>
              {expertise && <SpecialisationList sl={sp} />}
              {quali && <QualificationList ql={obj.qualification} />}
            </motion.div>
          </div>
          <div>
            <Link to={`${props.id}`}>
              <motion.button
                className={classes.Button}
                whileHover={{ scale: 1.08 }}
              >
                Meet The Doctor
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
