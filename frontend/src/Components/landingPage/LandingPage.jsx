import classes from "./LandingPage.module.css";
import img from "../../assets/health_wellness.jpg";
import rightImg from "../../assets/landingMain.png";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className={classes.outercontainer}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div className={classes.left}>
            <img src={logo} alt="" className={classes.logo} />
            <div className={classes.heading}>
              <p className={classes.headingPrimary}>Building the</p>
              <p className={classes.headingPrimary}>future of Health</p>
              <p className={classes.headingPrimary}>together</p>
            </div>
            <div className={classes.paragraph}>
              Unlock the path to a healthier you! Explore expert advice,
              practical tips, and personalized insights on our health website.
              Your well-being journey starts here. Embrace a vibrant life today!
            </div>

            <div className={classes.down}>
              <Link to="/login">
                <button className={classes.button}>Get started</button>
              </Link>
              <img src={img} alt="" className={classes.img} />
            </div>
          </div>
          <img src={rightImg} alt="" className={classes.right} />
        </div>
      </div>
    </div>
  );
}
