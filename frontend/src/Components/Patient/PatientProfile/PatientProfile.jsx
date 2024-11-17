import classes from "./PatientProfile.module.css";
import { useEffect, useState } from "react";
import image from "../../../assets/patient.webp";
import maleImage from "../../../assets/maleProfile.avif";
import femaleImage from "../../../assets/femaleProfile.jpg";
import PatientRightDown from "./PatientRightDown";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../../../UI/LoadingIndicator";
import ErrorBlock from "../../../UI/ErrorBlock";
import { motion } from "framer-motion";
import {
  updatePatientProfile,
  fetchPatientProfile,
} from "../../../util/patient";
import { queryClient } from "../../../util/http";
export default function PatientProfile() {
  const {
    data: patientpro,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getPatientInfo"],
    queryFn: fetchPatientProfile,
  });
  const [formData, changeFormData] = useState({});
  const [isEdit, changeIsEdit] = useState(true);
  useEffect(() => {
    const dateObject = new Date(patientpro?.DOB);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Adding 1 to month since it's zero-based
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    if (patientpro?.age > 0) {
      changeIsEdit(false);
    }
    changeFormData({
      ...formData,
      name: patientpro?.name,
      contact: patientpro?.contactInfo,
      email: patientpro?.email,
      address: patientpro?.address,
      gender: patientpro?.gender,
      dateOfBirth: formattedDate,
      age: patientpro?.age,
      allergies: patientpro?.allergies,
    });
  }, [patientpro]);
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

  let content;
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
    if (!checkAllerror.submitcheck) {
      alert("Please enter correct details");
    } else {
      if (isEdit) {
        mutate(formData);
      }
      changeIsEdit(!isEdit);
    }
  }
  const [checkAllerror, changeCheckAllerror] = useState({
    gender: false,
    contact: false,
    age: false,
    address: false,
    submitcheck: false,
  });

  if (isError) {
    content = (
      <ErrorBlock
        title="Not able to fetch your profile"
        message={error.info?.message || "Please try again later"}
      />
    );
  } else if (isLoading) {
    content = <LoadingIndicator />;
  } else if (patientpro) {
    // let gendercheck = formData?.gender.toLowerCase();
    console.log(patientpro, "patient");
    content = (
      <div className={classes.body}>
        <div className={classes.left}>
          <div className={classes.leftup}>
            <div className={classes.header}>
              <p className={classes.name}>
                <img
                  src={
                    formData.gender?.toLowerCase() === "male"
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
                    {formData.gender?.toLocaleLowerCase() === "male"
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
                {isEdit && checkAllerror.contact && (
                  <div className={classes.correct}>
                    Please enter valid phone number
                  </div>
                )}
              </div>
              <div className={classes.nameEdit}>
                <p className={classes.detailsHeading}>Email: </p>(
                <p className={classes.contactDetails}>{formData.email}</p>)
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
                {isEdit && checkAllerror.address && (
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
                <p className={classes.overviewHeading}>Gender:</p>
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

                {checkAllerror.gender && (
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
                {checkAllerror.age && (
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

  function handleBlur(identifier) {
    handleTyped((prev) => ({ ...prev, [identifier]: true }));
    console.log(typed);
  }
  function handleChange(identifier, event) {
    changeFormData((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
    handleTyped((prev) => ({ ...prev, [identifier]: false }));
  }

  useEffect(() => {
    if (patientpro && formData) {
      // console.log("hello" + patientpro.name);
      // console.log(formData, formData.email);
      let contactCheck =
        typed.contact &&
        (formData.contact?.length !== 10 ||
          formData.contact?.charAt(0) === "0");
      changeCheckAllerror((prev) => ({ ...prev, ["contact"]: contactCheck }));
      let tempcheckGender =
        typed.gender &&
        !(
          formData.gender?.toLowerCase() === "male" ||
          formData.gender?.toLowerCase() === "female"
        );
      changeCheckAllerror((prev) => ({ ...prev, ["gender"]: tempcheckGender }));
      let checkAge = typed.age && formData.age <= 0;
      changeCheckAllerror((prev) => ({ ...prev, ["age"]: checkAge }));
      let checkAddrss = typed.address && formData.address?.length === 0;
      changeCheckAllerror((prev) => ({ ...prev, ["address"]: checkAddrss }));
      let submitcheck =
        formData.contact?.length === 10 &&
        formData.age >= 0 &&
        formData.address?.length >= 0 &&
        (formData.gender?.toLowerCase() === "male" ||
          formData.gender?.toLowerCase() === "female");
      changeCheckAllerror((prev) => ({
        ...prev,
        ["submitcheck"]: submitcheck,
      }));
    }
  }, [formData, typed]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <motion.p
            className={classes.headingPrimary}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Patient Profile
          </motion.p>
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {content}
        </motion.div>
      </div>
    </>
  );
}
