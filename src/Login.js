import React, { useState } from "react";
import Home from "./Home";
import "./Login.css";
const Login = props => {
  const { handleToggle } = props;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const credentials = {
    username: "demo",
    secretkey: "123456"
  };
  const handleUserChange = e => {
    setUser(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const formSubmit = e => {
    e.preventDefault();
    if (user === credentials.username && password === credentials.secretkey) {
      handleToggle();
    } else console.log("not successfull");
  };
  return (
    <div className='login'>
      <form onSubmit={formSubmit} className='login-box'>
        <h2>Login</h2>
        <div className='user-box'>
          <input type='text' onChange={handleUserChange} value={user} />
          <label>User Name</label>
        </div>
        <div className='user-box'>
          <input
            type='password'
            onChange={handlePasswordChange}
            value={password}
          />
          <label>Password</label>
        </div>
        <input type='submit' value='Login' className='submit' />
      </form>
    </div>
  );
};

export default Login;
