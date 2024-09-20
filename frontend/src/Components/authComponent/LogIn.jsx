import classes from "./Login.module.css";
import { useState, useRef } from "react";
export default function Login({ state, handlePatient, handleDoctor }) {
  let content;

  const [sign, siginClicked] = useState(false);
  console.log(sign);
  //formvalidation
  const [formData, changeFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  function resetAll() {
    changeFormData((prev) => ({
      email: "",
      password: "",
      confirmpassword: "",
    }));
    handleTyped((prev) => ({
      email: false,
      password: false,
      confirmpassword: false,
    }));
  }

  function handleP() {
    siginClicked(false);
    handlePatient();
    resetAll();
  }
  function handleD() {
    siginClicked(false);
    handleDoctor();
    resetAll();
  }
  //blur
  const [typed, handleTyped] = useState({
    email: false,
    password: false,
    confirmpassword: false,
  });
  function handleBlur(identifier) {
    handleTyped((prev) => ({ ...prev, [identifier]: true }));
  }
  function onSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  function handleChange(identifier, event) {
    changeFormData((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
    handleTyped((prev) => ({ ...prev, [identifier]: false }));
  }
  function handleSignInClicked() {
    siginClicked(true);
    resetAll();
  }
  const emailisCorrect = typed.email && !formData.email.includes("@");
  const passisCorrect =
    !typed.password ||
    (formData.password.length >= 8 && !formData.password.includes("password"));
  const confirmPassisCorrect =
    typed.confirmpassword &&
    formData.password !== formData.confirmpassword &&
    sign;
  // console.log(typed.password + " " + formData.password.length);
  content = (
    <>
      <label for="email" className={classes.form_heading}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className={classes.label}
        onBlur={() => {
          handleBlur("email");
        }}
        value={formData.email}
        onChange={(event) => {
          handleChange("email", event);
        }}
      ></input>
      {formData.email.length >= 0 && emailisCorrect && (
        <p className={classes.correct}>Please Enter a valid email</p>
      )}
      <label for="password" className={classes.form_heading}>
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className={classes.label}
        onBlur={() => {
          handleBlur("password");
        }}
        value={formData.password}
        onChange={(event) => {
          handleChange("password", event);
        }}
      ></input>
      {!passisCorrect && (
        <p className={classes.correct}>
          Password must be 8 or more characters long and must not contain
          the word password!
        </p>
      )}
      {sign && (
        <>
          <label for="password" className={classes.form_heading}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            required
            className={classes.label}
            onBlur={() => {
              handleBlur("confirmpassword");
            }}
            value={formData.confirmpassword}
            onChange={(event) => {
              handleChange("confirmpassword", event);
            }}
          ></input>
        </>
      )}
      {confirmPassisCorrect && (
        <p className={classes.correct}>Password should match</p>
      )}
      {!sign && (
        <button className={classes.login} type="submit">
          Login
        </button>
      )}
      {sign && (
        <button className={classes.login} type="submit">
          Sign in
        </button>
      )}
      {!sign && (
        <button className={classes.last} onClick={handleSignInClicked}>
          Dont have an account? Sign up
        </button>
      )}
    </>
  );
  let data = (
    <>
      <p
        className={classes.heading_primary}
        id={state === "PATIENT" && classes.heading_primary}
      >
        {!sign ? "Welcome back!" : "Sign up today!"}
      </p>
      <p className={classes.paragraph}>
        {!sign === true ? "Log" : "Sign"} in to your account and we'll get you in
        to see our {state === "PATIENT" ? "Doctors!" : "Patient!"}
      </p>
    </>
  );

  return (
    <>
      <div className={classes.container}>
        <div class={classes.button_container}>
          <button
            className={classes.customer_button}
            id={state === "PATIENT" && classes.btnactive}
            onClick={handleP}
          >
            Patient
          </button>
          <button
            className={classes.doctor_button}
            id={state === "DOCTOR" && classes.btnactive}
            onClick={handleD}
          >
            Doctor
          </button>
        </div>
        {data}
        <div class={classes.login_form_container}>
          <form class={classes.login_form} onSubmit={onSubmit}>
            {content}
          </form>
        </div>
      </div>
    </>
  );
}
