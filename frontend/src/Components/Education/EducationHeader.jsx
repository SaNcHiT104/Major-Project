import classes from "./EducationHeader.module.css";
import img from "../../assets/educationHeader.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
export default function FrontPage() {
  const { scrollY } = useScroll();
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 250, 300, 400, 500, 550, 800],
    [1, 0.9, 0.85, 0.8, 0.7, 0.6, 0.4, 0]
  );
  return (
    <header className={classes.header}>
      <motion.div
        className={classes.container}
        style={{
          opacity: opacityCity,
        }}
      >
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
          </div>
        </div>
        {/* <img src={img} className={classes.right} /> */}
      </motion.div>
    </header>
  );
}
