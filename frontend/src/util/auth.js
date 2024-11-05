// simply remove the token and redirect the user to the home page.
export function logoutAction() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
}
