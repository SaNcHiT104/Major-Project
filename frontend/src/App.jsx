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
import DoctorList from "./Components/Doctor/DoctorList/DoctorListHead";
import PregnancyPanic from "./Components/Education/PregnancyPanic.js";
import SexualityWTF from "./Components/Education/SexualityWTF.js";
import NavigatingConsent from "./Components/Education/NavigatingConsent.js";
import SexualAnatomy from "./Components/Education/SexualAnatomy.js";
import Education from "./Components/Education/Education.jsx";
import DoctorRoot from "./Components/Doctor/DoctorRoute/DoctorRoot.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthRoute, {
  redirectToHome,
} from "./Components/authComponent/AuthRoute.js";

// import { queryClient } from "./util/appointment.js";
export default function App() {
  const isAuthenticated = localStorage.getItem("token") !== null;
  console.log(isAuthenticated)
  // const redirectToHome = useRedirectToLogin();
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
          element: isAuthenticated ? redirectToHome() : <SignUp />,
        },
        {
          path: "login",
          element: isAuthenticated ? redirectToHome() : <WelcomePage />,
        },
        {
          path: "patient/:id",
          element: (
            <AuthRoute>
              <PatientRoot />
            </AuthRoute>
          ),
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

              children: [
                {
                  path: "doctorprofile",
                  element: <DoctorProfilePatient />,
                },
                {
                  index: true,
                  element: <DoctorList />,
                },
              ],
            },
            {
              path: "education",
              children: [
                {
                  index: true,
                  element: <Education />,
                },
                {
                  path: "sexuality_wtf_is_it_anyway",
                  element: <SexualityWTF />,
                },
                {
                  path: "pregnancy_panic",
                  element: <PregnancyPanic />,
                },
                {
                  path: "navigating_consent",
                  element: <NavigatingConsent />,
                },
                {
                  path: "sexual_anatomy",
                  element: <SexualAnatomy />,
                },
              ],
            },
          ],
        },
        {
          path: "doctor/:id",
          element: (
            <AuthRoute>
              <DoctorRoot />
            </AuthRoute>
          ),
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
              children: [
                {
                  index: true,
                  element: <Education />,
                },
                {
                  path: "sexuality_wtf_is_it_anyway",
                  element: <SexualityWTF />,
                },
                {
                  path: "pregnancy_panic",
                  element: <PregnancyPanic />,
                },
                {
                  path: "navigating_consent",
                  element: <NavigatingConsent />,
                },
                {
                  path: "sexual_anatomy",
                  element: <SexualAnatomy />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
  // return <DoctorProfilePatient />;
}
