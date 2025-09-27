import './App.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/webPage/components/Home'
import Login from './pages/auth/component/Login'
import Register from './pages/auth/component/Register'
import Product from './pages/webPage/components/Product'
import Singleproduct from './pages/webPage/components/singleProduct'


function App() {

  return (
    <BrowserRouter>
       <Routes>
          <Route path = '/' element ={<Home/>} />
          <Route path = '/login' element ={<Login/>} />
          <Route path = '/register' element ={<Register/>} />
          <Route path = '/product' element ={<Product/>} />
          <Route path = '/singleproduct' element ={<Singleproduct/>} />



       </Routes>
      
    </BrowserRouter>
  )
}

export default App
