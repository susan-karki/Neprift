import React, { useState } from "react";
import "./AddProduct.css";
import Layout from "../../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ type, onSubmit }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    price: "",
    seller: "",
    condition: "excellent",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <Layout>
      <div className="addproduct-container">
        <div className="addproduct-card">
          <h1 className="addTitle">Add Your Product</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputsection">
              <div className="addinput">
                <label htmlFor="title">Product</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="addinput">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={data.category}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="addinput">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="addinput">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="addinput">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="addinput">
                <label htmlFor="seller">Seller</label>
                <input
                  type="text"
                  id="seller"
                  name="seller"
                  value={data.seller}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="conditions">
                <label htmlFor="condition">Condition</label>
                <select
                  name="condition"
                  id="condition"
                  value={data.condition}
                  onChange={handleChange}
                >
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
              </div>
            </div>

            <div className="productbutton-container">
              <button
                className="productButtonAdd"
                type="submit"
                onClick={() => navigate("/submit")}
              >
                Submit
              </button>
              <button
                className="productButtonAdd"
                type="button"
                onClick={() => navigate("/update")}
              >
                Update
              </button>
              <button
                className="productButtonAdd"
                type="button"
                onClick={() => navigate("/delete")}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
