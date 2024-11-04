import classes from "./SecondComponentCard.module.css";
export default function SecondComponentCard({ heading, paragraph }) {
  return (
    <div className={classes.card}>
      <p className={classes.card_title}>{heading}</p>
      <p className={classes.small_desc}>{paragraph}</p>
      {/* <div className={classes.go_corner}>
        <div className={classes.go_arrow}>→</div>
      </div> */}
    </div>
  );
}
