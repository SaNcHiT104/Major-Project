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


export const createPatientAppointment=async({fullname,contactInfo,email,date,description,doctor})=>{
  try{
    console.log("This is from arhcie"+doctor);
    const response=await fetch("http://localhost:3000/patient/me/appointment",
    {
      method: "POST",
      body:JSON.stringify({
        contactInfo,
        email,
        date,
        description,
        doctor,
      }), 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    if (!response.ok) {
      // console.log("Could not create appointment");
      throw new Error("Could not create appointment");
    }
    const resData = await response.json();
    console.log("resdata",resData);
    return resData;
  }
  catch (error) {
    console.log(error);
  }
}