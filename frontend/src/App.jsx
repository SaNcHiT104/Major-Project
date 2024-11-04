<<<<<<< HEAD
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
=======
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
>>>>>>> c48205a858c305a1ae666a8e1ff984bc7fa1e57f
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
<<<<<<< HEAD
          element: <SignUp />,
        },
        {
          path: "login",
=======
>>>>>>> c48205a858c305a1ae666a8e1ff984bc7fa1e57f
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
<<<<<<< HEAD
          element: <WelcomePage />,
=======
          element: <DoctorRoot />,
>>>>>>> c48205a858c305a1ae666a8e1ff984bc7fa1e57f
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
