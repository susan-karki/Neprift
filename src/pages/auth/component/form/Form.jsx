

// import React, { useState } from 'react'
// import './Form.css'

// const Form = ({type, onSubmit}) => {
//    const [data, setData] = useState({
//         email : '',
//         username : '',
//         password : '',
//         phonenumber : '',
//         address : '',
//         birthday : '',
//         gender : '',
//         role : '',
//     })
//     const handleChange =(e)=>{
//         const{name, value} = e.target
//         console.log(name, value)
//         setData({
//             ...data,
//             [name] : value
//         })
//        }
//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         onSubmit(data)
//         //console.log("Form Submission Triggred")
//         //console.log("Submitted Data:", data);
//     }

//     const[action, setAction]  = useState("Sign Up") 
//   return (
//     <div className = "container" >
//       <div className = 'header'>
//         <div className="text">{action}</div>
//           <div className="underline"></div>
//       </div>
//       <form onSubmit = {handleSubmit}>
//       <div className="inputs">
//         {action === "Login"?<div></div>:
//         <div className="input">
//           <label>Name</label>
//           <input type="text" placeholder='enter your name' onChange = {handleChange}  value = {data.username}required/>
//         </div>}
//         <div className="input">
//           <label>Email</label>
          
//           <input type="email"  placeholder='enter your email' onChange = {handleChange}  value = {data.email}required/>
//         </div>
//         <div className="input">
//           <label>Password</label>
//           <input type="password" placeholder='enter your password'onChange = {handleChange}  value = {data.password}required/>
//         </div>
//         {action === "Login"? (<div></div>) : (
//         <>
//         <div className="phone-address-row">
//           <div className="phoneNumber">
//             <label htmlFor="">Phone Number</label>
//             <input type="tel"  placeholder='Your Phone_Number'onChange = {handleChange}  value = {data.phonenumber} required/>
//           </div>
//           <div className="RegAddress">
//             <label htmlFor="">Address</label>
//             <input type="text" placeholder='Your Address' onChange = {handleChange}  value = {data.address}required/>
//           </div>
//         </div>
//         <div className="birthday-gender-row">
//           <div className="birthday">
//             <label htmlFor="birthday">Birthday</label>
//             <input id="birthday" name="birthday" type="date" onChange = {handleChange}  value = {data.birthday}required />
//           </div>
//           <div className="gender">
//             <label htmlFor="gender">Gender</label>
//            <select id="gender" name="gender" onChange = {handleChange}  value = {data.gender}required>
//              <option value="" disabled selected>
//               Select your gender
//              </option>
//              <option value="Male">Male</option>
//              <option value="Female">Female</option>
//              <option value="Other">Other</option>
//              </select>
//            </div>
//         </div>
//        <div className="role">
//          <label for="role">Role</label>
//          <select id="role" name="role"onChange = {handleChange}  value = {data.role} required>
//            <option value="" disabled selected>Select your role</option>
//            <option value="Customer">Customer</option>
//            <option value="Seller">Seller</option>
//          </select>
//        </div>
//        </>)}
//       </div>
//       {action === "Sign Up"?<div></div>:
//       <div className="forget-password">Forgot password? <span>Click Here!</span></div>}
//       <div className="submit-container">
//         <div className={action === "Login"?"submit gray":"submit"} onClick = {()=>{setAction("Sign Up")}}>Sign Up</div>
//         <div className={action === "Sign Up"?"submit gray":"submit"} onClick = {()=>{setAction("Login")}}>Login</div>
//       </div>
//       </form>

//     </div>
//   )
// }

// export default Form


import React, { useState } from 'react'
import './Form.css'

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
    phonenumber: '',
    address: '',
    birthday: '',
    gender: '',
    role: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data)
  }

  const [action, setAction] = useState("Sign Up")

  return (
    <div className="container">
      <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">

          {/* Username (only visible in Sign Up) */}
          {action === "Login" ? <div></div> : (
            <div className="input">
              <label>Name</label>
              <input
                type="text"
                placeholder='enter your name'
                name="username"
                onChange={handleChange}
                value={data.username}
                required
              />
            </div>
          )}

          {/* Email */}
          <div className="input">
            <label>Email</label>
            <input
              type="email"
              placeholder='enter your email'
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
          </div>

          {/* Password */}
          <div className="input">
            <label>Password</label>
            <input
              type="password"
              placeholder='enter your password'
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
          </div>

          {/* Extra fields only for Sign Up */}
          {action === "Login" ? (<div></div>) : (
            <>
              <div className="phone-address-row">
                <div className="phoneNumber">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder='Your Phone Number'
                    name="phonenumber"
                    onChange={handleChange}
                    value={data.phonenumber}
                    required
                  />
                </div>

                <div className="RegAddress">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder='Your Address'
                    name="address"
                    onChange={handleChange}
                    value={data.address}
                    required
                  />
                </div>
              </div>

              <div className="birthday-gender-row">
                <div className="birthday">
                  <label htmlFor="birthday">Birthday</label>
                  <input
                    id="birthday"
                    name="birthday"
                    type="date"
                    onChange={handleChange}
                    value={data.birthday}
                    required
                  />
                </div>

                <div className="gender">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={data.gender}
                    required
                  >
                    <option value="" disabled>Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="role">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  onChange={handleChange}
                  value={data.role}
                  required
                >
                  <option value="" disabled>Select your role</option>
                  <option value="Customer">Customer</option>
                  <option value="Seller">Seller</option>
                </select>
              </div>
            </>
          )}
        </div>

        {/* Forgot Password in Login */}
        {action === "Sign Up" ? <div></div> : (
          <div className="forget-password">Forgot password? <span>Click Here!</span></div>
        )}

        {/* Buttons */}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => { setAction("Sign Up") }}
          >
            Sign Up
          </div>

          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => { setAction("Login") }}
          >
            Login
          </div>
        </div>

      </form>
    </div>
  )
}

export default Form
