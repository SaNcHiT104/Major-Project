import classes from "./SecondComponent.module.css";
import SecondComponentCard from "./SecondComponentCard";
import { useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import img from "../../assets/doctorSecondComponent.avif";
export default function SecondComponent() {
  const { scrollY } = useScroll();
  const opacityX = useTransform(
    scrollY,
    [300, 400, 500, 550, 650, 700],
    [0.4, 0.7, 0.8, 0.85, 0.9, 1]
  );
  const [component, changeComponent] = useState(true);
  let data;
  if (component) {
    data = (
      <motion.div
        className={classes.innerContainer}
        style={{
          opacity: opacityX,
        }}
        initial={{ opacity: opacityX, x: 30 }}
        animate={{ opacity: opacityX, x: -30 }}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <SecondComponentCard
            heading={"Find Specialist Doctors"}
            paragraph={
              "Easily discover specialized healthcare professionals based on specific illnesses and preferred locations, ensuring that patients receive targeted and quality care tailored to their needs."
            }
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <SecondComponentCard
            heading={"Easy Appointment Booking"}
            paragraph={
              "Streamline the appointment scheduling process through our user-friendly online platform, eliminating the hassle of long wait times and tedious phone calls. "
            }
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <SecondComponentCard
            heading={"Health Education Hub"}
            paragraph={
              "Empower patients with valuable health-related information through our comprehensive education section. Access articles, resources, and insights on various medical topics."
            }
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <SecondComponentCard
            heading={"Patient Profiles"}
            paragraph={
              "Create and manage personalized patient profiles to maintain comprehensive health records conveniently. Patients can easily access their medical history, past appointments, prescribed medications."
            }
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <SecondComponentCard
            heading={"Secure Record Storage"}
            paragraph={
              "Rest assured knowing that all medical records are securely stored within our platform. Our robust security measures ensure the confidentiality and integrity of patient information."
            }
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <SecondComponentCard
            heading={"Seamless Communication"}
            paragraph={
              "Foster effective communication between patients and healthcare providers through our platform. Patients can easily communicate with doctors, ask questions, discuss concerns."
            }
          />
        </motion.div>
      </motion.div>
    );
  } else {
    data = (
      <motion.div
        className={classes.secondContainer}
        animate={{ x: -50 }}
        initial={{ x: 0 }}
      >
        <div className={classes.left}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <SecondComponentCard
              heading={"Comprehensive Solutions"}
              paragraph={
                "Our platform offers a one-stop solution for all your needs. From finding doctors to booking appointments,accessing educational resources,managing personal health records."
              }
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <SecondComponentCard
              heading={"User-Friendly Interface"}
              paragraph={
                "We prioritize user experience, offering an intuitive and easy-to-use interface that simplifies the healthcare journey for patients. Our platform ensures seamless navigation, hassle-free appointment booking."
              }
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <SecondComponentCard
              heading={"Privacy and Security"}
              paragraph={
                "Your privacy and security are our priorities. We employ robust security measures to safeguard your confidential medical records, ensuring compliance with healthcare regulations and providing peace of mind to our users"
              }
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <SecondComponentCard
              heading={"Patient-Centered Care"}
              paragraph={
                "At the core of our service is a commitment to patient-centered care. We prioritize the needs of our users, open communication, personalized interactions, and proactive engagement in healthcare decision-making."
              }
            />
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 50, type: "spring" }}
          animate={{ opacity: 1, x: 0, type: "spring" }}
          src={img}
          alt="photo"
          className={classes.right}
        ></motion.img>
      </motion.div>
    );
  }
  // console.log(component);
  return (
    <>
      <motion.div
        className={classes.container}
        style={{
          opacity: opacityX,
        }}
      >
        <div className={classes.btnnav}>
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            className={classes.btn}
            id={component && classes.active}
            onClick={() => changeComponent(true)}
          >
            Our Services
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            className={classes.btn}
            id={!component && classes.active}
            onClick={() => changeComponent(false)}
          >
            Why Choose us
          </motion.button>
        </div>
        {data}
      </motion.div>
    </>
  );
}
