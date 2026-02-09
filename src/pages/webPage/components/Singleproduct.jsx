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
  const getImageUrl = (path) => {
    if (!path) return "/default-image.png";
    if (path.startsWith("http")) return path;
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
{/* 
              <Link to="/cartpage">
                <button className="addtocart">Add to Cart</button>
              </Link>

              <Link to="/payment">
                <button className="buy">Buy Now</button>
              </Link> */}
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

