import React,{useState} from 'react'
import PatientContainer from './PatientContainer'
import Login from './Login'
const App = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <div>{
    isLoggedIn ?
    <PatientContainer handleToggle={handleToggle}/>
    : <Login handleToggle={handleToggle}/>
  }
    </div>
  )
}

export default App;
