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
  function handleExpertise() {
    setExpertise(true);
    setQualification(false);
  }
  function handleQualification() {
    setQualification(true);
    setExpertise(false);
  }

  console.log(props);
  return (
    <motion.div whileHover={{ scale: 1.04 }}>
      <div className={classes.doctorlist_cards}>
        <div className={classes.doctorlist_card}>
          <div className={classes.doctorlist_top}>
            <div className={classes.doctorlist_left}>
              <img src={img}></img>
            </div>
            <div className={classes.doctorlist_right}>
              <div className={classes["content-top"]}>
                <div className={classes.name}>{props.name}</div>

                <div className={classes.post}>{props.post}</div>
              </div>
              <hr />
              <div className={classes["content-bottom"]}>
                <div className={classes.row1}>
                  <div className={classes.field}>{props.field}</div>
                  <motion.div className={classes} whileHover={{ scale: 1.1 }}>
                    <Link to={`${props.id}`}>Visit the Profile</Link>
                  </motion.div>
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
                  <div className={classes.location}>Gurgram</div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={classes.bottom}>
            <div className={classes["bottom-row"]}>
              <div className={classes.expertise} onClick={handleExpertise}>
                Specialisation and Expertise
              </div>
              <div
                className={classes.qualification}
                onClick={handleQualification}
              >
                Qualification
              </div>
            </div>
            <div className={classes["bottom-content"]}>
              {expertise && <SpecialisationList sl={props.sl} />}
              {quali && <QualificationList ql={props.ql} />}
            </div>
          </div>
          <div>
            <motion.button
              className={classes.Button}
              whileHover={{ scale: 1.08 }}
            >
              <Link to={`doctorprofile/${props.id}`}>Meet The Doctor</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
