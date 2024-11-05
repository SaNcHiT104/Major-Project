import classes from "./MedicalHistoryCard.module.css";

const MedicalHistoryCard = ({ diagnosis, date }) => {
  return (
    <div className={classes["medical-history-card"]}>
      <p>{diagnosis}</p>
      <p>
        {new Date(date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
    </div>
  );
};

export default MedicalHistoryCard;
