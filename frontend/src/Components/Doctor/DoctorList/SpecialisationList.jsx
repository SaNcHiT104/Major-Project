import React from "react";
import { motion } from "framer-motion";
export default function SpecialisationList(props) {
  return (
    <motion.div
      className="specilisationlist"
      initial={{ x: -15, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <ul>
        {props.sl?.map((data, idx) => {
          return <li id={idx}>{data}</li>;
        })}
      </ul>
    </motion.div>
  );
}
