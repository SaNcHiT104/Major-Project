import React from 'react'
import classes from './Doctorprofilenav.module.css';

export default function Doctorprofilenav() {
    return (
        <div className={classes.DoctorProfile}>
            <div className={classes.navbar}>
                <ul className={classes.navlist}>
                    <li>OverView</li>
                    <li>Specialisation and Expertise</li>
                    <li>Milestones</li>
                    <li>Articles</li>
                    <li>Reviews</li>
                </ul>
            </div>
        </div>
    )
}
