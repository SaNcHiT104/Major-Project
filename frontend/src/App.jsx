import PatientProfile from "./components/Patient/PatientProfile/PatientProfile";
import WelcomePage from "./components/authComponent/WelcomePage";
import LandingPage from "./components/landingPage/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorProfile from "./components/Doctor/DoctorProfile/DoctorProfile";
// import NavBar from "./UI/NavBar";
import Header from "./components/HomePage/Header";
import "./index.css";
import Appointment from "./components/Appointments/Appointment";
import DoctorProfilePatient from "./components/Doctor/DoctorProfilePatient/DoctorProfilePatient";
import PatientRoot from "./components/Patient/PatientRoute/PatientRoot";
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
          path: "signUp",
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
              element: <LandingPage />,
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
