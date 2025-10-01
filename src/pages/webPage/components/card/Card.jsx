import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <Link to ='/singleproduct'>
      <div className="card">
        <img className = 'card-img' src= " " alt="comes card image" />
        <h2 className = "card-title">Neprift</h2>
        <p className = "card-text">Hey this is Neprift..!</p>
      </div>

    </Link>

  )
}

export default Card