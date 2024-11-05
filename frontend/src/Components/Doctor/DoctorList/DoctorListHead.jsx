import React from 'react'
import { useState } from 'react'
import styles from './DoctorListHead.module.css'

import SpecialisationList from './SpecialisationList';
import QualificationList from './QualificationList';
import DoctorCard from './DoctorCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, falocation } from '@fortawesome/free-solid-svg-icons';


export default function DoctorListHead() {
    
  return (
    <div className={styles.doctorlisthead}>
        <div className={styles.Liststartpic}>
            <div className={styles.doctorlist_image}><img src="https://www.medanta.org/storage/banners/October2023//lCBUkH43Vhj5oHvd5gdFVjZjoh0kiy-metaRmluZCBhIGRvY3Rvci5qcGc=-.jpg"></img></div>
            <div className={styles.doctortext}>Medical Experts</div>
        </div>
        <div className={styles.locationlist}>
            <button className={styles.button}>ALL</button>
            <button className={styles.button}>Delhi</button>
            <button className={styles.button}>Lucknow</button>
            <button className={styles.button}>Lucknow</button>
            <button className={styles.button}>Patna</button>
            <button className={styles.button}>Patna</button>
            <button className={styles.button}>Patna</button>
            <button className={styles.button}>Patna</button>

        </div>
        <div className={styles["Doctor-display"]}>
            <DoctorCard name="Dr.Arun Sharma" post="Chairman" field="Neuroscience"/>
            <DoctorCard name="Dr.Arun Sharma" post="Chairman" field="Neuroscience"/>
            <DoctorCard name="Dr.Arun Sharma" post="Chairman" field="Neuroscience"/>
            <DoctorCard name="Dr.Arun Sharma" post="Chairman" field="Neuroscience"/>
            <DoctorCard name="Dr.Arun Sharma" post="Chairman" field="Neuroscience"/>
            <DoctorCard name="Dr.Arun Sharma" post="Chairman" field="Neuroscience"/>
        </div>
        
    </div>
  )
}
