import classes from "./NavBar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import img from "../assets/logo.jpg";
export default function NavBar() {
  const location = useLocation();
  return (
    <nav className={classes.header}>
      <img src={img} className={classes.logo} alt="Logo"></img>
      <div className={classes.innerContainer}>
        <button className={classes.allnav}>
          <NavLink
            to="/patient/me/home"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span>Home</span>
          </NavLink>
        </button>
        <button className={classes.allnav}>
          {location.pathname.includes("patient") ? (
            <NavLink
              to="/patient/me/findAdoctor"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <span>Find a Doctor</span>
            </NavLink>
          ) : (
            <NavLink
              to="/doctor/me/appointment"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <span>Appointments</span>
            </NavLink>
          )}
        </button>
        <button className={classes.allnav}>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span>Education</span>
          </NavLink>
        </button>
        <button className={classes.allnav}>
          <NavLink
            to="/patient/me/profile"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span>Profile</span>
          </NavLink>
        </button>
      </div>
      <div className={classes.logout}>
        <button class={classes.Btn}>
          <div class={classes.sign}>
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>

          <div class={classes.text}>Logout</div>
        </button>
      </div>
    </nav>
  );
}
