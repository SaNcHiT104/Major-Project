import React from "react";
import classes from "./EducationSecondComponent.module.css";
import EducationSecondComponentCard from "./EducationSecondComponentCard";
import img from "../../assets/EducationSecondComponent.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
export default function EducationSecondComponent() {
  const { scrollY } = useScroll();
  const opacityX = useTransform(
    scrollY,
    [300, 400, 500, 550, 650, 700],
    [0.4, 0.7, 0.8, 0.85, 0.9, 1]
  );
  return (
    <div className={classes.secondContainer}>
      <motion.div
        className={classes.left}
        style={{
          opacity: opacityX,
        }}
      >
        <EducationSecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
          src="sexuality_wtf_is_it_anyway"
        />
        <EducationSecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
          src="pregnancy_panic"
        />
        <EducationSecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
          src="navigating_consent"
        />
        <EducationSecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
          src="sexual_anatomy"
        />
      </motion.div>
      <img
        src={img}
        alt="image_of_book_library"
        className={classes.right}
      ></img>
    </div>
  );
}
