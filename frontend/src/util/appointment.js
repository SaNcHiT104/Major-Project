// import { QueryClient } from "@tanstack/react-query";

export async function fetchPatientUpcomingAppointments({ status }) {
  const response = await fetch(
    `http://localhost:3000/patient/me/appointments`,
    {
      method: "GET",
      body: JSON.stringify({ status }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (!response.ok) {
    const error = new Error("error occured while fetching appointments");
    error.message = response.error;
    throw error;
  }
  const data = await response.json();
  return data;
}
