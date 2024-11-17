import classes from "./MentalHealth.module.css";
import img from "../../../assets/mentalHealth.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import QuizModal from "./QuizModal";
export default function MentalHealth() {
  const [isModalOpen, changeModal] = useState(false);
  console.log(isModalOpen);
  return (
    <>
      {
        <div className={classes.mainContainer}>
          <div className={classes.top}>
            <div className={classes.heading}>Mental Health</div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.left}>
              <img src={img} alt="Mental Health" />
            </div>
            <div className={classes.right}>
              <div className={classes.content}>
                <p>
                  Mental health is just as important as physical health, but
                  often, it doesn't get the attention it deserves. Your mental
                  well-being impacts how you think, feel, and interact with the
                  world around you. At HealthHub, we believe that understanding
                  mental health is the first step toward nurturing it.
                </p>
                <p>
                  Curious about your mental well-being? Take our quick,
                  insightful quiz! Not only will it help you learn more about
                  mental health, but it will also give you valuable tips on how
                  to maintain a balanced and healthy mind. Whether you're new to
                  the topic or looking to deepen your understanding, this quiz
                  is a simple yet powerful way to start your journey toward a
                  healthier mindset.
                </p>
                <p>
                  Remember, taking care of your mind is just as essential as
                  taking care of your body. So why wait? Play the quiz now and
                  take the first step toward a happier, healthier you!
                </p>
              </div>
              <motion.button
                className={classes.btn}
                whileHover={{ scale: 1.1 }}
                on
                onClick={() => changeModal(true)}
              >
                Play Quiz
              </motion.button>
            </div>
          </div>
        </div>
      }
      <motion.div>
        {isModalOpen && <QuizModal onClose={() => changeModal(false)} />}
      </motion.div>
    </>
  );
}
