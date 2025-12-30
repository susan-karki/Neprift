// import React from 'react'
// import './singleproduct.css'
// import Layout from '../../../components/layout/Layout'
// import { Link } from 'react-router-dom'

// const Singleproduct = () => {
//   return (
//     <Layout>
//    <div className="body">
//     <div className="product-container">
//          <div className="product-image">
//             <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f2d9229b65c248488c78af3b00851dab_9366/Runfalcon_3.0_Shoes_White_HP7557_01_standard.jpg" alt=" here is an image" />
//          </div>
//          <div className="product-details">
//             <h1 className="product-title">Product Name</h1>
//             <p className="product-price">Rs.4000</p>
//             <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a numquam maiores, dignissimos deserunt architecto culpa alias neque natus impedit similique sint esse beatae cupiditate atque ea repellat minus quidem.</p>
//             <div className="product-actions">
//                 <label htmlFor="Quantity">Quantity</label>
//                 <input type="number" id = 'Quantity' name = 'Quantity' /* value = '1' min = '1'*/ />
//                 <Link to = '/cartpage'><button className="addtocart">Add to Cart</button></Link>
//                 <Link to = '/payment'><button className="buy">Buy Now</button></Link>
//             </div>
//             <div className="category">Category : <span>Shoes</span></div>
//          </div>

//     </div>
//     </div>
//     </Layout>
//   )
// }

// export default Singleproduct


// import React, { useState } from 'react';
// import './singleproduct.css';
// import Layout from '../../../components/layout/Layout';
// import { Link } from 'react-router-dom';

// const Singleproduct = () => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (e) => {
//     const value = Number(e.target.value);

//     // Prevent zero or negative values
//     if (value < 1) {
//       setQuantity(1);
//     } else {
//       setQuantity(value);
//     }
//   };

//   return (
//     <Layout>
//       <div className="body">
//         <div className="product-container">
//           <div className="product-image">
//             <img
//               src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f2d9229b65c248488c78af3b00851dab_9366/Runfalcon_3.0_Shoes_White_HP7557_01_standard.jpg"
//               alt="Product"
//             />
//           </div>

//           <div className="product-details">
//             <h1 className="product-title">Product Name</h1>
//             <p className="product-price">Rs.4000</p>
//             <p className="product-description">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             </p>

//             <div className="product-actions">
//               <label htmlFor="Quantity">Quantity</label>
//               <input
//                 type="number"
//                 id="Quantity"
//                 name="Quantity"
//                 min="1"
//                 value={quantity}
//                 onChange={handleQuantityChange}
//               />

//               <Link to="/cartpage">
//                 <button className="addtocart">Add to Cart</button>
//               </Link>

//               <Link to="/payment">
//                 <button className="buy">Buy Now</button>
//               </Link>
//             </div>

//             <div className="category">
//               Category : <span>Shoes</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Singleproduct;



import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import API from "../../../http/API";
import "./singleproduct.css";

const BASE_IMAGE_URL = "http://localhost:8080/images/";

const Singleproduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    setQuantity(value < 1 ? 1 : value);
  };

  // 🔹 Normalize image path safely
  const getImageUrl = (path) => {
    if (!path) return "/default-image.png";

    // If backend already sends full URL
    if (path.startsWith("http")) return path;

    // Handle Windows or Linux file paths
    const filename = path.split(/[/\\]/).pop();
    return `${BASE_IMAGE_URL}${filename}`;
  };

  const fetchSingleProduct = async () => {
    try {
      const res = await API.get(`/auth/product/${id}`);
      console.log("Single product response:", res.data);

      setProduct(res.data.responseBody);
    } catch (error) {
      console.error("Failed to load product", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <p style={{ textAlign: "center" }}>Loading product...</p>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <p style={{ textAlign: "center" }}>Product not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="body">
        <div className="product-container">
          <div className="product-image">
            <img
              src={getImageUrl(product.imagePath)}
              alt={product.name}
              onError={(e) => {
                e.target.src = "/default-image.png";
              }}
            />
          </div>

          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">Rs. {product.price}</p>
            <p className="product-description">{product.description}</p>

            <div className="product-actions">
              <label>Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />

              <Link to="/cartpage">
                <button className="addtocart">Add to Cart</button>
              </Link>

              <Link to="/payment">
                <button className="buy">Buy Now</button>
              </Link>
            </div>

            <div className="category">
              Category : <span>{product.categoryId}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Singleproduct;

