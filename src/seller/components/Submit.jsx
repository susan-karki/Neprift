import React from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
const Submit = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    console.log("Submit clicked", data);
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key]);
        }
      });

      const response = await API.post("/product", formData); 
      console.log("POST response:", response);

      if (response.status === 201) {
        alert("Product added successfully!");
        navigate("/submit"); 
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert(err?.response?.data?.message || err.message);
    }
  };

  const handleUpdate = async (data) => {
    console.log("Update clicked", data);
    if (!data.id) return alert("Cannot update: no product ID");
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key]);
        }
      });

      const response = await API.put(`/product/${data.id}`, formData);
      console.log("PUT response:", response);
      alert("Product updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      alert(err?.response?.data?.message || err.message);
    }
  };

  const handleDelete = async (data) => {
    console.log("Delete clicked", data);
    if (!data.id) return alert("Cannot delete: no product ID");
    try {
      const response = await API.delete(`/product/${data.id}`);
      console.log("DELETE response:", response);
      alert("Product deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert(err?.response?.data?.message || err.message);
    }
  };

  return (
    <AddProduct
      productData={{}} 
      onSubmit={handleSubmit}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
    />
  );
};

export default Submit;

