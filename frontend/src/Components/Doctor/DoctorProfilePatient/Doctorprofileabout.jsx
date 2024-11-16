import React from "react";
import classes from "./Doctorprofileabout.module.css";
import { motion } from "framer-motion";
export default function Doctorprofileabout({ intro }) {
  return (
    <motion.div
      className={classes.Doctorprofileabout}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2>About Dr {intro.name.toUpperCase()}</h2>
      <span>
        The Chairman and Managing Director of Medanta The Medicity, Dr. Naresh
        Trehan is a world-renowned cardiovascular and cardiothoracic surgeon. He
        has been awarded the highly prestigious Padma Bhushan and the Padma Shri
        by the Government of India. Dr. Trehan has over 48,000 successful open
        heart surgeries to his credit and is the driving force behind the
        one-of-its-kind hospital. The Chairman and Managing Director of Medanta
        The Medicity, Dr. Naresh Trehan is a world-renowned cardiovascular and
        cardiothoracic surgeon. He has been awarded the highly prestigious Padma
        Bhushan and the Padma Shri by the Government of India. Dr. Trehan has
        over 48,000 successful open heart surgeries to his credit and is the
        driving force behind the one-of-its-kind hospital. The Chairman and
        Managing Director of Medanta The Medicity, Dr. Naresh Trehan is a
        world-renowned cardiovascular and cardiothoracic surgeon. He has been
        awarded the highly prestigious Padma Bhushan and the Padma Shri by the
        Government of India. Dr. Trehan has over 48,000 successful open heart
        surgeries to his credit and is the driving force behind the
        one-of-its-kind hospital.
      </span>
    </motion.div>
  );
}
