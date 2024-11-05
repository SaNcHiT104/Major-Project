import classes from "./PatientProfile.module.css";
import { useState } from "react";
import image from "../../../assets/patient.webp";
import maleImage from "../../../assets/maleProfile.avif";
import femaleImage from "../../../assets/femaleProfile.jpg";
import { patientpro } from "../../../util/data";
import PatientRightDown from "./PatientRightDown";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../../../UI/LoadingIndicator";
import ErrorBlock from "../../../UI/ErrorBlock";
import {
  updatePatientProfile,
  fetchPatientProfile,
} from "../../../util/patient";
import { queryClient } from "../../../util/http";
export default function PatientProfile() {
  const [isEdit, changeIsEdit] = useState(true);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getPatientInfo"],
    queryFn: fetchPatientProfile,
  });
  const {
    mutate,
    data: mutedData,
    isError: mutateError,
    error: mutateErrorMessage,
    isPending: mutatePending,
  } = useMutation({
    mutationFn: updatePatientProfile,
    onMutate: async (formNewData) => {
      const newData = formNewData;
      await queryClient.cancelQueries({
        queryKey: ["getPatientInfo"],
      });
      const prevData = queryClient.getQueryData(["getPaitentInfo"]);
      queryClient.setQueryData(["getPatientInfo"], newData);
      return { prevData };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["getPatientInfo"], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["getPatientInfo"],
      });
    },
  });
  function handleEdit() {
    if (!submitcheck) {
      alert("Please enter correct details");
    } else {
      if (isEdit) {
        mutate({ newFormData: formData });
      }
      changeIsEdit(!isEdit);
    }
  }
  const [formData, changeFormData] = useState({
    name: patientpro.name,
    contact: patientpro.contactInfo,
    email: patientpro.email,
    address: patientpro.address,
    gender: patientpro.gender,
    dateOfBirth: patientpro.DOB,
    age: patientpro.age,
    allergies: patientpro.allergies,
  });
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
    (formData.contact.length !== 10 || formData.contact.charAt(0) === "0");
  const checkGender =
    typed.gender &&
    !(
      formData.gender.toLowerCase() === "male" ||
      formData.gender.toLowerCase() === "female"
    );
  const checkAge = typed.age && formData.age <= 0;
  const checkAddrss = typed.address && formData.address.length === 0;
  const submitcheck =
    formData.email.includes("@") &&
    formData.contact.length === 10 &&
    formData.age >= 0 &&
    formData.address.length >= 0 &&
    (formData.gender.toLowerCase() === "male" ||
      formData.gender.toLowerCase() === "female");
  let content;
  if (isPending) {
    content = <LoadingIndicator />;
  }
  if (isError) {
    content = (
      <ErrorBlock
        title="Not able to fetch your profile"
        message={error.info?.message || "Please try again later"}
      />
    );
  }
  if (data) {
    content = (
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
                {/* {isEdit && (
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
            )} */}
                {/* {isEdit && checkmail && (
              <div className={classes.correct}>
                Please enter valid email
              </div>
            )} */}
                (<p className={classes.contactDetails}>{formData.email}</p>)
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
          <PatientRightDown />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <p className={classes.headingPrimary}>Patient Profile</p>
          {mutatePending && (
            <p className={classes.submitting}>Submitting......</p>
          )}
          {!mutatePending && !isError && (
            <button
              className={classes.btn}
              id={isEdit && classes.btnactive}
              onClick={handleEdit}
            >
              {isEdit ? "Submit" : "Edit"}
            </button>
          )}
        </div>
        {content}
      </div>
    </>
  );
}
