import classes from "./PatientProfile.module.css";
import { useState } from "react";
import image from "./../../assets/patient.webp";
import maleImage from "./../../assets/maleProfile.avif";
import femaleImage from "./../../assets/femaleProfile.jpg";

export default function PatientProfile() {
  const [isEdit, changeIsEdit] = useState(true);
  function handleEdit() {
    if (!submitcheck) {
      alert("Please enter correct details");
    } else {
      changeIsEdit(!isEdit);
    }
  }
  function checkAll() {
    if (formData.allergy.length == 0) {
      changeFormData((prev) => ({
        ...prev,
        allergy: "None",
      }));
    }
  }
  const [formData, changeFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    gender: "male",
    dateOfBirth: "",
    age: "",
    allergies: "",
  });
  function resetAll() {
    changeFormData((prev) => ({
      name: "",
      contact: "",
      email: "",
      address: "",
      gender: "",
      dateOfBirth: "",
      age: "",
      allergies: "",
    }));
    handleTyped((prev) => ({
      name: false,
      contact: false,
      email: false,
      address: false,
      gender: false,
      dateOfBirth: false,
      age: false,
      allergies: false,
    }));
  }
  const [typed, handleTyped] = useState({
    name: false,
    contact: false,
    email: false,
    address: false,
    gender: false,
    dateOfBirth: false,
    age: false,
    allergies: false,
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
    typed.contact &&
    (formData.contact.length != 10 || formData.contact.charAt(0) == "0");
  const checkGender =
    typed.gender &&
    !(
      formData.gender.toLowerCase() === "male" ||
      formData.gender.toLowerCase() == "female"
    );
  const checkAge = typed.age && formData.age <= 0;
  const checkAddrss = typed.address && formData.address.length === 0;
  const allergy = formData.allergies.length === 0;
  const submitcheck =
    formData.email.includes("@") &&
    formData.contact.length === 10 &&
    !formData.contact.charAt(0) == "0" &&
    formData.age >= 0 &&
    formData.address.length >= 0 &&
    (formData.gender.toLowerCase() === "male" ||
      formData.gender.toLowerCase() === "female");

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {/* <button className={classes.left_arrow_btn}>
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
          </svg>
          <span>Back</span>
        </button> */}
        <p className={classes.headingPrimary}>Patient Profile</p>
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
                <p className={classes.detailsHeading}>Contact: </p>
                {isEdit && (
                  <input
                    type="number"
                    className={classes.input}
                    placeholder="contact"
                    onChange={(event) => handleChange("contact", event)}
                    value={formData.contact}
                    onBlur={() => {
                      handleBlur("contact");
                    }}
                  ></input>
                )}
                {!isEdit && (
                  <p className={classes.contactDetails}>{formData.contact}</p>
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
                <p className={classes.detailsHeading}>Address:</p>
                {isEdit && (
                  <input
                    type="text"
                    className={classes.input}
                    placeholder="Address"
                    onChange={(event) => handleChange("address", event)}
                    value={formData.address}
                    onBlur={() => {
                      handleBlur("address");
                    }}
                  ></input>
                )}
                {!isEdit && (
                  <p className={classes.contactDetails}>{formData.address}</p>
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
                <p className={classes.overviewHeading}>Date of birth:</p>
                {isEdit && (
                  <input
                    type="date"
                    className={classes.input}
                    onChange={(event) => handleChange("dateOfBirth", event)}
                    value={formData.dateOfBirth}
                  ></input>
                )}
                {!isEdit && (
                  <p className={classes.overviewDetails}>
                    {formData.dateOfBirth}
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
                <p className={classes.overviewHeading}>Allergies:</p>
                {isEdit && (
                  <input
                    type="text"
                    className={classes.input}
                    onChange={(event) => handleChange("allergies", event)}
                    value={formData.allergies}
                    onBlur={() => {
                      handleBlur("allergies");
                    }}
                  ></input>
                )}
                {!isEdit && (
                  <p className={classes.overviewDetails}>
                    {formData.allergies}
                  </p>
                )}
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}
