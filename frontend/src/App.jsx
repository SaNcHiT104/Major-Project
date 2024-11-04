import PatientProfile from "./Components/Patient/PatientProfile/PatientProfile";
import WelcomePage from "./Components/authComponent/WelcomePage";
import LandingPage from "./Components/landingPage/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorProfile from "./Components/Doctor/DoctorProfile/DoctorProfile";
// import NavBar from "./UI/NavBar";
import Header from "./Components/HomePage/Header";
import "./index.css";
import Appointment from "./Components/Appointments/Appointment";
import DoctorProfilePatient from "./Components/Doctor/DoctorProfilePatient/DoctorProfilePatient";
import PatientRoot from "./Components/Patient/PatientRoute/PatientRoot";
import DoctorRoot from "./Components/Doctor/DoctorRoute/DoctorRoot";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "signup",
          element: <WelcomePage />,
        },
        {
          path: "patient/me",
          element: <PatientRoot />,
          children: [
            {
              path: "home",
              element: <Header />,
            },
            {
              path: "profile",
              element: <PatientProfile />,
            },
            {
              path: "findADoctor",
              element: <DoctorProfilePatient />,
            },
            {
              path: "education",
              element: <LandingPage />,
            },
          ],
        },
        {
          path: "doctor/me",
          element: <DoctorRoot />,
          children: [
            {
              path: "home",
              element: <Header />,
            },
            {
              path: "profile",
              element: <DoctorProfile />,
            },
            {
              path: "appointment",
              element: <Appointment />,
            },
            {
              path: "education",
              element: <LandingPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
  // return <DoctorProfilePatient />;
}
