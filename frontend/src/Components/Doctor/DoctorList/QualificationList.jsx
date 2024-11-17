import React from "react";
import { motion } from "framer-motion";

export default function QualificationList(props) {
  return (
    <motion.div
      initial={{ x: -10, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="qualificationlist">
        <ul>
          {props.ql?.map((data, idx) => {
            return <li id={idx}>{data}</li>;
          })}
        </ul>
      </div>
    </motion.div>
  );
}
