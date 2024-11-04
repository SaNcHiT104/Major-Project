export const users = [
    { id: 'e1', email: "sahil@gmail.com", password: "Sahil@jiit", userType: "DOCTOR" },
  ];

export const isEmailCorrect = (email) => email.includes("@");

export const isPasswordCorrect = (pwd) =>
  pwd.length >= 8 && !pwd.includes("password");

export const isConfirmPasswordCorrect = (pwd, cnfpwd) => cnfpwd === pwd;

export const isUserTypeCorrect = (userType) => {
  userType = userType.trim();
  if (userType !== "ADMIN" && userType !== "PATIENT" && userType !== "DOCTOR")
    return false;
  return true;
};
