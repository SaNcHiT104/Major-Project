import { Navigate, useLocation } from "react-router-dom";

const AuthRoute = ({ children }) => {
  // console.log("FROM AUTHROUTE");
  const token = localStorage.getItem("token");
  // console.log(token);
  const isAuthenticated = token !== null;
  // console.log(isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login with the current location as state
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default AuthRoute;

// custom hook for route protection so an authenticated user can't access the login/signup pages
const redirectToHome = () => {
  const userType = localStorage.getItem("userType").toLowerCase(); // Assuming a function to get user type
  const userId = localStorage.getItem("userId"); // Assuming a function to get user ID

  // Construct the appropriate home page path based on user type
  const homePath = `/${userType}/${userId}/home`;

  // Redirect to the home page
  return <Navigate to={homePath} replace />;
};

export { redirectToHome };
