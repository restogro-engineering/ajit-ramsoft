import React, {useState, useEffect} from 'react'
import {Link , Route} from 'react-router-dom'
import Home from './Home'
import PatientDetails from './PatientDetails'
import {v4 as uuidv4} from 'uuid'
import AddPatient from './AddPatient'
import Login from './Login'
const PatientContainer = (props) => {
  const {handleToggle} = props
  const[patients, setPatients] = useState(
  [{id:'xyss-d123r-tyvg-ggd1-23r-123-8fea97efa4', name: 'Patient 1', surname:'Patient 1 Surname', age : 29, disease : 'Asthama', contact : '123456789', birthday : '2010-06-11', address : 'Bangalore, Karnataka'},
  {id:'arg-sd590-rtyv-gggs-d590-4568fea97efa', name: 'Patient 2', surname:'Patient 2 Surname', age : 23, disease : 'Diabetes', contact : '123456789', birthday : '1984-06-21', address : 'Bangalore, Karnataka'},
  {id:'rsr-gsd0-00df-kqwe-gsd00-7898fea97efa1', name: 'Patient 3', surname:'Patient 3 Surname', age : 44, disease : 'Asthama', contact : '123456789', birthday : '1990-03-07', address : 'Bangalore, Karnataka'},
  {id:'yzr-gsd4-29dc-oitw-gsd42-012-8fea97efa', name: 'Patient 4', surname:'Patient 4 Surname', age : 36, disease : 'Asthama', contact : '123456789', birthday : '2009-05-01', address : 'Bangalore, Karnataka'}]
  )
  const [editRecord, setEditRecord] = useState({})
  const [patientDetail , setPatientsDetail] = useState({})

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('patientData')) || [];
    setPatients(result)
  },[])

     useEffect(() => {
     localStorage.setItem('patientData', JSON.stringify(patients))
   },[patients])

  const addPatient = (formData) => {
    setPatients([...patients, {...formData}])
  }
  const removePatient = (id) => {
    const result = patients.filter((patient) => {
      return patient.id !== id
    })
  setPatients(result)
  }

  const editPatient = (id) => {
    const result = patients.find((patient) => {
      return patient.id === id
    })
    setEditRecord(result)
  }

  const updatePatient = (formData) => {
    const result = patients.map((patient) => {
      if(patient.id === formData.id) {
        return {...formData}
      }
      else return patient
    })
    setEditRecord({})
    setPatients(result)
  }
  const getPatientDetail = (patient) => {
    setPatientsDetail(patient)
  }
  return (
    <div>
    <Link to = "/" onClick={handleToggle} className="logout">Logout</Link>
    <Route path = "/" exact={true} render={(props) =>{
      return <Home {...props} patients={patients} editPatient={editPatient} removePatient={removePatient} getPatientDetail={getPatientDetail}/>
    }}/>
    <Route path = "/" exact={true} render={(props) =>{
      return <AddPatient {...props} patients={patients} {...editRecord} updatePatient={updatePatient} addPatient={addPatient}/>
    }}/>
    <Route path = "/details/:id" exact={true} render={(props) =>{
      return <PatientDetails {...props} {...patientDetail}/>
    }}/>

    </div>
  )
}

export default PatientContainer;
