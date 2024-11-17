import React from "react";
import classes from "./EducationSecondComponent.module.css";
import EducationSecondComponentCard from "./EducationSecondComponentCard";
import img from "../../assets/EducationSecondComponent.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
export default function EducationSecondComponent() {
  const { scrollY } = useScroll();
  const opacityX = useTransform(
    scrollY,
    [300, 400, 500, 550, 650, 700],
    [0.4, 0.7, 0.8, 0.85, 0.9, 1]
  );
  return (
    <div className={classes.secondContainer}>
      <motion.div
        className={classes.left}
        style={{
          opacity: opacityX,
        }}
      >
        <EducationSecondComponentCard
          heading={"Sexuality: WTF Is It, Anyway?"}
          paragraph={
            "Confused about the vast and complex world of sexuality? This article breaks it down, exploring how it encompasses our bodies, desires, relationships, and more."
          }
          src="sexuality_wtf_is_it_anyway"
        />
        <EducationSecondComponentCard
          heading={"The Pregnancy Panic Companion"}
          paragraph={
            "Feeling the panic of a potential pregnancy scare? This guide offers calming advice, next steps, and busts common myths to help you navigate this stressful situation clearly."
          }
          src="pregnancy_panic"
        />
        <EducationSecondComponentCard
          heading={"Navigating Consent"}
          paragraph={
            "Unsure about navigating the complexities of sexual consent? This guide breaks it down, explaining what it means, why it matters, and how to ensure a safe and enjoyable sexual experience for everyone involved."
          }
          src="navigating_consent"
        />
        <EducationSecondComponentCard
          heading={"Sexual Anatomy For Every Body"}
          paragraph="Pleasure zones are everywhere, and your brain's the real pleasure master.
          Discover how hormones and experiences shape your desires in this article. "
          src="sexual_anatomy"
        />
      </motion.div>
      <div className={classes.imageSection}>
        <img
          src={img}
          alt="image_of_book_library"
          className={classes.right}
        ></img>
      </div>
    </div>
  );
}
