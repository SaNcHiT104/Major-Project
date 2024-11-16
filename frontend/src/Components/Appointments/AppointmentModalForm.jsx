import React, { useState } from "react";
import classes from "./AppointmentModalForm.module.css";
function AppointmentModalForm({ handleClose, handleSubmitLast, isPending }) {
  const [dropdowns, setDropdowns] = useState([{ id: 1, value: "" }]);
  const [handleDis, changeHandledis] = useState(undefined);
  //   console.log(handleDis);
  const handleDropdownChange = (index, value) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[index].value = value;
    setDropdowns(updatedDropdowns);
    // console.log(dropdowns);
    // console.log(handleDis);
  };

  const handleAddDropdown = () => {
    const newId = dropdowns.length + 1;
    setDropdowns([...dropdowns, { id: newId, value: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    const newobj = [...dropdowns, handleDis];
    handleSubmitLast(newobj);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.uppercontainer}>
        <div className={classes.heading}>Diagnosis:</div>
        <div>
          <select
            className={classes.select}
            name="disease"
            onChange={(e) => changeHandledis(e.target.value)}
          >
            <option value="">Select Disease</option>
            <option value="dengue">Dengue</option>
            <option value="typhoid">Typhoid</option>
            <option value="fever">Fever</option>
          </select>
        </div>
      </div>
      <div className={classes.medicine}>
        <div className={classes.heading}>Prescription:</div>
        <div>
          {dropdowns.map((dropdown, index) => (
            <div key={dropdown.id}>
              <label>
                <select
                  className={classes.select}
                  value={dropdown.value}
                  onChange={(e) => handleDropdownChange(index, e.target.value)}
                >
                  <option value="">Select an option</option>
                  {/* Your dropdown options go here */}
                  <option value="Paracetamol">Paracetamol</option>
                  <option value="Calpol">Calpol</option>
                  <option value="Crocin">Crocin</option>
                </select>
              </label>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={classes.button}
        onClick={handleAddDropdown}
      >
        <span class={classes.button__text}>Add More</span>
        <span class={classes.button__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            class="svg"
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>
      <div className="modalbtn-container">
        {!isPending && (
          <>
            <button class="cssbuttons-io-button">
              Submit
              <div class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
            <button className="cancelbtn" onClick={handleClose}>
              Cancel
            </button>
          </>
        )}
        {isPending && <p>Submiting.......</p>}
      </div>
    </form>
  );
}

export default AppointmentModalForm;
