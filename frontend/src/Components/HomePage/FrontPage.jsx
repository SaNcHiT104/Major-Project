import { NavLink, useLocation } from "react-router-dom";
import classes from "./FrontPage.module.css";
// import img from "../../assets/headerimage.jpg";
export default function FrontPage() {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.left}>
          <p className={classes.heading_primary}>Taking care of</p>
          <p className={classes.heading_primary}>your health is our</p>
          <p className={classes.heading_primary}>top priority</p>
          <div className={classes.leftdown}>
            <p className={classes.heading_secondary}>
              Being healthy is more than just not getting sick, it entails
              mental,physical
            </p>
            <p className={classes.heading_secondary}>
              and social well being. It's not just about treatment, it's about
              healing.
            </p>
            <NavLink to="/patient/me/findAdoctor"></NavLink>
            {location.pathname == "/patient/me/home" ? (
              <button className={classes.findDoctor}>Find A doctor</button>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* <img src={img} className={classes.right} /> */}
      </div>
    </header>
  );
}
