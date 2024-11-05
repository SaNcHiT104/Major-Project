import React from 'react'

export default function SpecialisationList(props) {
  return (
    <div className="specilisationlist">
        <ul>
        {
            props.sl?.map((data,idx)=>{
              return (
                <li id={idx}>{data}</li>
              )
            })
          }
        </ul>
    </div>
  )
}
