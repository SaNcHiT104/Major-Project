import classes from "./MedicalHistoryCard.module.css";

const MedicalHistoryCard = ({ diagnosis, date }) => {
  return (
    <div className={classes["medical-history-card"]}>
      <p>{diagnosis}</p>
      <p>{new Date(date).toLocaleDateString()}</p>
    </div>
  );
};

export default MedicalHistoryCard;
