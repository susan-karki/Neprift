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


import React, { useState } from 'react';
import './singleproduct.css';
import Layout from '../../../components/layout/Layout';
import { Link } from 'react-router-dom';

const Singleproduct = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);

    // Prevent zero or negative values
    if (value < 1) {
      setQuantity(1);
    } else {
      setQuantity(value);
    }
  };

  return (
    <Layout>
      <div className="body">
        <div className="product-container">
          <div className="product-image">
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f2d9229b65c248488c78af3b00851dab_9366/Runfalcon_3.0_Shoes_White_HP7557_01_standard.jpg"
              alt="Product"
            />
          </div>

          <div className="product-details">
            <h1 className="product-title">Product Name</h1>
            <p className="product-price">Rs.4000</p>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="product-actions">
              <label htmlFor="Quantity">Quantity</label>
              <input
                type="number"
                id="Quantity"
                name="Quantity"
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
              Category : <span>Shoes</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Singleproduct;
