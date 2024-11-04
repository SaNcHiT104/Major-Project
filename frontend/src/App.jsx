import PatientProfile from "./Components/Patient/PatientProfile/PatientProfile.jsx";
import WelcomePage from "./Components/authComponent/WelcomePage.jsx";
import LandingPage from "./Components/landingPage/LandingPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorProfile from "./Components/Doctor/DoctorProfile/DoctorProfile.jsx";
// import NavBar from "./UI/NavBar";
import Header from "./Components/HomePage/Header.jsx";
import "./index.css";
import Appointment from "./Components/Appointments/Appointment.jsx";
import DoctorProfilePatient from "./Components/Doctor/DoctorProfilePatient/DoctorProfilePatient.jsx";
import PatientRoot from "./Components/Patient/PatientRoute/PatientRoot.jsx";
import SignUp from "./Components/authComponent/Signup.jsx";
import Education from "./Components/Education/Education.jsx";
import DoctorRoot from "./Components/Doctor/DoctorRoute/DoctorRoot.jsx";
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
          element: <SignUp />,
        },
        {
          path: "login",
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
              element: <Education />,
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
              element: <Education />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
  // return <DoctorProfilePatient />;
}
