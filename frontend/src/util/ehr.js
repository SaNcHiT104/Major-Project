export const fetchPatientEHR = async (patientId) => {
  if (!patientId) {
    return null;
  }
  try {
    const response = await fetch(
      `http://localhost:3000/healthhub/getEHR?patientId=${patientId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch EHR");
    }

    const ehrData = await response.json();
    return ehrData;
  } catch (error) {
    console.error("Error fetching EHR:", error);
  }
};

export const updateEhrAfterAppointment = async ({
  diagnosis,
  prescriptions,
  patientId,
}) => {
  // console.log(diagnosis, prescriptions, patientId, "in Ehr");
  try {
    const diagnosisArray = [];
    diagnosisArray.push(diagnosis);
    const response = await fetch(`http://localhost:3000/healthhub/updateEHR`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        diagnosis: diagnosisArray,
        prescriptions,
        patientId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to update EHR");
    }

    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error("Error occured while updating EHR:", error);
  }
};
