import jwt from "jsonwebtoken";
import Patient from "../database/UserModels/Patient.js";
import Doctor from "../database/UserModels/Doctor.js";
import Admin from "../database/UserModels/Admin.js";
import { KEY } from "../AuthManager/auth.js";
/* Check whether the token is verified for the user or not. Even if the token is verified, 
check whether the decoded token has correct userType to access the path or not, we will simply
pass an array of allowed Users to the middleware to do this. */
const checkAuthMiddleware = (allowedModels) => {
  return async (req, res, next) => {
    try {
      // Get the JWT token from the request headers
      //console.log(req.headers);
      const token = req.headers.authorization.replace("Bearer ", "");
      // console.log(token);
      if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
      }
      const decodedToken = jwt.verify(token, KEY);
      // console.log(decodedToken);

      /* Find the user in the database of the allowed Models and if found, allow the user access the 
    page and send the userType so that the page displays data based on userType. An example would be
     the about page of doctor. The doctor can view the profile, but not book an appointment or create
      a review. While the same is allowed and displayed to the user as an option! */
      let user;
      // console.log("SIZE: " + allowedModels.length);
      for (let i = 0; i < allowedModels.length; i++) {
        // console.log(model);
        if (allowedModels[i] === "ADMIN") {
          user = await Admin.findOne({
            _id: decodedToken._id,
            "tokens.token": token,
          });
        } else if (allowedModels[i] === "PATIENT") {
          user = await Patient.findOne({
            _id: decodedToken._id,
            "tokens.token": token,
          });
        } else if (allowedModels[i] === "DOCTOR") {
          user = await Doctor.findOne({
            _id: decodedToken._id,
            "tokens.token": token,
          });
        }
        // if allowed user model doesn't match with the userType defined in token, send error!
        if (user && allowedModels[i] !== decodedToken.userType) {
          throw new Error();
        }
        // user with correct type is found
        if (user) {
          // console.log("USER or NOT" + user);
          req.user = user;
          req.token = token;
          break;
        }
      }
      // if no user in allowedModels found, return error
      if (!user) {
        throw new Error();
      }
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  };
};

export default checkAuthMiddleware;
