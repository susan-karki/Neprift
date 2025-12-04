import './App.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/webPage/components/Home'
import Login from './pages/auth/component/Login'
import Register from './pages/auth/component/Register'
import Product from './pages/webPage/components/Product'
import Singleproduct from './pages/webPage/components/singleProduct'
import CartPage from './pages/webPage/components/CartPage'
import 'boxicons/css/boxicons.min.css';
import AddProduct from './pages/webPage/components/AddProduct'
import About from './pages/webPage/components/About'
import Payment from './pages/webPage/components/Payment'
import Submit from './pages/webPage/components/Submit'
import Update from './pages/webPage/components/Update'
import Delete from './pages/webPage/components/Delete'
// import Navbar from './admin/components/Navbar'
// import Sidebar from './admin/components/Sidebar'
import AdminLayout from './admin/components/AdminLayout'

function App() {
  return (
    <div className="rgb-sides">
    <BrowserRouter>
       <Routes>
          <Route path = '/' element ={<Home />} />
          <Route path = '/auth/login' element ={<Login/>} />
          <Route path = '/auth/register' element ={<Register/>} />
          <Route path = '/product' element ={<Product/>} />
          <Route path = '/singleproduct' element ={<Singleproduct/>} />
          <Route path = '/cartpage' element ={<CartPage/>} />
          <Route path = '/addproduct' element ={<AddProduct/>} />
          <Route path = '/about' element ={<About/>} />
          <Route path = '/payment' element ={<Payment/>} />
          <Route path = '/submit' element ={<Submit/>} />
          <Route path = '/update' element ={<Update/>} />
          <Route path = '/delete' element ={<Delete/>} />
          {/* {/* <Route path = '/navbar' element ={<Navbar/>} />
          <Route path = '/sidebar' element ={<Sidebar/>} /> */}
          <Route path = '/adminlayout' element ={<AdminLayout/>} />
       </Routes>
      
    </BrowserRouter>
    </div>
    
  )
}

export default App


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