import classes from "./DoctorProfile.module.css";
import { useState } from "react";
import image from "./../../../assets/patient.webp";
import maleImage from "./../../../assets/maleProfile.avif";
import femaleImage from "./../../../assets/femaleProfile.jpg";
import Footer from "../../../UI/Footer.jsx";
import NavBar from "../../../UI/NavBar.jsx";
// import DoctorProfileAppointment from "./DoctorProfileAppointment";

export default function PatientProfile() {
  const [isEdit, changeIsEdit] = useState(true);
  function handleEdit() {
    if (!submitcheck) {
      alert("Please enter correct details");
    } else {
      changeIsEdit(!isEdit);
    }
  }
  const [formData, changeFormData] = useState({
    name: "",
    officeContactInfo: "",
    email: "",
    officeAddress: "",
    gender: "male",
    dateOfBirth: "",
    age: "",
    specialty: "",
  });

  const [typed, handleTyped] = useState({
    name: false,
    officeContactInfo: false,
    email: false,
    officeAddress: false,
    gender: false,
    dateOfBirth: false,
    age: false,
    specialty: false,
  });
  function handleBlur(identifier) {
    handleTyped((prev) => ({ ...prev, [identifier]: true }));
  }
  function handleChange(identifier, event) {
    changeFormData((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
    handleTyped((prev) => ({ ...prev, [identifier]: false }));
  }
  //Validation
  const checkmail = typed.email && !formData.email.includes("@");
  const contactCheck =
    typed.officeContactInfo &&
    (formData.officeContactInfo.length !== 10 ||
      formData.officeContactInfo.charAt(0) === "0");
  const checkGender =
    typed.gender &&
    !(
      formData.gender.toLowerCase() === "male" ||
      formData.gender.toLowerCase() === "female"
    );
  const checkAge = typed.age && formData.age <= 0;
  const checkAddrss =
    typed.officeAddress && formData.officeAddress.length === 0;
  const special = typed.specialty && formData.specialty.length === 0;
  const submitcheck =
    formData.email.includes("@") &&
    formData.officeContactInfo.length === 10 &&
    !formData.officeContactInfo.charAt(0) === "0" &&
    formData.age >= 0 &&
    formData.address.length >= 0 &&
    (formData.gender.toLowerCase() === "male" ||
      formData.gender.toLowerCase() === "female") &&
    formData.specialty.length > 0;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <p className={classes.headingPrimary}>Doctor Profile</p>
          <button
            className={classes.btn}
            id={isEdit && classes.btnactive}
            onClick={handleEdit}
          >
            {isEdit ? "Submit" : "Edit"}
          </button>
        </div>
        <div className={classes.body}>
          <div className={classes.left}>
            <div className={classes.leftup}>
              <div className={classes.header}>
                <p className={classes.name}>
                  <img
                    src={
                      formData.gender.toLowerCase() === "male"
                        ? maleImage
                        : femaleImage
                    }
                    className={classes.profile}
                    alt=""
                  />
                  {isEdit && (
                    <input
                      type="text"
                      className={classes.input}
                      placeholder="name"
                      onChange={(event) => handleChange("name", event)}
                      value={formData.name}
                      required
                      onBlur={() => {
                        handleBlur("name");
                      }}
                    ></input>
                  )}
                  {!isEdit && (
                    <p className={classes.realname}>
                      {formData.gender.toLocaleLowerCase() === "male"
                        ? "Mr"
                        : "Ms"}{" "}
                      {formData.name}
                    </p>
                  )}
                </p>
              </div>
              <p className={classes.contact}>Contact Details:</p>
              <div className={classes.leftdetails}>
                <div className={classes.nameEdit}>
                  <p className={classes.detailsHeading}>OfficeContact: </p>
                  {isEdit && (
                    <input
                      type="number"
                      className={classes.input}
                      placeholder="contact"
                      onChange={(event) =>
                        handleChange("officeContactInfo", event)
                      }
                      value={formData.officeContactInfo}
                      onBlur={() => {
                        handleBlur("officeContactInfo");
                      }}
                    ></input>
                  )}
                  {!isEdit && (
                    <p className={classes.contactDetails}>
                      {formData.officeContactInfo}
                    </p>
                  )}
                  {isEdit && contactCheck && (
                    <div className={classes.correct}>
                      Please enter valid phone number
                    </div>
                  )}
                </div>
                <div className={classes.nameEdit}>
                  <p className={classes.detailsHeading}>Email: </p>
                  {isEdit && (
                    <input
                      type="email"
                      className={classes.input}
                      placeholder="email"
                      onChange={(event) => handleChange("email", event)}
                      value={formData.email}
                      onBlur={() => {
                        handleBlur("email");
                      }}
                    ></input>
                  )}
                  {isEdit && checkmail && (
                    <div className={classes.correct}>
                      Please enter valid email
                    </div>
                  )}
                  {!isEdit && (
                    <p className={classes.contactDetails}>{formData.email}</p>
                  )}
                </div>
                <div className={classes.nameEdit}>
                  <p className={classes.detailsHeading}> Office Address:</p>
                  {isEdit && (
                    <input
                      type="text"
                      className={classes.input}
                      placeholder="Address"
                      onChange={(event) => handleChange("officeAddress", event)}
                      value={formData.officeAddress}
                      onBlur={() => {
                        handleBlur("officeAddress");
                      }}
                    ></input>
                  )}
                  {!isEdit && (
                    <p className={classes.contactDetails}>
                      {formData.officeAddress}
                    </p>
                  )}
                  {isEdit && checkAddrss && (
                    <div className={classes.correct}>
                      Please enter valid address
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={classes.heading}>
              <img src={image} className={classes.leftdown} alt="Doctor" />
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.rightup}>
              <p className={classes.overviewhead}>Overview:</p>
              <div className={classes.overview}>
                <div>
                  <p className={classes.overviewHeading}>Gender</p>
                  {isEdit && (
                    <input
                      type="text"
                      className={classes.input}
                      onChange={(event) => handleChange("gender", event)}
                      value={formData.gender}
                      onBlur={() => {
                        handleBlur("gender");
                      }}
                    ></input>
                  )}
                  {!isEdit && (
                    <p className={classes.overviewDetails}>{formData.gender}</p>
                  )}
                  {checkGender && (
                    <p className={classes.correct}>
                      Gender should me male or female
                    </p>
                  )}
                </div>

                <div>
                  <p className={classes.overviewHeading}>Age:</p>
                  {isEdit && (
                    <input
                      type="number"
                      className={classes.input}
                      onChange={(event) => handleChange("age", event)}
                      value={formData.age}
                      onBlur={() => {
                        handleBlur("age");
                      }}
                    ></input>
                  )}
                  {!isEdit && (
                    <p className={classes.overviewDetails}>{formData.age}</p>
                  )}
                  {checkAge && (
                    <p className={classes.correct}>Age should be positve</p>
                  )}
                </div>

                <div>
                  <p className={classes.overviewHeading}>Specialty:</p>
                  {isEdit && (
                    <input
                      type="text"
                      className={classes.input}
                      onChange={(event) => handleChange("specialty", event)}
                      value={formData.specialty}
                      onBlur={() => {
                        handleBlur("specialty");
                      }}
                    ></input>
                  )}
                  {!isEdit && (
                    <p className={classes.overviewDetails}>
                      {formData.specialty}
                    </p>
                  )}
                  {isEdit && special && (
                    <div className={classes.correct}>
                      Please enter valid specialty
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={classes.rightdown}>
              {/* <DoctorProfileAppointment /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
