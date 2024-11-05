import React from "react";
import classes from "./EducationSecondComponentCard.module.css";
import { Link } from "react-router-dom";
export default function EducationSecondComponentCard({
  heading,
  paragraph,
  src,
}) {
  return (
    <div className={classes.card}>
      <p className={classes.card_title}>{heading}</p>
      <p className={classes.small_desc}>{paragraph}</p>
      {/* <button className={classes.btn}>Click here</button> */}
      <Link to={src} className={classes.alink}>
        Know more...
      </Link>
      {/* <div className={classes.go_corner}>
    <div className={classes.go_arrow}>→</div>
  </div> */}
    </div>
  );
}
