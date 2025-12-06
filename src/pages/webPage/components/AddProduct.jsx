// import React, { useState, useEffect } from "react";
// import "./AddProduct.css";
// import Layout from "../../../components/layout/Layout";

// const AddProduct = ({ productData, onSubmit, onUpdate, onDelete }) => {
//   const [data, setData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     description: "",
//     image: null, // <-- use null for files
//     price: "",
//     seller: "",
//     condition: "excellent",
//   });

//   // Load existing product data if any
//   useEffect(() => {
//     if (productData) {
//       setData({ ...productData });
//     }
//   }, [productData]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setData({
//       ...data,
//       [name]: name === "image" ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submit button clicked", data);
//     if (onSubmit) onSubmit(data);
//   };

//   return (
//     <Layout>
//       <div className="addproduct-container">
//         <div className="addproduct-card">
//           <h1 className="addTitle">Add or Manage Your Product</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="inputsection">
//               <div className="addinput">
//                 <label>Product</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={data.title}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="addinput">
//                 <label>Category</label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={data.category}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="addinput">
//                 <label>Image</label>
//                 <input type="file" name="image" onChange={handleChange} />
//               </div>

//               <div className="addinput">
//                 <label>Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={data.price}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="addinput">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={data.description}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="addinput">
//                 <label>Seller</label>
//                 <input
//                   type="text"
//                   name="seller"
//                   value={data.seller}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="conditions">
//                 <label>Condition</label>
//                 <select
//                   name="condition"
//                   value={data.condition}
//                   onChange={handleChange}
//                 >
//                   <option value="excellent">Excellent</option>
//                   <option value="good">Good</option>
//                   <option value="fair">Fair</option>
//                 </select>
//               </div>
//             </div>

//             <div className="productbutton-container">
//               <button className="productButtonAdd" type="submit">
//                 Submit
//               </button>

//               <button
//                 className="productButtonAdd"
//                 type="button"
//                 onClick={() => {
//                   console.log("Update button clicked", data);
//                   if (!data.id) return alert("Cannot update: no product ID");
//                   onUpdate && onUpdate(data);
//                 }}
//               >
//                 Update
//               </button>

//               <button
//                 className="productButtonAdd"
//                 type="button"
//                 onClick={() => {
//                   console.log("Delete button clicked", data);
//                   if (!data.id) return alert("Cannot delete: no product ID");
//                   onDelete && onDelete(data);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AddProduct;



// import React, { useState, useEffect } from "react";
// import "./AddProduct.css";
// import Layout from "../../../components/layout/Layout";

// const AddProduct = ({ productData, onSubmit, onUpdate, onDelete }) => {
//   const [data, setData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     description: "",
//     image: null,
//     price: "",
//     seller: "",
//     condition: "excellent",
//   });

//   useEffect(() => {
//     if (productData) {
//       setData({ ...productData });
//     }
//   }, [productData]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setData({
//       ...data,
//       [name]: name === "image" ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submit button clicked", data);
//     if (onSubmit) onSubmit(data);
//   };

//   return (
//     <Layout>
//       <div className="addproduct-container">
//         <div className="addproduct-card">
//           <h1 className="addTitle">Add or Manage Your Product</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="inputsection">
//               <div className="addinput">
//                 <label>Product</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={data.title}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="addinput">
//                 <label>Category</label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={data.category}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="addinput">
//                 <label>Image</label>
//                 <input type="file" name="image" onChange={handleChange} />
//               </div>

//               <div className="addinput">
//                 <label>Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={data.price}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="addinput">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={data.description}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="addinput">
//                 <label>Seller</label>
//                 <input
//                   type="text"
//                   name="seller"
//                   value={data.seller}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="conditions">
//                 <label>Condition</label>
//                 <select
//                   name="condition"
//                   value={data.condition}
//                   onChange={handleChange}
//                 >
//                   <option value="excellent">Excellent</option>
//                   <option value="good">Good</option>
//                   <option value="fair">Fair</option>
//                 </select>
//               </div>
//             </div>

//             <div className="productbutton-container">
//               <button className="productButtonAdd" type="submit">
//                 Submit
//               </button>

//               <button
//                 className="productButtonAdd"
//                 type="button"
//                 onClick={() => {
//                   console.log("Update button clicked", data);
//                   if (!data.id) return alert("Cannot update: no product ID");
//                   onUpdate && onUpdate(data);
//                 }}
//               >
//                 Update
//               </button>

//               <button
//                 className="productButtonAdd"
//                 type="button"
//                 onClick={() => {
//                   console.log("Delete button clicked", data);
//                   if (!data.id) return alert("Cannot delete: no product ID");
//                   onDelete && onDelete(data);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AddProduct;


// import React, { useState, useEffect } from "react";
// import "./AddProduct.css";
// import Layout from "../../../components/layout/Layout";
// import API from "../../../http/API"; // use your axios instance with baseURL

// const AddProduct = ({ productData, onSubmit, onUpdate, onDelete }) => {
//   const [data, setData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     description: "",
//     image: null,
//     price: "",
//     seller: "",
//     condition: "excellent",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (productData) setData({ ...productData });
//   }, [productData]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setData({ ...data, [name]: name === "image" ? files[0] : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       if (!token) throw new Error("Please login first");

//       const formData = new FormData();
//       Object.keys(data).forEach((key) => {
//         if (data[key] !== undefined && data[key] !== null) {
//           formData.append(key, data[key]);
//         }
//       });

//       const response = await API.post("/product", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product added successfully!");
//       if (onSubmit) onSubmit(response.data);

//       setData({
//         id: "",
//         title: "",
//         category: "",
//         description: "",
//         image: null,
//         price: "",
//         seller: "",
//         condition: "excellent",
//       });
//     } catch (err) {
//       console.error("Error adding product:", err);
//       setError(err.response?.data?.message || err.message);
//       alert(err.response?.data?.message || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!data.id) return alert("Cannot update: no product ID");
//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       if (!token) throw new Error("Please login first");

//       const formData = new FormData();
//       Object.keys(data).forEach((key) => {
//         if (data[key] !== undefined && data[key] !== null) formData.append(key, data[key]);
//       });

//       const response = await API.put(`/product/${data.id}`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product updated successfully!");
//       if (onUpdate) onUpdate(response.data);
//     } catch (err) {
//       console.error("Error updating product:", err);
//       setError(err.response?.data?.message || err.message);
//       alert(err.response?.data?.message || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!data.id) return alert("Cannot delete: no product ID");
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       if (!token) throw new Error("Please login first");

//       await API.delete(`/product/${data.id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product deleted successfully!");
//       if (onDelete) onDelete(data);

//       setData({
//         id: "",
//         title: "",
//         category: "",
//         description: "",
//         image: null,
//         price: "",
//         seller: "",
//         condition: "excellent",
//       });
//     } catch (err) {
//       console.error("Error deleting product:", err);
//       setError(err.response?.data?.message || err.message);
//       alert(err.response?.data?.message || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className="addproduct-container">
//         <div className="addproduct-card">
//           <h1 className="addTitle">Add or Manage Your Product</h1>
//           {error && <div className="error-message">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="inputsection">
//               {["title", "category", "price", "seller"].map((field) => (
//                 <div className="addinput" key={field}>
//                   <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//                   <input
//                     type={field === "price" ? "number" : "text"}
//                     name={field}
//                     value={data[field]}
//                     onChange={handleChange}
//                     required
//                     disabled={loading}
//                   />
//                 </div>
//               ))}

//               <div className="addinput">
//                 <label>Image</label>
//                 <input type="file" name="image" onChange={handleChange} disabled={loading} />
//               </div>

//               <div className="addinput">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={data.description}
//                   onChange={handleChange}
//                   required
//                   disabled={loading}
//                 />
//               </div>

//               <div className="conditions">
//                 <label>Condition</label>
//                 <select
//                   name="condition"
//                   value={data.condition}
//                   onChange={handleChange}
//                   disabled={loading}
//                 >
//                   <option value="excellent">Excellent</option>
//                   <option value="good">Good</option>
//                   <option value="fair">Fair</option>
//                 </select>
//               </div>
//             </div>

//             <div className="productbutton-container">
//               <button className="productButtonAdd" type="submit" disabled={loading}>
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//               <button className="productButtonAdd" type="button" onClick={handleUpdate} disabled={loading}>
//                 {loading ? "Updating..." : "Update"}
//               </button>
//               <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
//                 {loading ? "Deleting..." : "Delete"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AddProduct;



// this code is the latest......................................


// import React, { useState, useEffect } from "react";
// import "./AddProduct.css";
// import Layout from "../../../components/layout/Layout";
// import API from "../../../http/API"; // axios instance with baseURL

// const AddProduct = ({ productData, onSubmit, onUpdate, onDelete }) => {
//   const [data, setData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     description: "",
//     image: null,
//     price: "",
//     seller: "",
//     condition: "excellent",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (productData) setData({ ...productData });
//   }, [productData]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setData({ ...data, [name]: name === "image" ? files[0] : value });
//   };

//   const createFormData = () => {
//     const formData = new FormData();

//     const productRequest = {
//       name: data.title,
//       categoryId: Number(data.category), // adjust if category is ID
//       userId: Number(data.seller),       // adjust if seller is user ID
//       description: data.description,
//       price: Number(data.price),
//       quantity: 1,                       // default quantity
//     };

//     formData.append(
//       "productRequest",
//       new Blob([JSON.stringify(productRequest)], { type: "application/json" })
//     );

//     if (data.image) formData.append("imageFile", data.image);

//     return formData;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       if (!token) throw new Error("Please login first");

//       const formData = createFormData();

//       const response = await API.post("/product", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Product added successfully!");
//       if (onSubmit) onSubmit(response.data);

//       setData({
//         id: "",
//         title: "",
//         category: "",
//         description: "",
//         image: null,
//         price: "",
//         seller: "",
//         condition: "excellent",
//       });
//     } catch (err) {
//       console.error("Error adding product:", err);
//       setError(err.response?.data?.message || err.message);
//       alert(err.response?.data?.message || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!data.id) return alert("Cannot update: no product ID");
//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       if (!token) throw new Error("Please login first");

//       const formData = createFormData();

//       const response = await API.put(`/product/${data.id}`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Product updated successfully!");
//       if (onUpdate) onUpdate(response.data);
//     } catch (err) {
//       console.error("Error updating product:", err);
//       setError(err.response?.data?.message || err.message);
//       alert(err.response?.data?.message || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!data.id) return alert("Cannot delete: no product ID");
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       if (!token) throw new Error("Please login first");

//       await API.delete(`/product/${data.id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product deleted successfully!");
//       if (onDelete) onDelete(data);

//       setData({
//         id: "",
//         title: "",
//         category: "",
//         description: "",
//         image: null,
//         price: "",
//         seller: "",
//         condition: "excellent",
//       });
//     } catch (err) {
//       console.error("Error deleting product:", err);
//       setError(err.response?.data?.message || err.message);
//       alert(err.response?.data?.message || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className="addproduct-container">
//         <div className="addproduct-card">
//           <h1 className="addTitle">Add or Manage Your Product</h1>
//           {error && <div className="error-message">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="inputsection">
//               {["title", "category", "price", "seller"].map((field) => (
//                 <div className="addinput" key={field}>
//                   <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//                   <input
//                     type={field === "price" ? "number" : "text"}
//                     name={field}
//                     value={data[field]}
//                     onChange={handleChange}
//                     required
//                     disabled={loading}
//                   />
//                 </div>
//               ))}

//               <div className="addinput">
//                 <label>Image</label>
//                 <input type="file" name="image" onChange={handleChange} disabled={loading} />
//               </div>

//               <div className="addinput">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={data.description}
//                   onChange={handleChange}
//                   required
//                   disabled={loading}
//                 />
//               </div>

//               <div className="conditions">
//                 <label>Condition</label>
//                 <select
//                   name="condition"
//                   value={data.condition}
//                   onChange={handleChange}
//                   disabled={loading}
//                 >
//                   <option value="excellent">Excellent</option>
//                   <option value="good">Good</option>
//                   <option value="fair">Fair</option>
//                 </select>
//               </div>
//             </div>

//             <div className="productbutton-container">
//               <button className="productButtonAdd" type="submit" disabled={loading}>
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//               <button className="productButtonAdd" type="button" onClick={handleUpdate} disabled={loading}>
//                 {loading ? "Updating..." : "Update"}
//               </button>
//               <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
//                 {loading ? "Deleting..." : "Delete"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AddProduct;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AddProduct.css";
// import Layout from "../../../components/layout/Layout";
// import API from "../../../http/API"; // axios instance with baseURL

// const AddProduct = ({ productData, onSubmit, onUpdate, onDelete }) => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     description: "",
//     image: null,
//     price: "",
//     seller: "",
//     condition: "excellent",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check if token is valid on mount
//   useEffect(() => {
//     const verifyToken = async () => {
//       const token = localStorage.getItem("token1");
//       if (!token) {
//         alert("Please login first");
//         navigate("/login");
//         return;
//       }

//       try {
//         // Replace /auth/verify with your backend endpoint that validates token
//         await API.get("/auth/verify", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setIsAuthenticated(true);
//       } catch (err) {
//         alert("Session invalid. Please login again.");
//         localStorage.removeItem("token1");
//         navigate("/login");
//       }
//     };

//     verifyToken();
//   }, [navigate]);

//   useEffect(() => {
//     if (productData) setData({ ...productData });
//   }, [productData]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setData({ ...data, [name]: name === "image" ? files[0] : value });
//   };

//   const createFormData = () => {
//     const formData = new FormData();
//     const productRequest = {
//       name: data.title,
//       categoryId: Number(data.category),
//       userId: Number(data.seller),
//       description: data.description,
//       price: Number(data.price),
//       quantity: 1,
//     };

//     formData.append(
//       "productRequest",
//       new Blob([JSON.stringify(productRequest)], { type: "application/json" })
//     );

//     if (data.image) formData.append("imageFile", data.image);

//     return formData;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isAuthenticated) return alert("You must be logged in to add products.");
//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       const formData = createFormData();

//       const response = await API.post("/product", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product added successfully!");
//       if (onSubmit) onSubmit(response.data);

//       setData({
//         id: "",
//         title: "",
//         category: "",
//         description: "",
//         image: null,
//         price: "",
//         seller: "",
//         condition: "excellent",
//       });
//     } catch (err) {
//       console.error("Error adding product:", err);
//       setError(err.response?.data?.message || err.message);
//       if (err.response?.status === 401) {
//         alert("Unauthorized. Please login again.");
//         localStorage.removeItem("token1");
//         navigate("/login");
//       } else {
//         alert(err.response?.data?.message || err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token1");
//     navigate("/login");
//   };

//   return (
//     <Layout>
//       <div className="addproduct-container">
//         <div className="addproduct-card">
//           <h1 className="addTitle">Add or Manage Your Product</h1>
//           <button className="logoutButton" onClick={handleLogout}>
//             Logout
//           </button>

//           {error && <div className="error-message">{error}</div>}

//           <form onSubmit={handleSubmit}>
//             <div className="inputsection">
//               {["title", "category", "price", "seller"].map((field) => (
//                 <div className="addinput" key={field}>
//                   <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//                   <input
//                     type={field === "price" ? "number" : "text"}
//                     name={field}
//                     value={data[field]}
//                     onChange={handleChange}
//                     required
//                     disabled={loading}
//                   />
//                 </div>
//               ))}

//               <div className="addinput">
//                 <label>Image</label>
//                 <input type="file" name="image" onChange={handleChange} disabled={loading} />
//               </div>

//               <div className="addinput">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={data.description}
//                   onChange={handleChange}
//                   required
//                   disabled={loading}
//                 />
//               </div>

//               <div className="conditions">
//                 <label>Condition</label>
//                 <select
//                   name="condition"
//                   value={data.condition}
//                   onChange={handleChange}
//                   disabled={loading}
//                 >
//                   <option value="excellent">Excellent</option>
//                   <option value="good">Good</option>
//                   <option value="fair">Fair</option>
//                 </select>
//               </div>
//             </div>

//             <div className="productbutton-container">
//               <button className="productButtonAdd" type="submit" disabled={loading}>
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AddProduct;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AddProduct.css";
// import Layout from "../../../components/layout/Layout";
// import API from "../../../http/API"; // axios instance with baseURL

// const AddProduct = ({ productData, onSubmit, onUpdate, onDelete }) => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     description: "",
//     image: null,
//     price: "",
//     seller: "",
//     condition: "excellent",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Verify token on mount
//   useEffect(() => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//     } else {
//       setIsAuthenticated(true);
//     }
//   }, [navigate]);

//   useEffect(() => {
//     if (productData) setData({ ...productData });
//   }, [productData]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setData({ ...data, [name]: name === "image" ? files[0] : value });
//   };

//   const createFormData = () => {
//     const formData = new FormData();
//     const productRequest = {
//       name: data.title,
//       categoryId: Number(data.category),
//       userId: Number(data.seller),
//       description: data.description,
//       price: Number(data.price),
//       quantity: 1,
//     };

//     formData.append(
//       "productRequest",
//       new Blob([JSON.stringify(productRequest)], { type: "application/json" })
//     );

//     if (data.image) formData.append("imageFile", data.image);

//     return formData;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isAuthenticated) return alert("You must be logged in to add products.");
//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       const formData = createFormData();

//       const response = await API.post("/product", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product added successfully!");
//       if (onSubmit) onSubmit(response.data);

//       setData({
//         id: "",
//         title: "",
//         category: "",
//         description: "",
//         image: null,
//         price: "",
//         seller: "",
//         condition: "excellent",
//       });
//     } catch (err) {
//       console.error("Error adding product:", err);
//       setError(err.response?.data?.message || err.message);
//       if (err.response?.status === 401) {
//         alert("Session expired. Please login again.");
//         localStorage.removeItem("token1");
//         navigate("/login");
//       } else {
//         alert(err.response?.data?.message || err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!data.id) return alert("Cannot update: no product ID");
//     if (!isAuthenticated) return alert("You must be logged in to update products.");
//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       const formData = createFormData();

//       const response = await API.put(`/product/${data.id}`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product updated successfully!");
//       if (onUpdate) onUpdate(response.data);
//     } catch (err) {
//       console.error("Error updating product:", err);
//       setError(err.response?.data?.message || err.message);
//       if (err.response?.status === 401) {
//         alert("Session expired. Please login again.");
//         localStorage.removeItem("token1");
//         navigate("/login");
//       } else {
//         alert(err.response?.data?.message || err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!data.id) return alert("Cannot delete: no product ID");
//     if (!isAuthenticated) return alert("You must be logged in to delete products.");
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token1");
//       await API.delete(`/product/${data.id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product deleted successfully!");
//       if (onDelete) onDelete(data);

//       setData({
//         id: "",
//         title: "",
//         category: "",
//         description: "",
//         image: null,
//         price: "",
//         seller: "",
//         condition: "excellent",
//       });
//     } catch (err) {
//       console.error("Error deleting product:", err);
//       setError(err.response?.data?.message || err.message);
//       if (err.response?.status === 401) {
//         alert("Session expired. Please login again.");
//         localStorage.removeItem("token1");
//         navigate("/login");
//       } else {
//         alert(err.response?.data?.message || err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className="addproduct-container">
//         <div className="addproduct-card">
//           <h1 className="addTitle">Add or Manage Your Product</h1>

//           {error && <div className="error-message">{error}</div>}

//           <form onSubmit={handleSubmit}>
//             <div className="inputsection">
//               {["title", "category", "price", "seller"].map((field) => (
//                 <div className="addinput" key={field}>
//                   <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//                   <input
//                     type={field === "price" ? "number" : "text"}
//                     name={field}
//                     value={data[field]}
//                     onChange={handleChange}
//                     required
//                     disabled={loading}
//                   />
//                 </div>
//               ))}

//               <div className="addinput">
//                 <label>Image</label>
//                 <input type="file" name="image" onChange={handleChange} disabled={loading} />
//               </div>

//               <div className="addinput">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={data.description}
//                   onChange={handleChange}
//                   required
//                   disabled={loading}
//                 />
//               </div>

//               <div className="conditions">
//                 <label>Condition</label>
//                 <select
//                   name="condition"
//                   value={data.condition}
//                   onChange={handleChange}
//                   disabled={loading}
//                 >
//                   <option value="excellent">Excellent</option>
//                   <option value="good">Good</option>
//                   <option value="fair">Fair</option>
//                 </select>
//               </div>
//             </div>

//             <div className="productbutton-container">
//               <button className="productButtonAdd" type="submit" disabled={loading}>
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//               <button className="productButtonAdd" type="button" onClick={handleUpdate} disabled={loading}>
//                 {loading ? "Updating..." : "Update"}
//               </button>
//               <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
//                 {loading ? "Deleting..." : "Delete"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AddProduct;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
import Layout from "../../../components/layout/Layout";
import API from "../../../http/API"; // axios instance with baseURL

const AddProduct = ({ productData, onSubmit, onUpdate, onDelete }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    image: null,
    price: "",
    seller: "",
    condition: "excellent",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("token1");
    if (!token) {
      alert("Please login first to access this page.");
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
      userId: Number(data.seller),
      description: data.description,
      price: Number(data.price),
      quantity: 1,
    };

    formData.append(
      "productRequest",
      new Blob([JSON.stringify(productRequest)], { type: "application/json" })
    );

    if (data.image) formData.append("imageFile", data.image);

    return formData;
  };

  // Utility function to get token and block unauthorized actions
  const getAuthToken = () => {
    const token = localStorage.getItem("token1");
    if (!token) {
      alert("You must be logged in to perform this action.");
      navigate("/auth/login");
      return null;
    }
    return token;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getAuthToken();
    if (!token) return; // stop execution if not logged in

    setLoading(true);
    setError(null);

    try {
      const formData = createFormData();
      const response = await API.post("/product", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Product added successfully!");
      if (onSubmit) onSubmit(response.data);

      setData({
        id: "",
        title: "",
        category: "",
        description: "",
        image: null,
        price: "",
        seller: "",
        condition: "excellent",
      });
    } catch (err) {
      console.error("Error adding product:", err);
      setError(err.response?.data?.message || err.message);
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token1");
        navigate("/auth/login");
      } else {
        alert(err.response?.data?.message || err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!data.id) return alert("Cannot update: no product ID");
    const token = getAuthToken();
    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      const formData = createFormData();
      const response = await API.put(`/product/${data.id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Product updated successfully!");
      if (onUpdate) onUpdate(response.data);
    } catch (err) {
      console.error("Error updating product:", err);
      setError(err.response?.data?.message || err.message);
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token1");
        navigate("/auth/login");
      } else {
        alert(err.response?.data?.message || err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!data.id) return alert("Cannot delete: no product ID");
    const token = getAuthToken();
    if (!token) return;

    if (!window.confirm("Are you sure you want to delete this product?")) return;

    setLoading(true);
    setError(null);

    try {
      await API.delete(`/product/${data.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Product deleted successfully!");
      if (onDelete) onDelete(data);

      setData({
        id: "",
        title: "",
        category: "",
        description: "",
        image: null,
        price: "",
        seller: "",
        condition: "excellent",
      });
    } catch (err) {
      console.error("Error deleting product:", err);
      setError(err.response?.data?.message || err.message);
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token1");
        navigate("/auth/login");
      } else {
        alert(err.response?.data?.message || err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="addproduct-container">
        <div className="addproduct-card">
          <h1 className="addTitle">Add or Manage Your Product</h1>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="inputsection">
              {["title", "category", "price", "seller"].map((field) => (
                <div className="addinput" key={field}>
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input
                    type={field === "price" ? "number" : "text"}
                    name={field}
                    value={data[field]}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
              ))}

              <div className="addinput">
                <label>Image</label>
                <input type="file" name="image" onChange={handleChange} disabled={loading} />
              </div>

              <div className="addinput">
                <label>Description</label>
                <textarea
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="conditions">
                <label>Condition</label>
                <select
                  name="condition"
                  value={data.condition}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
              </div>
            </div>

            <div className="productbutton-container">
              <button className="productButtonAdd" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
              <button className="productButtonAdd" type="button" onClick={handleUpdate} disabled={loading}>
                {loading ? "Updating..." : "Update"}
              </button>
              <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;

