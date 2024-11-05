import React from 'react'
import classes from './Doctorexpertise.module.css';

export default function Doctorexpertise() {
  return (
    <div className={classes.Doctorexpertise}>
        <div className={classes.Doctorexpertisetitle}><h2>Doctor Specialisation and Expertise</h2></div>
        <div className={classes.expertisecards}>
            <div className={classes.card}>
                <div className={classes.card_img}><img src="https://www.medanta.org/storage/spacialities/January2024//iTfnXswt8SpCvU8prfkOIaqeQ8dFSU-metaQ2FyZGlhYyBDYXJlLnBuZw==-.png"></img></div>
                <div className={classes.card_text}>Heart Transplant</div>
            </div>
            <div className={classes.card}>
                <div className={classes.card_img}><img src="https://www.medanta.org/storage/spacialities/January2024//iTfnXswt8SpCvU8prfkOIaqeQ8dFSU-metaQ2FyZGlhYyBDYXJlLnBuZw==-.png"></img></div>
                <div className={classes.card_text}>Heart Transplant</div>
            </div>
            <div className={classes.card}>
                <div className={classes.card_img}><img src="https://www.medanta.org/storage/spacialities/January2024//iTfnXswt8SpCvU8prfkOIaqeQ8dFSU-metaQ2FyZGlhYyBDYXJlLnBuZw==-.png"></img></div>
                <div className={classes.card_text}>Heart Transplant</div>
            </div>
            <div className={classes.card}>
                <div className={classes.card_img}><img src="https://www.medanta.org/storage/spacialities/January2024//iTfnXswt8SpCvU8prfkOIaqeQ8dFSU-metaQ2FyZGlhYyBDYXJlLnBuZw==-.png"></img></div>
                <div className={classes.card_text}>Heart Transplant</div>
            </div>
        </div>
    </div>
  )
}
