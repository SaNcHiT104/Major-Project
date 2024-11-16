export async function fetchSingleDoctor(id) {
  console.log("hello", id);
  const response = await fetch(
    `http://localhost:3000/patient/me/doctor_list?doctorId=${id}`,
    {
      method: "GET",
      //   body: JSON.stringify({ status }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    const error = new Error("error occured while fetching patientProfile");
    error.message = response.error;
    throw error;
  }
  const data = await response.json();
  console.log(data);
  return data;
}
export async function fetchDoctorProfile() {
  const response = await fetch("http://localhost:3000/doctor/me/profile", {
    method: "GET",
    //   body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    const error = new Error("error occured while fetching patientProfile");
    error.message = response.error;
    throw error;
  }
  const data = await response.json();
  console.log(data);
  return data;
}
export async function updateDoctorProfile({
  name,
  officeContactInfo,
  officeAddress,
  gender,
  age,
  specialty,
  qualification,
}) {
  const response = await fetch("http://localhost:3000/doctor/me/profile", {
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      officeContactInfo: officeContactInfo,
      officeAddress: officeAddress,
      gender: gender,
      specialty: specialty,
      age: age,
      qualification: qualification,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    const error = new Error("error occured while updating patientProfile");
    error.message = response.error;
    throw error;
  }
  //   console.log(response.json());
  return response.json();
}
