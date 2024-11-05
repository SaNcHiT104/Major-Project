import React from 'react'


export default function QualificationList(props) {
  return (
    <div>
        <div className="qualificationlist">
        <ul>
          {
            props.ql?.map((data,idx)=>{
              return (
                <li id={idx}>{data}</li>
              )
            })
          }
        </ul>
        </div>
    </div>
  )
}
