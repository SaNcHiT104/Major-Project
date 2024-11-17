import { queryClient } from "./http";
export async function updatePatientProfile({
  name,
  contact,
  address,
  gender,
  dateOfBirth,
  allergies,
  age,
}) {
  //   console.log(contact);

  const response = await fetch("http://localhost:3000/patient/me/profile", {
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      contactInfo: contact,
      address: address,
      gender: gender,
      DOB: dateOfBirth,
      allergies: allergies,
      age: age,
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
export async function fetchPatientProfile() {
  const response = await fetch("http://localhost:3000/patient/me/profile", {
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
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAwMGFiNTVhZDdjYjkxNDNkMjUxYzUiLCJ1c2VyVHlwZSI6IlBBVElFTlQiLCJpYXQiOjE3MTEyOTI0NTUsImV4cCI6MTcxMTg5NzI1NX0.lswoZrNtTAPTp3JIWhxtqGSBd4xt8hr4R06CX7b7Dzw

//jainsanchit14112002@gmail.com
//Hello@123

export const fetchDoctorList = async ( filters ) => {
  console.log("FILTERS: " + {filters});
  let url = "http://localhost:3000/patient/me/doctor_list?";
  const searchParams = {};
  try {
    if (filters.rating) {
      searchParams.rating = filters.rating;
    }
    if (filters.specialty) {
      searchParams.specialty = filters.specialty;
    }
    if (filters.cityName) {
      searchParams.cityName = filters.cityName;
    }
    url += new URLSearchParams(searchParams);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      console.log("Could not get doctor list");
      throw new Error("Could not get doctor list");
    }
    const resData = await response.json();
    console.log("resdata", resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};
