import { useState } from "react";
import classes from "./WelcomePage.module.css";
import LogIn from "./LogIn";
import Admin from "./Admin";

function WelcomePage() {
  const [state, changeState] = useState("PATIENT");
  function handlePatient() {
    changeState("PATIENT");
  }
  function handleDoctor() {
    changeState("DOCTOR");
  }
  const [click, changeUserClick] = useState("user");
  let data;
  if (click === "user") {
    data = (
      <LogIn
        state={state}
        handleDoctor={handleDoctor}
        handlePatient={handlePatient}
      />
    );
  } else data = <Admin />;

  let content;

  if (state === "PATIENT") {
    content = (
      <>
        <div className={classes.heading_primary}>
          <p>Welcome {click === "user" ? "to Website !" : "Admin"}</p>
        </div>
        <div className={classes.heading_secondary}>
          {click === "user" && (
            <p>
              Simplify your health journey. Find, book, and prioritize your
              well-being effortlessly with our user-friendly platform. Discover
              the right doctor and secure appointments seamlessly.
            </p>
          )}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div className={classes.heading_primary}>
          <p>Welcome {click === "user" ? "to Website !" : "Admin!"}</p>
        </div>
        <div className={classes.heading_secondary}>
          {click === "user" && (
            <p>
              Effortlessly manage your patient appointments and records with our
              secure online platform. Login today to streamline your medical
              practice seamlessly.
            </p>
          )}
        </div>
      </>
    );
  }
  return (
    <div className={classes.welcome}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.heading}>
            {content}
            <div className={classes.button_container}>
              <button
                className={classes.btn}
                id={click === "user" ? classes.btnactive : undefined}
                onClick={() => {
                  changeUserClick("user");
                }}
              >
                User
              </button>
              <button
                className={classes.btn}
                id={click === "admin" ? classes.btnactive : undefined}
                onClick={() => {
                  changeUserClick("admin");
                }}
              >
                Admin
              </button>
            </div>
          </div>
        </div>
        <div className={classes.right}>{data}</div>
      </div>
    </div>
  );
}

export default WelcomePage;
