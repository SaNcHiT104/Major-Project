import React from "react";
import classes from "./EducationSecondComponentCard.module.css";
export default function EducationSecondComponentCard({ heading, paragraph }) {
  return (
    <div className={classes.card}>
      <p className={classes.card_title}>{heading}</p>
      <p className={classes.small_desc}>{paragraph}</p>
      {/* <button className={classes.btn}>Click here</button> */}
      <a href="" className={classes.alink}>
        Know more...
      </a>
      {/* <div className={classes.go_corner}>
    <div className={classes.go_arrow}>→</div>
  </div> */}
    </div>
  );
}
