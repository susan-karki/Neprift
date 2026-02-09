import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ product, onAddToCart, isSeller, onUpdate, onDelete }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/singleproduct/${product.id}`);
  };
  const handleAddToCartClick = (e) => {
    e.stopPropagation(); 
    if (onAddToCart) onAddToCart();
  };

  const handleUpdateClick = (e) => {
    e.stopPropagation();
    if (onUpdate) onUpdate(product.id);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete(product.id);
  };

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <div className="card-image">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => (e.target.src = "/default-image.png")}
        />
        <i className="bx bx-star"></i>
      </div>

      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4 className="price">Rs. {product.price}</h4>
      </div>

      <div className="card-content">
        {isSeller ? (
          <div className="seller-buttons">
            <button className="update-btn" onClick={handleUpdateClick}>
              Update
            </button>
            <button className="delete-btn" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        ) : (
          <button className="add-to-cart" onClick={handleAddToCartClick}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

