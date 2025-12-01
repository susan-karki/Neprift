import React from 'react'
import "./Navbar.css"
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_dark from '../../assets/day.png'
import toggle_light from '../../assets/night.png'
import logo from '../../assets/web-logo.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
     <Link to = '/'> <h1 className = 'namelogo'>Neprift</h1></Link>
      {/* <img src={logo_light} alt="" className = 'logo' /> */}
      {/* <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Register</li>
        <li>Login</li>
      </ul> */}
      <div className="search-box">
        <input type="text" placeholder = 'search' />
        <img src={search_icon_dark} alt="" />
      </div>
      <ul>
        <Link to = '/'>
        <li>Home</li>
        </Link>

        <Link to = '/CartPage'>
        <li>Cart</li>
        </Link>

        <Link to = '/register'> 
        <li>Register</li>
        </Link>

        <Link to = '/login'>
        <li>Login</li>
        </Link>
      </ul>
      {/* <img src={toggle_light} alt="" className = 'toggle-icon' /> */}
       
    </div>
    
  )
}

export default Navbar


