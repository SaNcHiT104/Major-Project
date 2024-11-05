import classes from "./ErrorBlock.module.css";
export default function ErrorBlock({ title, message }) {
  return (
    <div className={classes["error-block"]}>
      <div className={classes["error-block-icon"]}>!</div>
      <div className={classes["error-block-content"]}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
