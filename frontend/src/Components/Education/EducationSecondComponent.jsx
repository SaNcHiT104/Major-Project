import React from "react";
import classes from "./EducationSecondComponent.module.css";
import EducationSecondComponentCard from "./EducationSecondComponentCard";
import img from "../../assets/EducationSecondComponent.jpg";
export default function EducationSecondComponent() {
  return (
    <div className={classes.secondContainer}>
      <div className={classes.left}>
        <EducationSecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
        <EducationSecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
        <EducationSecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
        <EducationSecondComponentCard
          heading={"welcome"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum aliquam aut nobis quo, quibusdam, dolore saepe in esse quaerat omnis rem deleniti amet provident repudiandae qui tempore tempora autem!"
          }
        />
      </div>
      <img src={img} alt="photo" className={classes.right}></img>
    </div>
  );
}
