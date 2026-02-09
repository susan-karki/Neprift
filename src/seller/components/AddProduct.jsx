import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../http/API";
import "./AddProduct.css";

const AddProduct = ({ productData, onSubmit, onUpdate, onDelete, refreshHome }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    image: null,
    price: "",
    condition: "excellent",
    quantity: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token1");
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.id || payload.userId;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token1");
    if (!token) {
      toast.error("Please login first");
      navigate("/auth/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (productData) setData({ ...productData });
  }, [productData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData({ ...data, [name]: name === "image" ? files[0] : value });
  };

  const createFormData = () => {
    const formData = new FormData();
    const productRequest = {
      name: data.title,
      categoryId: Number(data.category),
      userId: getUserIdFromToken(),
      description: data.description,
      price: Number(data.price),
      quantity: Number(data.quantity),
    };
    formData.append(
      "productRequest",
      new Blob([JSON.stringify(productRequest)], { type: "application/json" })
    );
    if (data.image) formData.append("imageFile", data.image);
    return formData;
  };

  const getAuthToken = () => {
    const token = localStorage.getItem("token1");
    if (!token) {
      toast.error("You must be logged in");
      navigate("/auth/login");
      return null;
    }
    return token;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getAuthToken();
    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      const res = await API.post("/product", createFormData());
      toast.success("Product added successfully");
      onSubmit && onSubmit(res.data);
      refreshHome && refreshHome();

      setData({
        id: "",
        title: "",
        category: "",
        description: "",
        image: null,
        price: "",
        condition: "excellent",
        quantity: 1,
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add product");
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addproduct-container">
      <div className="addproduct-card">
        <h1 className="addTitle">Add or Manage Your Product</h1>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="inputsection">
            <div className="addinput">
              <label>TITLE</label>
              <input name="title" value={data.title} onChange={handleChange} required />
            </div>

            <div className="addinput">
              <label>CATEGORY</label>
              <select name="category" value={data.category} onChange={handleChange} required>
                <option value="">Select Category</option>
                <option value="1">Fashion & Clothing</option>
                <option value="2">Footwear</option>
                <option value="3">Electronics</option>
                <option value="4">Accessories</option>
                <option value="5">Home & Living</option>
                <option value="6">Beauty & Personal</option>
                <option value="7">Toys & Baby Products</option>
                <option value="8">Groceries & Essentials</option>
                <option value="9">Books & Stationery</option>
                <option value="10">Sports & Fitness</option>
                <option value="11">Automotive</option>
                <option value="12">Gaming</option>
              </select>
            </div>

            <div className="addinput">
              <label>IMAGE</label>
              <input type="file" name="image" onChange={handleChange} />
            </div>
            <div className="addinput">
              <label>PRICE</label>
              <input type="number" name="price" value={data.price} onChange={handleChange} required />
            </div>

            <div className="addinput">
              <label>CONDITION</label>
              <select name="condition" value={data.condition} onChange={handleChange}>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>

            <div className="addinput">
              <label>QUANTITY</label>
              <input type="number" name="quantity" value={data.quantity} min="1" onChange={handleChange} required />
            </div>

            <div className="addinput">
              <label>DESCRIPTION</label>
              <textarea name="description" value={data.description} onChange={handleChange} required />
            </div>
          </div>

          <div className="productbutton-container">
            <button className="productButtonAdd" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

