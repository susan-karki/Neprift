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



function App() {

  return (
    <BrowserRouter>
       <Routes>
          <Route path = '/' element ={<Home/>} />
          <Route path = '/login' element ={<Login/>} />
          <Route path = '/register' element ={<Register/>} />
          <Route path = '/product' element ={<Product/>} />
          <Route path = '/singleproduct' element ={<Singleproduct/>} />
          <Route path = '/cartpage' element ={<CartPage/>} />
          <Route path = '/addproduct' element ={<AddProduct/>} />
          <Route path = '/about' element ={<About/>} />
          <Route path = '/payment' element ={<Payment/>} />



       </Routes>
      
    </BrowserRouter>
  )
}

export default App
