import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import './AddPatient.css'
const AddPatient = (props) => {
  const {addPatient, updatePatient, id : newid , name : newname , surname : newsurname, age : newage , disease : newdisease, contact : newcontact, address : newaddress, birthday : newbirthday} = props
  const [name , setName] = useState(newname ? newname : '')
  const [surname , setSurName] = useState(newsurname ? newsurname : '')
  const [age , setAge] = useState(newage ? newage : '')
  const [disease , setDiseae] = useState(newdisease ? newdisease : '')
  const[id , setId] = useState(newid ? newid : uuidv4())
  const [contact , setContact] = useState(newcontact ? newcontact : '')
  const [address , setAddress] = useState(newaddress ? newaddress : '')
  const [birthday , setBirthday] = useState(newbirthday ? newbirthday : '')
  useEffect(() => {
  if(newname){
    setName(newname)
    setId(newid)
    setSurName(newsurname)
    setDiseae(newdisease)
    setAge(newage)
    setBirthday(newbirthday)
    setContact(newcontact)
    setAddress(newaddress)
  }
  },[newname])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleSurNameChange = (e) => {
    setSurName(e.target.value)
  }
  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }
  const handleDiseaseChange = (e) => {
    setDiseae(e.target.value)
  }
  const handleContactChange = (e) => {
    setContact(e.target.value)
  }
  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value)
  }
  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }
  const formSubmit = (e) => {
  e.preventDefault();
  const formData = {
    name : name,
    surname : surname,
    age : age,
    disease : disease,
    id : id,
    contact : contact,
    address : address,
    birthday : birthday
  }
  if(newname){
    updatePatient(formData)
  }
  else addPatient(formData)
  setName('')
  setSurName('')
  setDiseae('')
  setAge('')
  setId(uuidv4())
  setAddress('')
  setBirthday('')
  setContact('')
}
  return (
    <div className = "addPatient">
    <h2>Add Patient</h2>
    <form onSubmit = {formSubmit} className="form">
    <label>Name</label><br/>
    <input type = "text" onChange = {handleNameChange} value = {name} /><br/><br/>
    <label>SurName</label><br/>
    <input type = "text" onChange = {handleSurNameChange} value = {surname} /><br/><br/>
    <label>Age</label><br/>
    <input type = "text" onChange = {handleAgeChange} value = {age} /><br/><br/>
    <label>Disease</label><br/>
    <input type = "text" onChange = {handleDiseaseChange} value = {disease} /><br/><br/>
    <label>Contact</label><br/>
    <input type = "text" onChange = {handleContactChange} value = {contact} /><br/><br/>
    <label>Birthday</label><br/>
    <input type = "date" onChange = {handleBirthdayChange} value = {birthday} /><br/><br/>
    <label>Address</label><br/>
    <textarea onChange = {handleAddressChange} value = {address}></textarea><br/><br/>
    <input type = "submit" value= "Save" className="btn"/>
    </form>
    </div>
  )
}

export default AddPatient;
