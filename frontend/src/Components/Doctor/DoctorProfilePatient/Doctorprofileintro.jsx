import React from 'react'
import './Doctorprofileintro.css';
import Appointmentform from './Appointmentform';

export default function Doctorprofileintro() {
return (
    <div className="Doctorprofileintro">
        <div className="Doctorprofilestart">
            <div className="left-side">
                <div className="Doctorprofileimg">
                    <img src="https://www.medanta.org/storage/all-doctor-with-slug/dr-naresh-trehan.png"></img>
                </div>
                <div className="Doctorprofilecontent">
                    <div className="Doctorprofilename">Dr.Naresh Tandon</div>
                    <div className="Doctorprofiledetais">
                    Chairman & Managing Director, Medanta
                    </div>
                    <div className="Doctorprofiledetais">
                    Cardiac Surgery
                    </div>
                    <div className="Doctorprofiledetais">
                    Cardiac Care
                    </div>
                    <div className="Doctorprofiledetais">
                    Diplomate , Diplomate , M.B.B.S.
                    </div>
                    <div className="Doctorprofilelocation">
                    Medanta Gurugram
                    </div>
                </div>
            </div>
            <div className="right-side">
                <Appointmentform/>
            </div>
        </div>
    </div>
  )
}
