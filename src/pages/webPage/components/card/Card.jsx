import React from 'react'
import './Card.css'
import { Link, useNavigate } from 'react-router-dom'
import image from "../../../../assets/anime.jpg"
const Card = () => {
  const navigate = useNavigate();
  const handleAddToCart =(e) =>{
    e.stopPropagation();
    navigate('/cartpage');
  }
  return (
      <div className="card">
       <Link to = '/singleproduct' className="card-link">
       <div className="card-image">
        <img src= {image} alt="there is a card image " />
        <i className = " bx bx-star"></i>
       </div>
       <div className="card-content">
        <h3>Luffy Action Figure</h3>
        <p>This is Monkey d luffy the man who is gonna be a king of Pirates</p>
       </div>
       </Link>
       <div className="card-content">
        <button className="add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
       </div>
      </div>
  )
}

export default Card
