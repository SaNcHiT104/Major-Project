import classes from "./DoctorProfile.module.css";
import { useEffect, useState } from "react";
import image from "./../../../assets/patient.webp";
import maleImage from "./../../../assets/maleProfile.avif";
import femaleImage from "./../../../assets/femaleProfile.jpg";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchDoctorProfile, updateDoctorProfile } from "../../../util/doctor.";
import { queryClient } from "../../../util/http";
import ErrorBlock from "../../../UI/ErrorBlock";
import LoadingIndicator from "../../../UI/LoadingIndicator";
import { motion } from "framer-motion";
export default function PatientProfile() {
  const {
    data: patientpro,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getDoctorInfo"],
    queryFn: fetchDoctorProfile,
  });
  const {
    mutate,
    data: mutedData,
    isError: mutateError,
    error: mutateErrorMessage,
    isPending: mutatePending,
  } = useMutation({
    mutationFn: updateDoctorProfile,
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
  const [isEdit, changeIsEdit] = useState(true);
  function handleEdit() {
    if (!checkAllerror.submit) {
      alert("Please enter correct details");
    } else {
      if (isEdit) {
        mutate(formData);
      }
      changeIsEdit(!isEdit);
    }
  }
  const [formData, changeFormData] = useState({});
  useEffect(() => {
    if (patientpro?.age >= 0) {
      changeIsEdit(false);
    }
    console.log(patientpro);
    changeFormData({
      ...formData,
      name: patientpro?.name,
      officeContactInfo: patientpro?.officeContactInfo,
      email: patientpro?.email,
      officeAddress: patientpro?.officeAddress,
      gender: patientpro?.gender,
      age: patientpro?.age,
      specialty: patientpro?.specialty,
      qualification: patientpro?.qualification,
      rating: patientpro?.totalRating,
    });
  }, [patientpro]);

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
  const [checkAllerror, changeCheckAllerror] = useState({
    gender: false,
    contact: false,
    age: false,
    address: false,
    submit: false,
    specialty: false,
  });
  //Validation
  useEffect(() => {
    if (patientpro && formData) {
      let contactCheck =
        typed.officeContactInfo &&
        (formData.officeContactInfo?.length !== 10 ||
          formData.officeContactInfo?.charAt(0) === "0");
      changeCheckAllerror((prev) => ({ ...prev, ["contact"]: contactCheck }));
      let checkGender =
        typed.gender &&
        !(
          formData.gender?.toLowerCase() === "male" ||
          formData.gender?.toLowerCase() === "female"
        );
      changeCheckAllerror((prev) => ({ ...prev, ["gender"]: checkGender }));
      let checkAge = typed.age && formData.age <= 0;
      changeCheckAllerror((prev) => ({ ...prev, ["age"]: checkAge }));
      let checkAddrss =
        typed.officeAddress && formData.officeAddress?.length === 0;
      changeCheckAllerror((prev) => ({ ...prev, ["address"]: checkAddrss }));
      let special = typed.specialty && formData.specialty?.length === 0;
      changeCheckAllerror((prev) => ({ ...prev, ["specialty"]: special }));
      let submitcheck =
        formData.officeContactInfo?.length === 10 &&
        formData.age >= 0 &&
        formData.officeAddress?.length >= 0 &&
        (formData.gender?.toLowerCase() === "male" ||
          formData.gender?.toLowerCase() === "female") &&
        formData.specialty?.length > 0;
      changeCheckAllerror((prev) => ({ ...prev, ["submit"]: submitcheck }));
    }
  }, [formData, typed]);
  let content;
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
    content = (
      <motion.div className={classes.body}>
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
                {isEdit && checkAllerror.contact && (
                  <div className={classes.correct}>
                    Please enter valid phone number
                  </div>
                )}
              </div>
              <div className={classes.nameEdit}>
                <p className={classes.detailsHeading}>Email: </p>
                <p className={classes.contactDetails}>{formData.email}</p>
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
                {isEdit && checkAllerror.gender && (
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
                {isEdit && checkAllerror.age && (
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
                {isEdit && checkAllerror.specialty && (
                  <div className={classes.correct}>
                    Please enter valid specialty
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={classes.rightdown}>
            <div className={classes.qualificationContainer}>
              <div className={classes.overviewhead}>Qualifications :</div>
              {isEdit && (
                <input
                  type="text"
                  className={classes.qualifyinput}
                  onChange={(event) => handleChange("qualification", event)}
                  value={formData.qualification}
                ></input>
              )}
              {isEdit && (
                <div className={classes.qualifymessage}>
                  Please Enter "," Seperated Values
                </div>
              )}
              {!isEdit && (
                <p className={classes.qualifyDetails}>
                  {formData.qualification}
                </p>
              )}
            </div>
            <div className={classes.ratingContainer}>
              <p className={classes.rating}>Rating:</p>
              <div
                className={classes["star-rating"]}
                data-rating={formData.rating}
              ></div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={classes.headingPrimary}
          >
            Doctor Profile
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className={classes.btn}
            id={isEdit && classes.btnactive}
            onClick={handleEdit}
          >
            {isEdit ? "Submit" : "Edit"}
          </motion.button>
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
