import React from 'react'
import classes from './Doctorprofileintro.module.css';
import Appointmentform from './Appointmentform';


export default function Doctorprofileintro(props) {
    console.log("intros",props.intro);
return (
    <div className={classes.Doctorprofileintro}>
        <div className={classes.Doctorprofilestart}>
            <div className={classes['left-side']}>
                <div className={classes.Doctorprofileimg}>
                    <img src="https://www.medanta.org/storage/all-doctor-with-slug/dr-naresh-trehan.png"></img>
                </div>
                <div className={classes.Doctorprofilecontent}>
                    <div className={classes.Doctorprofilename}>{props.intro.name}</div>
                    <div className={classes.Doctorprofiledetais}>
                    {props.intro.post}
                    </div>
                    <div className={classes.Doctorprofiledetais}>
                    {props.intro.location}
                    </div>
                    <div className={classes.Doctorprofiledetais}>
                    {props.intro.field}
                    </div>
                    <div className={classes.Doctorprofiledetais}>
                    Diplomate , Diplomate , M.B.B.S.
                    </div>
                    
                </div>
            </div>
            <div className={classes['right-side']}>
                <Appointmentform/>
            </div>
        </div>
    </div>
  )
}
