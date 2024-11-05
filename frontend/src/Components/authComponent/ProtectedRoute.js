import React, { useEffect, useState } from "react";
import { Navigate} from "react-router-dom";
import { getDecodedTokenInfoFromToken } from "../../util/http";

const ProtectedRoute = ({ children, userType }) => {
    const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedInfo = await getDecodedTokenInfoFromToken(token);
        setDecodedToken(decodedInfo);
      }
    };
    fetchData();
  }, []); // Empty dependency array to fetch data only once
  // Pass required userType as a prop
  console.log(userType);
  if (decodedToken === null) {
    return;
  }
  const userId = localStorage.getItem("userId");
  // console.log(decodedToken);
  if (!userId || !decodedToken || decodedToken.userType !== userType || decodedToken.userId !== userId) {
    return <Navigate to="/login" replace />; // Redirect to login on invalid user
  }
  console.log(children)
  return <>{children}</>; // Render children if authorized
};

export default ProtectedRoute;
