import React from "react";
import classes from "./PatientProfile.module.css";
export default function PatientRightDown() {
  return (
    <div className={classes.rightdown}>
      <div className={classes.topbtns}>
        <button className={classes.learn_more}>
          <span className={classes.circle} aria-hidden="true">
            <span class={classes.icon_arrow}></span>
          </span>
          <span class={classes.button_text}>Appointments</span>
        </button>
        <button className={classes.learn_more}>
          <span className={classes.circle} aria-hidden="true">
            <span class={classes.icon_arrow}></span>
          </span>
          <span class={classes.button_text}>Doctor</span>
        </button>
        <div className={classes.midbtns}>
          <button className={classes.learn_more}>
            <span className={classes.circle} aria-hidden="true">
              <span class={classes.icon_arrow}></span>
            </span>
            <span class={classes.button_text}>Treatment</span>
          </button>
          <button className={classes.learn_more}>
            <span className={classes.circle} aria-hidden="true">
              <span class={classes.icon_arrow}></span>
            </span>
            <span class={classes.button_text}>Test results</span>
          </button>
        </div>
      </div>
      <div className={classes.downbtns}>
        <button className={classes.learn_more}>
          <span className={classes.circle} aria-hidden="true">
            <span class={classes.icon_arrow}></span>
          </span>
          <span class={classes.button_text}>Billing</span>
        </button>
        <button className={classes.learn_more}>
          <span className={classes.circle} aria-hidden="true">
            <span class={classes.icon_arrow}></span>
          </span>
          <span class={classes.button_text}>Consent Form</span>
        </button>
      </div>
    </div>
  );
}
