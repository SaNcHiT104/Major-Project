import React from 'react'
import classes from './Doctorfaq.module.css';
export default function Doctorfaq() {
  return (
    <div className={classes.Doctorfaq}>
        <div className={classes.faqhead}>Frequently Asked Questions</div>
        <div className={classes.faq}>
            <div className={classes.faqquestion}>How soon can I make an appointment with Dr. Amy Walker?</div>
                <br/>
            <div className={classes.faqans}>Generally, Dr. Amy Walker has appointments available on Zocdoc within 1 week. You can see Dr. Walker's earliest availability on Zocdoc and make an appointment online.</div>
        </div>
        <div className={classes.faq}>
            <div className={classes.faqquestion}>How soon can I make an appointment with Dr. Amy Walker?</div>
                <br/>
            <div className={classes.faqans}>Generally, Dr. Amy Walker has appointments available on Zocdoc within 1 week. You can see Dr. Walker's earliest availability on Zocdoc and make an appointment online.</div>
        </div>
        <div className={classes.faq}>
            <div className={classes.faqquestion}>How soon can I make an appointment with Dr. Amy Walker?</div>
                <br/>
            <div className={classes.faqans}>Generally, Dr. Amy Walker has appointments available on Zocdoc within 1 week. You can see Dr. Walker's earliest availability on Zocdoc and make an appointment online.</div>
        </div>
        <div className={classes.faq}>
            <div className={classes.faqquestion}>What are common reasons for patients to see Dr. Amy Walker?</div>
                <br/>
            <div className={classes.faqans}>Dr. Amy Walker frequently sees patients for Bridge, Dental Cleaning, Dental Consultation, Pediatric Dentist Consultation, and Root Canal. You can see other visit reasons for Dr. Amy Walker on their profile.</div>
        </div>
    </div>
  )
}
