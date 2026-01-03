// import React from 'react'
// import './Card.css'
// import { Link, useNavigate } from 'react-router-dom'
// import image from "../../../../assets/anime.jpg"
// const Card = () => {
//   const navigate = useNavigate();
//   const handleAddToCart =(e) =>{
//     e.stopPropagation();
//     navigate('/cartpage');
//   }
//   return (
//       <div className="card">
//        <Link to = '/singleproduct' className="card-link">
//        <div className="card-image">
//         <img src= {image} alt="there is a card image " />
//         <i className = " bx bx-star"></i>
//        </div>
//        <div className="card-content">
//         <h3>Luffy Action Figure</h3>
//         <p>This is Monkey d luffy the man who is gonna be a king of Pirates</p>
//         <h4 className="price">Rs. 4000</h4>
//        </div>
//        </Link>
//        <div className="card-content">
//         <button className="add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
//        </div>
//       </div>
//   )
// }

// export default Card


// import React from 'react';
// import './Card.css';
// import { Link, useNavigate } from 'react-router-dom';

// const Card = ({ product }) => {
//   const navigate = useNavigate();

//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     // Here you can add to cart API or localStorage logic
//     navigate('/cartpage');
//   };

//   return (
//     <div className="card">
//       <Link to={`/singleproduct/${product.id}`} className="card-link">
//         <div className="card-image">
//           <img src={product.image} alt={product.name} />
//           <i className="bx bx-star"></i>
//         </div>
//         <div className="card-content">
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <h4 className="price">Rs. {product.price}</h4>
//         </div>
//       </Link>

//       <div className="card-content">
//         <button className="add-to-cart" onClick={handleAddToCart}>
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;




// import React from 'react';
// import './Card.css';
// import { Link, useNavigate } from 'react-router-dom';

// const Card = ({ product }) => {
//   const navigate = useNavigate();

//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     // Call your cart API here if needed
//     navigate('/cartpage');
//   };

//   return (
//     <div className="card">
//       <Link to={`/singleproduct/${product.id}`} className="card-link">
//         <div className="card-image">
//           <img src={product.image} alt={product.name} />
//           <i className="bx bx-star"></i>
//         </div>
//         <div className="card-content">
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <h4 className="price">Rs. {product.price}</h4>
//         </div>
//       </Link>

//       <div className="card-content">
//         <button className="add-to-cart" onClick={handleAddToCart}>
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;



// import React from "react";
// import "./Card.css";
// import { useNavigate } from "react-router-dom";

// const Card = ({ product }) => {
//   const navigate = useNavigate();

//   // Navigate to single product page
//   const handleCardClick = () => {
//     navigate(`/singleproduct/${product.id}`);
//   };

//   // Prevent navigation when clicking add to cart
//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     // Add to cart API can be called here later
//     navigate("/cartpage");
//   };

//   return (
//     <div className="card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
//       <div className="card-image">
//         <img src={product.image} alt={product.name} />
//         <i className="bx bx-star"></i>
//       </div>

//       <div className="card-content">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>
//         <h4 className="price">Rs. {product.price}</h4>
//       </div>

//       <div className="card-content">
//         <button className="add-to-cart" onClick={handleAddToCart}>
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;






// new 






// import React from "react";
// import "./Card.css";
// import { useNavigate } from "react-router-dom";

// const Card = ({ product, onAddToCart }) => {
//   const navigate = useNavigate();

//   // Navigate to single product page
//   const handleCardClick = () => {
//     navigate(`/singleproduct/${product.id}`);
//   };

//   // Add to cart (NO navigation here)
//   const handleAddToCartClick = (e) => {
//     e.stopPropagation(); // prevent card click
//     if (onAddToCart) {
//       onAddToCart();
//     }
//   };

//   return (
//     <div
//       className="card"
//       onClick={handleCardClick}
//       style={{ cursor: "pointer" }}
//     >
//       <div className="card-image">
//         <img src={product.image} alt={product.name} />
//         <i className="bx bx-star"></i>
//       </div>

//       <div className="card-content">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>
//         <h4 className="price">Rs. {product.price}</h4>
//       </div>

//       <div className="card-content">
//         <button
//           className="add-to-cart"
//           onClick={handleAddToCartClick}
//         >
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;





























// import React from "react";
// import "./Card.css";
// import { useNavigate } from "react-router-dom";

// const Card = ({ product, onAddToCart }) => {
//   const navigate = useNavigate();

//   // Navigate to single product page
//   const handleCardClick = () => {
//     navigate(`/singleproduct/${product.id}`);
//   };

//   // Add to cart button click
//   const handleAddToCartClick = (e) => {
//     e.stopPropagation(); // Prevent card click navigation

//     if (!onAddToCart) {
//       console.warn("Add to cart handler not provided");
//       return;
//     }

//     onAddToCart(); // API + redirect handled in Home.jsx
//   };

//   return (
//     <div
//       className="card"
//       onClick={handleCardClick}
//       style={{ cursor: "pointer" }}
//     >
//       {/* Product Image */}
//       <div className="card-image">
//         <img
//           src={product.image}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = "/default-image.png";
//           }}
//         />
//         <i className="bx bx-star"></i>
//       </div>

//       {/* Product Details */}
//       <div className="card-content">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>
//         <h4 className="price">Rs. {product.price}</h4>
//       </div>

//       {/* Action */}
//       <div className="card-content">
//         <button
//           className="add-to-cart"
//           onClick={handleAddToCartClick}
//         >
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;

















// import React from "react";
// import "./Card.css";
// import { useNavigate } from "react-router-dom";

// const Card = ({ product, onAddToCart }) => {
//   const navigate = useNavigate();

//   // Navigate to single product page
//   const handleCardClick = () => {
//     navigate(`/singleproduct/${product.id}`);
//   };

//   // Add to cart
//   const handleAddToCartClick = (e) => {
//     e.stopPropagation(); // prevent card click
//     if (onAddToCart) onAddToCart();
//   };

//   return (
//     <div className="card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
//       <div className="card-image">
//         <img
//           src={product.image}
//           alt={product.name}
//           onError={(e) => (e.target.src = "/default-image.png")}
//         />
//         <i className="bx bx-star"></i>
//       </div>

//       <div className="card-content">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>
//         <h4 className="price">Rs. {product.price}</h4>
//       </div>

//       <div className="card-content">
//         <button className="add-to-cart" onClick={handleAddToCartClick}>
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;














import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ product, onAddToCart, isSeller, onUpdate, onDelete }) => {
  const navigate = useNavigate();

  // Navigate to single product page
  const handleCardClick = () => {
    navigate(`/singleproduct/${product.id}`);
  };

  // Add to cart
  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // prevent card click
    if (onAddToCart) onAddToCart();
  };

  // Update
  const handleUpdateClick = (e) => {
    e.stopPropagation();
    if (onUpdate) onUpdate(product.id);
  };

  // Delete
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

