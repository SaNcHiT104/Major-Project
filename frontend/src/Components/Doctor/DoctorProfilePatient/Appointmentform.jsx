import React, { useState } from 'react'

import classes from './Appointmentform.module.css'

export default function Appointmentform() {
    const [didEdit,setDidEdit]=useState({
        fullname:false,
        contactInfo:false,
        email:false,
        date:false,
        description:false,
    });
    const [enteredValues,setEnteredValues]=useState({
        fullname:'',
        contactInfo:'',
        email:'',
        date:'',
        description:'',
    });
    const emailIsInvalid=didEdit.email && !enteredValues.email.includes('@');
    const phoneIsValid=didEdit.contactInfo && enteredValues.contactInfo.length!=10;
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
            contactInfo:'',
            email:'',
            date:'',
            description:'',
        })
    }
  return (
    <div className={classes.registerform}>
        <form className={classes.innerloginform} onSubmit={handleSubmit}>
            <div className={classes.row}>
                <div className={classes.head}>Full Name</div>
                <input 
                    type="text" 
                    name="fullname" 
                    value={enteredValues.fullname}
                    onChange={(event)=>handleInput('fullname',event)}
                    />
            </div>
            <div className={classes['row-contactInfo']}>
                <div>
                    <div className={classes.head}>Phone Number</div>
                    <input 
                        type="text"
                        name="contactInfo" 
                        onBlur={()=>handleInputBlur('contactInfo')}
                        value={enteredValues.contactInfo}
                        onChange={(event)=>handleInput('contactInfo',event)}/>
                </div>
                <div className={classes['control-error']}>{phoneIsValid && <p>Please enter a 10 digit phone number </p>}</div>
            </div>
            <div className={classes['row-email']}>
                <div>
                    <div className={classes.head}>Enter email</div>
                    <input 
                    type="email"
                    name="email" 
                    onBlur={()=>handleInputBlur('email')}
                    value={enteredValues.email}
                    onChange={(event)=>handleInput('email',event)}/>
                </div>
                <div className={classes['control-error']}>{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
            </div>
            <div className={classes.row}>
                <div className={classes.head}> Date</div>
                <input 
                    type="date"
                    name="date" 
                    value={enteredValues.date}
                    onChange={(event)=>handleInput('date',event)}/>
            </div>
            <div className={classes.row}>
                <div className={classes.head}> Purpose of Appointment</div>
                <input 
                    type="text"
                    name="description" 
                    value={enteredValues.description}
                    onChange={(event)=>handleInput('description',event)}/>
            </div>
            <br/>
            <button className={classes['book_button']}>Book Appointment</button>
        </form>
    </div>
    )
}
