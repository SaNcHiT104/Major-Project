import { Outlet } from "react-router-dom";
import NavBarDoctor from "../../../UI/NavBarDoctor";
import FooterDoctor from "../../../UI/FooterDoctor";

export default function DoctorRoot() {
  return (
    <>
      <NavBarDoctor />
      <Outlet />
      <FooterDoctor />
    </>
  );
}
