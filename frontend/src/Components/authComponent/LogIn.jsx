import { Link, json, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useState } from "react";
import {
  isEmailCorrect,
  isPasswordCorrect,
  isUserTypeCorrect,
} from "./authHandler";

export default function Login({ state, handlePatient, handleDoctor }) {
  const navigate = useNavigate();
  //formvalidation
  const [formData, changeFormData] = useState({
    email: "",
    password: "",
    userType: state.toUpperCase(),
  });
  const [inputDataError, inputDataErrorHandler] = useState({
    email: false,
    password: false,
    userType: false,
  });

  const onSubmitHandler = async (event) => {
    // implement fetch query for backend!
    event.preventDefault();
    let errorDetected = false;
    // validate the form data
    if (!isEmailCorrect(formData.email)) {
      errorDetected = true;
      inputDataErrorHandler((prev) => ({
        ...prev,
        email: true,
      }));
    }
    if (!isPasswordCorrect(formData.password)) {
      errorDetected = true;
      inputDataErrorHandler((prev) => ({
        ...prev,
        password: true,
      }));
    }
    if (!isUserTypeCorrect(formData.userType)) {
      errorDetected = true;
      inputDataErrorHandler((prev) => ({
        ...prev,
        userType: true,
      }));
    }
    // if validation fails, set the inputDataError acordingly
    if (errorDetected) {
      return;
    }

    // fetch query
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        userEmail: formData.email,
        userType: formData.userType,
        password: formData.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // find the user in users array, if found, navigate to login, else show, INVALID CREDENTIALS
    // users.find(formData);
    // const user = users.find((obj) => {
    //   return obj.email === formData.email && obj.password === formData.password;
    // });

    // if there are validation errors or invalid credentials!
    if (response.status === 401) {
      // we can return the response like this as react-router will automatically extract the data for us.
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }
    const resData = await response.json();
    // console.log("FORM DATA - " + formData.email);
    // console.log("LOGIN SUCCESSFUL!");
    // console.log(resData);
    const token = resData.token;
    localStorage.setItem("token", token);
    const expiration = new Date();
    expiration.setHours(expiration.getDate() + 7);
    localStorage.setItem("expiration", expiration.toISOString());
    navigate("/patient/me/home");
  };

  function formDataChangeHandler(identifier, event) {
    changeFormData((prev) => ({
      ...prev,
      [identifier]: event.target.value.trim(),
    }));
  }
  // blur
  // const [typed, handleTyped] = useState({
  //   email: false,
  //   password: false,
  //   confirmpassword: false,
  // });
  // function handleBlur(identifier) {
  //   handleTyped((prev) => ({ ...prev, [identifier]: true }));
  // }
  let content = (
    <>
      <label htmlFor="email" className={classes.form_heading}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className={classes.label}
        // onBlur={() => {
        //   handleBlur("email");
        // }}
        value={formData.email}
        onChange={(event) => {
          formDataChangeHandler("email", event);
        }}
      ></input>
      {inputDataError.email && (
        <p className={classes.correct}>Please Enter a valid email</p>
      )}
      <label htmlFor="password" className={classes.form_heading}>
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className={classes.label}
        // onBlur={() => {
        //   handleBlur("password");
        // }}
        value={formData.password}
        onChange={(event) => {
          formDataChangeHandler("password", event);
        }}
      ></input>
      {inputDataError.password && (
        <p className={classes.correct}>
          Password must be 8 or more characters long and must not contain the
          word password!
        </p>
      )}

      <button className={classes.login} type="submit">
        Login
      </button>
      <Link to="/signup" className={classes.last}>
        Dont have an account? Sign up!
      </Link>
    </>
  );

  return (
    <>
      <div className={classes.container}>
        <div className={classes.button_container}>
          <button
            className={classes.customer_button}
            id={state === "PATIENT" ? classes.btnactive : undefined}
            onClick={() => {
              changeFormData((prev) => ({ ...prev, userType: "PATIENT" }));
              handlePatient();
            }}
          >
            Patient
          </button>
          <button
            className={classes.doctor_button}
            id={state === "DOCTOR" ? classes.btnactive : undefined}
            onClick={() => {
              changeFormData((prev) => ({ ...prev, userType: "DOCTOR" }));
              handleDoctor();
            }}
          >
            Doctor
          </button>
        </div>
        <div className={classes.login_form_container}>
          <form className={classes.login_form} onSubmit={onSubmitHandler}>
            {content}
          </form>
        </div>
      </div>
    </>
  );
}
