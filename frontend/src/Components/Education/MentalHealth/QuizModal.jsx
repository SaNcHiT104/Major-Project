import classes from "./QuizModal.module.css";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
export default function QuizModal({ onClose }) {
  useEffect(() => {
    // Add the no-scroll class when the modal is open
    document.body.classList.add("no-scroll");

    // Cleanup function to remove the no-scroll class when the modal closes
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const quizQuestions = [
    {
      question: "How often do you feel overwhelmed by stress?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you have trouble sleeping because of stress?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you feel irritable or angry due to stress?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you have difficulty concentrating?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question:
        "How often do you feel like you can't control the important things in your life?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question:
        "How often do you experience headaches or body pain related to stress?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you feel tired or fatigued even after resting?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question:
        "How often do you feel anxious or worried about everyday tasks?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question:
        "How often do you feel a lack of motivation or energy to complete tasks?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question:
        "How often do you withdraw from social situations due to stress?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    // Add more questions as needed, up to 10
  ];
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(""));
  const [result, setResult] = useState(null);

  // Scoring mechanism based on the selected answers
  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const scoreMap = {
      Never: 0,
      Rarely: 1,
      Sometimes: 2,
      Often: 3,
      Always: 4,
    };
    // Sum the scores based on user answers
    const totalScore = answers.reduce(
      (total, answer) => total + scoreMap[answer],
      0
    );

    // Determine the stress level based on the total score
    if (totalScore <= 10) {
      setResult("Low Stress");
    } else if (totalScore <= 20) {
      setResult("Moderate Stress");
    } else if (totalScore <= 30) {
      setResult("High Stress");
    } else {
      setResult("Very High Stress");
    }
  };

  const handleSubmit = () => {
    calculateScore(); // Calculate the score and determine the result
  };

  const modalRef = useRef();

  // Close the modal if a click happens outside the modal content
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); // Call the onClose function if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener for detecting clicks outside the modal
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className={classes.modal}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
    >
      <div className={classes.modalContent} ref={modalRef}>
        <div className={classes.heading}>Mental Health Quiz</div>
        <div className={classes.quizContainer}>
          {quizQuestions.map((quiz, index) => (
            <div key={index} className={classes.quizQuestion}>
              <p>{quiz.question}</p>
              <div className={classes.optionGroup}>
                {quiz.options.map((option, optIndex) => (
                  <div key={optIndex} className={classes.option}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        onChange={() => handleAnswerChange(index, option)}
                        required
                        className={classes.radio}
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {result && (
          <div className={classes.resultMessage}>
            <h3>Your Stress Level: {result}</h3>
            <p>
              {result === "Low Stress" &&
                "Your stress levels seem to be low, which is a great sign! Keep up with healthy habits to maintain your well-being."}
              {result === "Moderate Stress" &&
                "You are experiencing a moderate amount of stress. Consider integrating stress-relieving practices into your daily routine."}
              {result === "High Stress" &&
                "Your stress levels are high. It may be helpful to speak with a professional or find stress-management strategies."}
              {result === "Very High Stress" &&
                "You are facing very high levels of stress. It’s important to seek support and address the causes of this stress as soon as possible."}
            </p>
          </div>
        )}

        {!result && (
          <motion.button
            className={classes.submitBtn}
            onClick={handleSubmit}
            whileHover={{ scale: 1.1 }}
          >
            Submit
          </motion.button>
        )}
        <motion.button
          className={classes.closeBtn}
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  );
}
