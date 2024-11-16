// Modal.js
import React, { useState } from "react";
import "./AppointMentModal.css";
import { motion } from "framer-motion";
import img from "./../../assets/maleProfile.avif";
import AppointmentModalForm from "./AppointmentModalForm";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../util/http";
import { updateAppointmentStatus } from "../../util/appointment";
import { updateEhrAfterAppointment } from "../../util/ehr";
function Modal({ onClose, obj }) {
  // console.log(obj);
  const { data, mutate: ehrMutate } = useMutation({
    mutationFn: updateEhrAfterAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["patient"],
      });
    },
  });
  const {
    data: mutateData,
    mutate,
    isPending,
    isError: mutateError,
    error: mutateer,
  } = useMutation({
    mutationFn: updateAppointmentStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["patient"],
      });
    },
  });
  function hasUndefined(arr) {
    // if (arr[1] === undefined) return false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].value === "") return false;
    }
    if (arr[arr.length - 1] === undefined) return false;
    return true;
  }
  function getDate() {
    const currDate = new Date();
    const year = currDate.getFullYear();
    const month = String(currDate.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
    const day = String(currDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  function createNewObject(obj) {
    const { value } = obj;
    const currentDate = getDate();

    return {
      date: currentDate,
      medication: value,
      frequency: "Once daily",
      dosage: "10mg",
    };
  }
  function getEhrObject(formObj) {
    const objArray = Object.values(formObj);
    const date = getDate();
    // diagnosisObj created
    const diagnosisObj = {
      diagnosis: objArray[objArray.length - 1],
      date: date,
    };
    console.log(formObj);
    //prescriptionObj
    const prescriptionObj = objArray.slice(0, -1).map(createNewObject);
    console.log(prescriptionObj);
    //date,medication,frequency,dosage
    return [diagnosisObj, prescriptionObj];
  }
  function handleSubmit(formObj) {
    const isUndefined = hasUndefined(formObj);
    if (!isUndefined) {
      alert("Please fill all the details");
    } else {
      mutate({ id: obj[0]._id });
      const ehrObject = getEhrObject(formObj);
      const objArray = Object.values(ehrObject);
      // console.log(obj, "hello");
      ehrMutate({
        diagnosis: objArray[0],
        prescriptions: objArray[1],
        patientId: obj[0].owner._id,
      });
      // console.log(ehrObject);
      handleClose();
    }
    // console.log(formObj);
  }
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      handleClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal">
        <button className="modal-close" onClick={handleClose}>
          ×
        </button>
        <div className="modal-content">
          <h2>Patient Details</h2>
          <div className="modal-container">
            <div className="modal-upper">
              <img src={img} className="modal-img" alt="" />
              <ul className="modal-patientProfile">
                <li>
                  <strong>Name:</strong> {obj[0].owner.name}
                </li>
                <li>
                  <strong>Gender:</strong> {obj[0].owner.gender}
                </li>
                <li>
                  <strong>ContactInfo:</strong>
                  {obj[0].contactInfo}
                </li>
                <li>
                  <strong>Email:</strong> {obj[0].email}
                </li>
              </ul>
            </div>
            <div className="modal-down">
              <AppointmentModalForm
                isPending={isPending}
                handleSubmitLast={handleSubmit}
                handleClose={handleClose}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
