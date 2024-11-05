import { queryClient } from "./http";
export async function fetchPatientUpcomingAppointments({ status }) {
  const response = await fetch(`http://localhost:3000/doctor/me/appointments`, {
    method: "GET",
    //   body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAwMGQ4ZjVhZDdjYjkxNDNkMjUyMDIiLCJ1c2VyVHlwZSI6IkRPQ1RPUiIsImlhdCI6MTcxMTI3OTUwMywiZXhwIjoxNzExODg0MzAzfQ.Btencsk_-SzNIpkRT162pyj-TYmMztS8IdA7N8tTskU`,
    },
  });
  if (!response.ok) {
    const error = new Error("error occured while fetching appointments");
    error.message = response.error;
    throw error;
  }
  const data = await response.json();
  return data;
}
export async function updateAppointmentStatus({ id }) {
  //   console.log("hello" + id);
  const response = await fetch(`http://localhost:3000/doctor/me/appointment`, {
    method: "PATCH",
    body: JSON.stringify({ status: true, aptId: id }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAwMGQ4ZjVhZDdjYjkxNDNkMjUyMDIiLCJ1c2VyVHlwZSI6IkRPQ1RPUiIsImlhdCI6MTcxMTI3OTUwMywiZXhwIjoxNzExODg0MzAzfQ.Btencsk_-SzNIpkRT162pyj-TYmMztS8IdA7N8tTskU`,
    },
  });
  if (!response.ok) {
    const error = new Error("error occured while  appointments");
    error.message = response.error;
    throw error;
  }
  return response.json();
}
