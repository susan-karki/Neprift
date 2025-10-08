import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import image from "../../../../assets/anime.jpg"
const Card = () => {
  return (
    // <div className="container-card">
      <div className="card">
       <div className="card-image">
        <img src= {image} alt="there is a card image " />
        <i className = " bx bx-star"></i>
       </div>
       <div className="card-content">
        <h3>Luffy Action Figure</h3>
        <p>This is Monkey d luffy the man who is gonna be a king of Pirates</p>
        <button className="add-to-cart">Add To Cart</button>
       </div>
      </div>
    // </div>


  )
}

export default Card