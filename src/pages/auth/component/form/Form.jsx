// import React, { useState } from 'react';
// import './Form.css';

// const Form = ({ type = 'Sign Up', onSubmit }) => {
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phonenumber: '',
//     address: '',
//     birthday: '',
//     gender: '',
//     role: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((d) => ({ ...d, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (type === 'Login') {
//       onSubmit?.({ email: data.email, password: data.password });
//     } else {
//       onSubmit?.(data);
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="form-box">
//         <div className="form-header">
//           <h2>{type === 'Login' ? 'Login' : 'Sign Up'}</h2>
//           <div className="underline" />
//         </div>

//         <form onSubmit={handleSubmit} className="form-body">
//           {type !== 'Login' && (
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={data.name}
//                 onChange={handleChange}
//                 autoComplete="off"
//                 required
//               />
//             </div>
//           )}

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={data.email}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={data.password}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           {type !== 'Login' && (
//             <>
//               <div className="form-grid">
//                 <div className="form-group">
//                   <label>Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Your Phone Number"
//                     value={data.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Your Address"
//                     value={data.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-grid">
//                 <div className="form-group has-icon">
//                   <label>Birthday</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={data.dateOfBirth}
//                     onChange={handleChange}
//                     required
//                   />
//                   <span className="input-icon calendar-icon" aria-hidden="true" />
//                 </div>

//                 <div className="form-group">
//                   <label>Gender</label>
//                   <div className="select-wrap">
//                     <select
//                       name="gender"
//                       value={data.gender}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select your gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                     <span className="select-arrow" aria-hidden="true" />
//                   </div>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Role</label>
//                 <div className="select-wrap">
//                   <select
//                     name="role"
//                     value={data.role}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select your role</option>
//                     <option value="CUSTOMER">CUSTOMER</option>
//                     <option value="SELLER">SELLER</option>
//                   </select>
//                   <span className="select-arrow" aria-hidden="true" />
//                 </div>
//               </div>
//             </>
//           )}

//           {type === 'Login' && (
//             <div className="forgot-password">
//               Forgot password? <span>Click Here!</span>
//             </div>
//           )}

//           <button type="submit" className="submit-btn">
//             {type === 'Login' ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;
// import React, { useState } from 'react';
// import './Form.css';

// const Form = ({ type = 'Sign Up', onSubmit }) => {
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',       // matches backend
//     address: '',
//     birthday: '',
//     gender: '',
//     role: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((d) => ({ ...d, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (type === 'Login') {
//       onSubmit?.({ email: data.email, password: data.password });
//     } else {
//       onSubmit?.(data);
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="form-box">
//         <div className="form-header">
//           <h2>{type === 'Login' ? 'Login' : 'Sign Up'}</h2>
//           <div className="underline" />
//         </div>

//         <form onSubmit={handleSubmit} className="form-body">
//           {type !== 'Login' && (
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={data.name}
//                 onChange={handleChange}
//                 autoComplete="off"
//                 required
//               />
//             </div>
//           )}

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={data.email}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={data.password}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           {type !== 'Login' && (
//             <>
//               <div className="form-grid">
//                 <div className="form-group">
//                   <label>Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Your Phone Number"
//                     value={data.phone}
//                     onChange={(e) => {
//                       let val = e.target.value.replace(/\D/g, ''); // only digits
//                       if (val.length > 10) val = val.slice(0, 10); // max 10 digits
//                       setData(d => ({ ...d, phone: val }));
//                     }}
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Your Address"
//                     value={data.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-grid">
//                 <div className="form-group has-icon">
//                   <label>Birthday</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={data.dateOfBirth}
//                     onChange={handleChange}
//                     required
//                   />
//                   <span className="input-icon calendar-icon" aria-hidden="true" />
//                 </div>

//                 <div className="form-group">
//                   <label>Gender</label>
//                   <div className="select-wrap">
//                     <select
//                       name="gender"
//                       value={data.gender}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select your gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                     <span className="select-arrow" aria-hidden="true" />
//                   </div>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Role</label>
//                 <div className="select-wrap">
//                   <select
//                     name="role"
//                     value={data.role}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select your role</option>
//                     <option value="CUSTOMER">CUSTOMER</option>
//                     <option value="SELLER">SELLER</option>
//                   </select>
//                   <span className="select-arrow" aria-hidden="true" />
//                 </div>
//               </div>
//             </>
//           )}

//           {type === 'Login' && (
//             <div className="forgot-password">
//               Forgot password? <span>Click Here!</span>
//             </div>
//           )}

//           <button type="submit" className="submit-btn">
//             {type === 'Login' ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Form.css';

// const Form = ({ type = 'Sign Up', onSubmit }) => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',       // matches backend
//     address: '',
//     dateOfBirth: '',
//     gender: '',
//     role: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((d) => ({ ...d, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (type === 'Login') {
//       // Call the login submit handler if provided
//       onSubmit?.({ email: data.email, password: data.password });
//       return;
//     }

//     // Sign Up
//     try {
//       const res = await axios.post(
//         'http://100.78.28.88:8080/api/auth/register',
//         data
//       );

//       // Check backend response message or status
//       if (
//         res.data?.status === 'success' ||
//         res.data?.message?.toLowerCase().includes('success')
//       ) {
//         alert('Registration successful!');
//         navigate('/auth/login'); // navigate only on success
//       } else {
//         alert(res.data?.message || 'Registration failed');
//       }
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || 'Registration failed due to server error');
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="form-box">
//         <div className="form-header">
//           <h2>{type === 'Login' ? 'Login' : 'Sign Up'}</h2>
//           <div className="underline" />
//         </div>

//         <form onSubmit={handleSubmit} className="form-body">
//           {type !== 'Login' && (
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={data.name}
//                 onChange={handleChange}
//                 autoComplete="off"
//                 required
//               />
//             </div>
//           )}

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={data.email}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={data.password}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           {type !== 'Login' && (
//             <>
//               <div className="form-grid">
//                 <div className="form-group">
//                   <label>Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Your Phone Number"
//                     value={data.phone}
//                     onChange={handleChange}
//                     required
//                     maxLength={10} // max 10 digits
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Your Address"
//                     value={data.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-grid">
//                 <div className="form-group has-icon">
//                   <label>Birthday</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={data.dateOfBirth}
//                     onChange={handleChange}
//                     required
//                   />
//                   <span className="input-icon calendar-icon" aria-hidden="true" />
//                 </div>

//                 <div className="form-group">
//                   <label>Gender</label>
//                   <div className="select-wrap">
//                     <select
//                       name="gender"
//                       value={data.gender}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select your gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                     <span className="select-arrow" aria-hidden="true" />
//                   </div>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Role</label>
//                 <div className="select-wrap">
//                   <select
//                     name="role"
//                     value={data.role}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select your role</option>
//                     <option value="CUSTOMER">CUSTOMER</option>
//                     <option value="SELLER">SELLER</option>
//                   </select>
//                   <span className="select-arrow" aria-hidden="true" />
//                 </div>
//               </div>
//             </>
//           )}

//           {type === 'Login' && (
//             <div className="forgot-password">
//               Forgot password? <span>Click Here!</span>
//             </div>
//           )}

//           <button type="submit" className="submit-btn">
//             {type === 'Login' ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import './Form.css';

// const Form = ({ type = 'Sign Up', onSubmit }) => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: '',
//     dateOfBirth: '',
//     gender: '',
//     role: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((d) => ({ ...d, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (type === 'Login') {
//       onSubmit?.({ email: data.email, password: data.password });
//       return;
//     }

//     try {
//       const res = await axios.post(
//         'http://100.78.28.88:8080/api/auth/register',
//         data
//       );

//       if (
//         res.data?.status === 'success' ||
//          res.statusCode === 200 ||
//         res.data?.message?.toLowerCase().includes('success')
//       ) {
//         toast.success('🎉 Registration successful!', {
//           onClose: () => navigate('/auth/login'),
//         });
//       } else {
//         toast.error(res.data?.message || 'Registration failed');
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error(
//         err.response?.data?.message ||
//           'Registration failed due to server error'
//       );
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="form-box">
//         <div className="form-header">
//           <h2>{type === 'Login' ? 'Login' : 'Sign Up'}</h2>
//           <div className="underline" />
//         </div>

//         <form onSubmit={handleSubmit} className="form-body">
//           {type !== 'Login' && (
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={data.name}
//                 onChange={handleChange}
//                 autoComplete="off"
//                 required
//               />
//             </div>
//           )}

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={data.email}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={data.password}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           {type !== 'Login' && (
//             <>
//               <div className="form-grid">
//                 <div className="form-group">
//                   <label>Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Your Phone Number"
//                     value={data.phone}
//                     onChange={handleChange}
//                     required
//                     maxLength={10}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Your Address"
//                     value={data.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-grid">
//                 <div className="form-group has-icon">
//                   <label>Birthday</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={data.dateOfBirth}
//                     onChange={handleChange}
//                     required
//                   />
//                   <span
//                     className="input-icon calendar-icon"
//                     aria-hidden="true"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Gender</label>
//                   <div className="select-wrap">
//                     <select
//                       name="gender"
//                       value={data.gender}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select your gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                     <span className="select-arrow" aria-hidden="true" />
//                   </div>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Role</label>
//                 <div className="select-wrap">
//                   <select
//                     name="role"
//                     value={data.role}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select your role</option>
//                     <option value="CUSTOMER">CUSTOMER</option>
//                     <option value="SELLER">SELLER</option>
//                   </select>
//                   <span className="select-arrow" aria-hidden="true" />
//                 </div>
//               </div>
//             </>
//           )}

// {type === "Login" && (
//   <div className="forgot-password">
//     Forgot password?{" "}
//     <span onClick={() => navigate("/auth/forgot-password")}>
//       Click Here!
//     </span>
//   </div>
// )}


//           <button type="submit" className="submit-btn">
//             {type === 'Login' ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;












// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import './Form.css';

// const Form = ({ type = 'Sign Up', onSubmit }) => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: '',
//     dateOfBirth: '',
//     gender: '',
//     role: '',
//   });

//   // Prevent future dates
//   const today = new Date().toISOString().split('T')[0];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((d) => ({ ...d, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (type === 'Login') {
//       onSubmit?.({ email: data.email, password: data.password });
//       return;
//     }

//     try {
//       const res = await axios.post(
//         'http://100.78.28.88:8080/api/auth/register',
//         data
//       );

//       if (
//         res.status === 200 ||
//         res.data?.responseMessage?.toLowerCase().includes('success')
//       ) {
//         toast.success('🎉 Registration successful!', {
//           onClose: () => navigate('/auth/login'),
//         });
//       } else {
//         toast.error(res.data?.responseMessage || 'Registration failed');
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error(
//         err.response?.data?.responseMessage ||
//           'Registration failed due to server error'
//       );
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="form-box">
//         <div className="form-header">
//           <h2>{type === 'Login' ? 'Login' : 'Sign Up'}</h2>
//           <div className="underline" />
//         </div>

//         <form onSubmit={handleSubmit} className="form-body">
//           {type !== 'Login' && (
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={data.name}
//                 onChange={handleChange}
//                 autoComplete="off"
//                 required
//               />
//             </div>
//           )}

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={data.email}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={data.password}
//               onChange={handleChange}
//               autoComplete="off"
//               required
//             />
//           </div>

//           {type !== 'Login' && (
//             <>
//               <div className="form-grid">
//                 <div className="form-group">
//                   <label>Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Your Phone Number"
//                     value={data.phone}
//                     onChange={handleChange}
//                     required
//                     maxLength={10}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     placeholder="Your Address"
//                     value={data.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-grid">
//                 <div className="form-group has-icon">
//                   <label>Birthday</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={data.dateOfBirth}
//                     onChange={handleChange}
//                     max={today}   /* prevents future date */
//                     required
//                   />
//                   <span className="input-icon calendar-icon" />
//                 </div>

//                 <div className="form-group">
//                   <label>Gender</label>
//                   <div className="select-wrap">
//                     <select
//                       name="gender"
//                       value={data.gender}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select your gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                     <span className="select-arrow" />
//                   </div>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Role</label>
//                 <div className="select-wrap">
//                   <select
//                     name="role"
//                     value={data.role}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select your role</option>
//                     <option value="CUSTOMER">CUSTOMER</option>
//                     <option value="SELLER">SELLER</option>
//                   </select>
//                   <span className="select-arrow" />
//                 </div>
//               </div>
//             </>
//           )}

//           {type === "Login" && (
//             <div className="forgot-password">
//               Forgot password?{" "}
//               <span onClick={() => navigate("/auth/forgot-password")}>
//                 Click Here!
//               </span>
//             </div>
//           )}

//           <button type="submit" className="submit-btn">
//             {type === 'Login' ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;





















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Form.css';

const Form = ({ type = 'Sign Up', onSubmit }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    role: '',
  });

  // Prevent future dates
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === 'Login') {
      onSubmit?.({ email: data.email, password: data.password });
      return;
    }

    try {
      const res = await axios.post(
        'http://100.78.28.88:8080/api/auth/register',
        data
      );

      if (
        res.status === 200 ||
        res.data?.responseMessage?.toLowerCase().includes('success')
      ) {
        toast.success('🎉 Registration successful!', {
          onClose: () => navigate('/auth/login'),
        });
      } else {
        toast.error(res.data?.responseMessage || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.responseMessage ||
          'Registration failed due to server error'
      );
    }
  };

  return (
    <div className="app-container">
      <div className="form-box">
        <div className="form-header">
          <h2>{type === 'Login' ? 'Login' : 'Sign Up'}</h2>
          <div className="underline" />
        </div>

        <form onSubmit={handleSubmit} className="form-body">
          {type !== 'Login' && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={data.name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          {type !== 'Login' && (
            <>
              <div className="form-grid">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={data.phone}
                    onChange={handleChange}
                    required
                    maxLength={10}
                  />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    value={data.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group has-icon">
                  <label>Birthday</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={data.dateOfBirth}
                    onChange={handleChange}
                    max={today}
                    required
                  />
                  <span className="input-icon calendar-icon" />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <div className="select-wrap">
                    <select
                      name="gender"
                      value={data.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="select-arrow" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Role</label>
                <div className="select-wrap">
                  <select
                    name="role"
                    value={data.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="CUSTOMER">CUSTOMER</option>
                    <option value="SELLER">SELLER</option>
                  </select>
                  <span className="select-arrow" />
                </div>
              </div>
            </>
          )}

          {type === "Login" && (
            <div className="forgot-password">
              Forgot password?{" "}
              <span onClick={() => navigate("/auth/forgot-password")}>
                Click Here!
              </span>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {type === 'Login' ? 'Login' : 'Sign Up'}
          </button>

          {type === "Login" && (
            <div className="forgot-password">
              Don't have an account?{" "}
              <span onClick={() => navigate("/auth/register")}>
                Register here!
              </span>
            </div>
          )}

        </form>
      </div>
    </div>
  );
};

export default Form;
