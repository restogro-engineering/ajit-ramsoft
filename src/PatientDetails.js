import React from 'react'
import {Link} from 'react-router-dom'
import './AddPatient.css'
const PatientDetails = (props) => {
  const {handleDetails, id, name , surname ,age, disease , contact , birthday, address} = props
  console.log(props)
  return (
    <div className ="patientDetail">
    <h2>Patient Details</h2>
    <p><b>Name</b> : {name}</p>
    <p><b>SurName</b> : {surname}</p>
    <p><b>Age</b> : {age}</p>
    <p><b>Disease</b> : {disease}</p>
    <p><b>Contact</b> : {contact}</p>
    <p><b>Birthday</b> : {birthday}</p>
    <p><b>Address</b> : {address}</p>
    <Link to ="/" className="goBack">Go Back</Link>
    </div>
  )
}

export default PatientDetails
