import React from 'react'
import classes from './Doctorprofileintro.module.css';
import Appointmentform from './Appointmentform';

export default function Doctorprofileintro() {
return (
    <div className={classes.Doctorprofileintro}>
        <div className={classes.Doctorprofilestart}>
            <div className={classes['left-side']}>
                <div className={classes.Doctorprofileimg}>
                    <img src="https://www.medanta.org/storage/all-doctor-with-slug/dr-naresh-trehan.png"></img>
                </div>
                <div className={classes.Doctorprofilecontent}>
                    <div className={classes.Doctorprofilename}>Dr.Naresh Tandon</div>
                    <div className={classes.Doctorprofiledetais}>
                    Chairman & Managing Director, Medanta
                    </div>
                    <div className={classes.Doctorprofiledetais}>
                    Cardiac Surgery
                    </div>
                    <div className={classes.Doctorprofiledetais}>
                    Cardiac Care
                    </div>
                    <div className={classes.Doctorprofiledetais}>
                    Diplomate , Diplomate , M.B.B.S.
                    </div>
                    <div className={classes.Doctorprofilelocation}>
                    Medanta Gurugram
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
