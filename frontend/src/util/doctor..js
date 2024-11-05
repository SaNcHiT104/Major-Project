import { queryClient } from "./http";
export async function fetchDoctorProfile() {
  const response = await fetch("http://localhost:3000/doctor/me/profile", {
    method: "GET",
    //   body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAwMGQ4ZjVhZDdjYjkxNDNkMjUyMDIiLCJ1c2VyVHlwZSI6IkRPQ1RPUiIsImlhdCI6MTcxMTI3OTUwMywiZXhwIjoxNzExODg0MzAzfQ.Btencsk_-SzNIpkRT162pyj-TYmMztS8IdA7N8tTskU`,
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
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAwMGQ4ZjVhZDdjYjkxNDNkMjUyMDIiLCJ1c2VyVHlwZSI6IkRPQ1RPUiIsImlhdCI6MTcxMTI3OTUwMywiZXhwIjoxNzExODg0MzAzfQ.Btencsk_-SzNIpkRT162pyj-TYmMztS8IdA7N8tTskU`,
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
