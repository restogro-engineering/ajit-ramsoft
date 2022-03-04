import React, {useState} from 'react'
import PatientDetails from './PatientDetails'
import {Route , Link } from 'react-router-dom'
import './Patient.css'
const Home = (props) => {
  const {patients, removePatient, editPatient, getPatientDetail} = props
  console.log(props)
  const [detail , setDetail] = useState({})
  const handleRemove = (id) => {
    const conf = window.confirm('are you sure');
    if(conf)
    removePatient(id)
  }
  const handleEdit = (id) => {
    editPatient(id)
  }
  const handleDetails = (id) => {
    const result = patients.find((patient) => {
      return patient.id === id
    })
    getPatientDetail(result)
  }
  return (
    <div class="Home">
    <h2>Patient Data</h2>
    <table border="1">
    <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>SurName</th>
    <th>Age</th>
    <th>Diease</th>
    </tr>
    </thead>
    <tbody>
    {
      patients.map((patient) => {
      return (
      <tr key={patient.id}>
      <td onClick={() => {handleDetails(patient.id)}}><Link to ={`/details/${patient.id}`}>{patient.id}</Link></td>
      <td>{patient.name}</td>
      <td>{patient.surname}</td>
      <td>{patient.age}</td>
      <td>{patient.disease}</td>
      <td><button onClick={() => {handleEdit(patient.id)}}>Edit</button></td>
      <td><button onClick={() => {handleRemove(patient.id)}}>Remove</button></td>
      </tr>
    )
    })
  }
  </tbody>
    </table>
    </div>
  )
}

export default Home;
