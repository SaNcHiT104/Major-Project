import React from 'react'
import classes from './DoctorCard.module.css'
import { useState } from 'react';
import SpecialisationList from './SpecialisationList';
import QualificationList from './QualificationList';
import {Link} from 'react-router-dom';
export default function DoctorCard(props) {
    const [expertise,setExpertise]=useState(true);
    const[quali,setQualification]=useState(false);
    function handleExpertise()
    {
        setExpertise(true);
        setQualification(false);
    }
    function handleQualification()
    {
        setQualification(true);
        setExpertise(false);
    }
  return (
    <div>
        <div className={classes.doctorlist_cards}>
            <div className={classes.doctorlist_card}>
                <div className={classes.doctorlist_top}>
                    <div className={classes.doctorlist_left}>
                        <img src="https://www.medanta.org/storage/all-doctor-with-slug/dr-arvind-kumar.png"></img>
                    </div>
                    <div className={classes.doctorlist_right}>
                        <div className={classes['content-top']}>
                            <div className={classes.name}>{props.name}</div>
                            <div className={classes.post}>{props.post}</div>
                        </div>
                        <hr/>
                        <div className={classes['content-bottom']}>
                            <div className={classes.row1}>
                                <div className={classes.field}>{props.field}</div>
                                <div className={classes}><Link to='doctorprofile'>Visit the Profile</Link></div>
                            </div>
                            <div className={classes.row2}>
                                <div className={classes.location}>
                                Gurgram</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={classes.bottom}>
                    <div className={classes['bottom-row']}>
                        <div className={classes.expertise} onClick={handleExpertise}>Specialisation and Expertise</div>
                        <div className={classes.qualification} onClick={handleQualification}>Qualification</div>
                        
                    </div>
                    <div className={classes['bottom-content']}>
                            {expertise && <SpecialisationList/>}
                            {quali && <QualificationList/>}
                        </div>
                </div>
                <div>
                    <button className={classes.Button}>Meet The Doctor</button>
                </div>
            </div>
    </div>
    </div>
  )
}
