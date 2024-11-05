import { NavLink, useLocation } from "react-router-dom";
import classes from "./FrontPage.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/headerimage.jpg";
export default function FrontPage() {
  const { scrollY } = useScroll();
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 250, 300, 400, 500, 550, 700],
    [1, 0.9, 0.85, 0.8, 0.7, 0.6, 0.4, 0]
  );
  const scaleCity = useTransform(scrollY, [0, 200, 600], [1, 1.2, 1.3]);
  const location = useLocation();
  const userId = localStorage.getItem("userId");
  return (
    <header className={classes.header}>
      <motion.div
        className={classes.container}
        style={{
          opacity: opacityCity,
        }}
      >
        <motion.div
          className={classes.left}
          style={{
            opacity: opacityCity,
            // scale: scaleCity,
          }}
        >
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
            <NavLink to={`/patient/${userId}/findAdoctor`}>
              {location.pathname.includes("patient") && (
                <motion.button
                  className={classes.findDoctor}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  Find A doctor
                </motion.button>
              )}
            </NavLink>
          </div>
        </motion.div>
        {/* <img src={img} className={classes.right} /> */}
      </motion.div>
    </header>
  );
}
