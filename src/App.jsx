// import './App.css'
// import {BrowserRouter,Routes, Route } from 'react-router-dom'
// import Home from './pages/webPage/components/Home'
// import Login from './pages/auth/component/Login'
// import Register from './pages/auth/component/Register'
// import Product from './pages/webPage/components/Product'
// import Singleproduct from './pages/webPage/components/singleProduct'
// import CartPage from './pages/webPage/components/CartPage'
// import 'boxicons/css/boxicons.min.css';
// import AddProduct from './pages/webPage/components/AddProduct'
// import About from './pages/webPage/components/About'
// import Payment from './pages/webPage/components/Payment'
// import Submit from './pages/webPage/components/Submit'
// import Update from './pages/webPage/components/Update'
// import Delete from './pages/webPage/components/Delete'
// // import Navbar from './admin/components/Navbar'
// // import Sidebar from './admin/components/Sidebar'
// import AdminLayout from './admin/components/AdminLayout'
// import Charts from './admin/components/Charts'
// import ProfileSettings from './admin/components/ProfileSettings'

// function App() {
//   return (
//     <div className="rgb-sides">
//     <BrowserRouter>
//        <Routes>
//           <Route path = '/' element ={<Home />} />
//           <Route path = '/auth/login' element ={<Login/>} />
//           <Route path = '/auth/register' element ={<Register/>} />
//           <Route path = '/product' element ={<Product/>} />
//           <Route path = '/singleproduct' element ={<Singleproduct/>} />
//           <Route path = '/cartpage' element ={<CartPage/>} />
//           <Route path = '/addproduct' element ={<AddProduct/>} />
//           <Route path = '/about' element ={<About/>} />
//           <Route path = '/payment' element ={<Payment/>} />
//           <Route path = '/submit' element ={<Submit/>} />
//           <Route path = '/update' element ={<Update/>} />
//           <Route path = '/delete' element ={<Delete/>} />
//           {/* {/* <Route path = '/navbar' element ={<Navbar/>} />
//           <Route path = '/sidebar' element ={<Sidebar/>} /> */}
//           <Route path = '/adminlayout' element ={<AdminLayout/>} />
//           <Route path = '/charts' element ={<Charts/>} />
//           <Route path = '/profile' element ={<ProfileSettings/>} />

//        </Routes>
      
//     </BrowserRouter>
//     </div>
    
//   )
// }

// export default App


// import { useEffect, useState } from "react";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8080/api/auth/register")
//       .then(res => res.text())
//       .then(data => setMessage(data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1>React ↔ Spring Boot Connection</h1>
//       <p>Message from backend:</p>
//       <h2>{message}</h2>
//     </div>
//   );
// }

// export default App;


// import './App.css'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import { Navigate } from "react-router-dom";

// import Home from './pages/webPage/components/Home'
// import Login from './pages/auth/component/Login'
// import Register from './pages/auth/component/Register'
// import Singleproduct from './pages/webPage/components/singleProduct'
// import CartPage from './pages/webPage/components/CartPage'
// import AddProduct from './pages/webPage/components/AddProduct'
// import About from './pages/webPage/components/About'
// import Payment from './pages/webPage/components/Payment'
// import Submit from './pages/webPage/components/Submit'
// // import Update from './pages/webPage/components/Update'
// // import Delete from './pages/webPage/components/Delete'

// import AdminLayout from './admin/components/AdminLayout'
// import Charts from './admin/components/Charts'
// import ProfileSettings from './admin/components/ProfileSettings'
//  import 'boxicons/css/boxicons.min.css';
// import NepriftPolicies from './admin/components/NepriftPolicies';
// import NepriftSuggestions from './admin/components/NepriftSuggestions';


// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/auth/login" element={<Login />} />
//         <Route path="/auth/register" element={<Register />} />
//         <Route path="/product" element={<AddProduct />} />
//         <Route path="/singleproduct" element={<Singleproduct />} />
//         <Route path="/cartpage" element={<CartPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/submit" element={<Submit />} />
//         {/* <Route path="/update" element={<Update />} />
//         <Route path="/delete" element={<Delete />} /> */}
//         {/* ADMIN PANEL ROUTES */}
//         <Route path="/admin" element={<AdminLayout />}>
//             <Route index element={<Navigate to="dashboard" replace />} />
//             <Route path="dashboard" element={<Charts/>} />
//             <Route path="profile" element={<ProfileSettings/>} />
//             <Route path="policies" element={<NepriftPolicies/>} />
//             <Route path="suggestions" element={<NepriftSuggestions/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/webPage/components/Home'
import Login from './pages/auth/component/Login'
import Register from './pages/auth/component/Register'
// import Singleproduct from './pages/webPage/components/singleProduct'
import CartPage from './pages/webPage/components/CartPage'
// import AddProduct from './pages/webPage/components/AddProduct'
import About from './pages/webPage/components/About'
import Payment from './pages/webPage/components/Payment'
// import Submit from './seller/components/Submit.jsx'

import AdminLayout from './admin/components/AdminLayout'
import Charts from './admin/components/Charts'
import ProfileSettings from './admin/components/ProfileSettings'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import 'boxicons/css/boxicons.min.css';
import AdminSeller from './admin/components/AdminSeller.jsx'
// import SellerOrders from './seller/components/SellerOrders.jsx'
import AddProduct from './seller/components/AddProduct.jsx'
import Submit from './seller/components/Submit.jsx'
import SellerLayout from './seller/components/SellerLayout.jsx'
import SellerOrders from './seller/components/SellerOrders.jsx'
import NepriftSuggestions from './seller/components/NepriftSuggestions.jsx'
import NepriftPolicies from './seller/components/NepriftPolicies.jsx'
import SellerDashboard from './seller/components/SellerDashboard.jsx'
import AdminDonations from './admin/components/AdminDonations.jsx'
import Singleproduct from './pages/webPage/components/Singleproduct.jsx'
import ForgotPassword from './pages/auth/component/ForgotPassword.jsx'

function App() {
  return (
    <BrowserRouter>

      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        toastStyle={{
        width: "420px",
        fontSize: "16px",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/product" element={<AddProduct />} /> */}
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/submit" element={<Submit />} /> */}
        {/* <Route path="/order" element={<SellerOrders />} /> */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Charts />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="seller" element={<AdminSeller />} />
          <Route path="donate" element={<AdminDonations />} />
        </Route>
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<Navigate to="sellerdash" replace />} />
          <Route path="product" element={<AddProduct />} />
          <Route path="submit" element={<Submit />} />
          <Route path="order" element={<SellerOrders />} />
          <Route path="suggestions" element={<NepriftSuggestions />} />
          <Route path="policies" element={<NepriftPolicies />} />
          <Route path="sellerdash" element={<SellerDashboard />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App

