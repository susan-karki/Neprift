import React, { useState } from 'react'
import './Form.css'

const Form = ({type}) => {
    const[action, setAction]  = useState("Sign Up") 
  return (
    <div className = "container" >
      <div className = 'header'>
        <div className="text">{action}</div>
          <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login"?<div></div>:
        <div className="input">
          <label>Name</label>
          <input type="text" placeholder='enter your name' required/>
        </div>}
        <div className="input">
          <label>Email</label>
          
          <input type="email"  placeholder='enter your email' required/>
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" placeholder='enter your password' required/>
        </div>
      </div>
      {action === "Sign Up"?<div></div>:
      <div className="forget-password">Forgot password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login"?"submit gray":"submit"} onClick = {()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up"?"submit gray":"submit"} onClick = {()=>{setAction("Login")}}>Login</div>
      </div>

    </div>
  )
}

export default Form