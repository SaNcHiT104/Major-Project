import React, { useState } from 'react'
import './Appointmentform.css'

export default function Appointmentform() {
    const [didEdit,setDidEdit]=useState({
        fullname:false,
        phonenumber:false,
        email:false,
        date:false,
        purpose:false,
    });
    const [enteredValues,setEnteredValues]=useState({
        fullname:'',
        phonenumber:'',
        email:'',
        date:'',
        purpose:'',
    });
    const emailIsInvalid=didEdit.email && !enteredValues.email.includes('@');
    const phoneIsValid=didEdit.phonenumber && enteredValues.phonenumber.length!=10;
    function handleInput(identifier,event)
    {
        setEnteredValues((prevValues)=>
        ({
            ...prevValues,
            [identifier]:event.target.value,
        }))
        
    }
    function handleInputBlur(identifier){
        setDidEdit((prevEdit)=>
        ({
          ...prevEdit,
          [identifier]:true,
        }));
        
      }
    function handleSubmit(event)
    {
        event.preventDefault();
        // console.log(enteredEmail);
        console.log(enteredValues);
        setEnteredValues({
            fullname:'',
            phonenumber:'',
            email:'',
            date:'',
            purpose:'',
        })
    }
  return (
    <div className="registerform">
        <form className="innerloginform" onSubmit={handleSubmit}>
            <div className="row">
                <div className="head">Full Name</div>
                <input 
                    type="text" 
                    name="fullname" 
                    value={enteredValues.fullname}
                    onChange={(event)=>handleInput('fullname',event)}
                    />
            </div>
            <div className="row-phonenumber">
                <div>
                    <div className="head">Phone Number</div>
                    <input 
                        type="text"
                        name="phonenumber" 
                        onBlur={()=>handleInputBlur('phonenumber')}
                        value={enteredValues.phonenumber}
                        onChange={(event)=>handleInput('phonenumber',event)}/>
                </div>
                <div className="control-error">{phoneIsValid && <p>Please enter a 10 digit phone number </p>}</div>
            </div>
            <div className="row-email">
                <div>
                    <div className="head">Enter email</div>
                    <input 
                    type="email"
                    name="email" 
                    onBlur={()=>handleInputBlur('email')}
                    value={enteredValues.email}
                    onChange={(event)=>handleInput('email',event)}/>
                </div>
                <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
            </div>
            <div className="row">
                <div className="head"> Date</div>
                <input 
                    type="date"
                    name="date" 
                    value={enteredValues.date}
                    onChange={(event)=>handleInput('date',event)}/>
            </div>
            <div className="row">
                <div className="head"> Purpose of Appointment</div>
                <input 
                    type="text"
                    name="purpose" 
                    value={enteredValues.purpose}
                    onChange={(event)=>handleInput('purpose',event)}/>
            </div>
            <br/>
            <button className="book_button">Book Appointment</button>
        </form>
    </div>
  )
}
