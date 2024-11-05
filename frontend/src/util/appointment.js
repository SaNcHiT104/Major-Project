export async function fetchPatientUpcomingAppointments() {
  const response = await fetch(`http://localhost:3000/doctor/me/appointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  const response = await fetch(`http://localhost:3000/doctor/me/appointment`, {
    method: "PATCH",
    body: JSON.stringify({ status: true, aptId: id }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    const error = new Error("error occured while  appointments");
    error.message = response.error;
    throw error;
  }
  return response.json();
}

export async function addPrescription() {}
