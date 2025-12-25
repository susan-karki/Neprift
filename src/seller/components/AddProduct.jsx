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

//   // Check authentication on mount
//   useEffect(() => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       alert("Please login first to access this page.");
//       navigate("/auth/login");
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

//   // Utility function to get token and block unauthorized actions
//   const getAuthToken = () => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       alert("You must be logged in to perform this action.");
//       navigate("/auth/login");
//       return null;
//     }
//     return token;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = getAuthToken();
//     if (!token) return; // stop execution if not logged in

//     setLoading(true);
//     setError(null);

//     try {
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
//         navigate("/auth/login");
//       } else {
//         alert(err.response?.data?.message || err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!data.id) return alert("Cannot update: no product ID");
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);
//     setError(null);

//     try {
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
//         navigate("/auth/login");
//       } else {
//         alert(err.response?.data?.message || err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!data.id) return alert("Cannot delete: no product ID");
//     const token = getAuthToken();
//     if (!token) return;

//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);
//     setError(null);

//     try {
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
//         navigate("/auth/login");
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








// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./AddProduct.css";
// // import Layout from "../../../components/layout/Layout";
// // import API from "../../../http/API";

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

//   useEffect(() => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("Please login first");
//       navigate("/auth/login");
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

//   const getAuthToken = () => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("You must be logged in");
//       navigate("/auth/login");
//       return null;
//     }
//     return token;
//   };

//   // ✅ ADD PRODUCT
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const formData = createFormData();
//       const res = await API.post("/product", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("Product added successfully");
//       onSubmit && onSubmit(res.data);

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
//       toast.error(err.response?.data?.message || "Failed to add product");
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);

//     try {
//       const formData = createFormData();
//       const res = await API.put(`/product/${data.id}`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("Product updated successfully");
//       onUpdate && onUpdate(res.data);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);

//     try {
//       await API.delete(`/product/${data.id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("Product deleted successfully");
//       onDelete && onDelete(data);

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
//       toast.error(err.response?.data?.message || "Delete failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // <Layout>
//       <div className="addproduct-container">
//         <div className="addproduct-card">
//           <h1 className="addTitle">Add or Manage Your Product</h1>

//           {error && <div className="error-message">{error}</div>}

//           <form onSubmit={handleSubmit}>
//             <div className="inputsection">
//               {["title", "category", "price", "seller"].map((field) => (
//                 <div className="addinput" key={field}>
//                   <label>{field.toUpperCase()}</label>
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
//                 Update
//               </button>
//               <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
//                 Delete
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     // </Layout>
//   );
// };

// export default AddProduct;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./AddProduct.css";
// // import Layout from "../../../components/layout/Layout";
// // import API from "../../../http/API";

// // ✅ CATEGORY LIST
// const categories = [
//   { id: 1, name: "Fashion & Clothing" },
//   { id: 2, name: "Footwear" },
//   { id: 3, name: "Electronics" },
//   { id: 4, name: "Accessories" },
//   { id: 5, name: "Home & Living" },
//   { id: 6, name: "Beauty & Personal" },
//   { id: 7, name: "Toys & Baby Products" },
//   { id: 8, name: "Groceries & Essentials" },
//   { id: 9, name: "Books & Stationery" },
//   { id: 10, name: "Sports & Fitness" },
//   { id: 11, name: "Automotive" },
//   { id: 12, name: "Gaming" },
// ];

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

//   useEffect(() => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("Please login first");
//       navigate("/auth/login");
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

//   const getAuthToken = () => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("You must be logged in");
//       navigate("/auth/login");
//       return null;
//     }
//     return token;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const formData = createFormData();
//       const res = await API.post("/product", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("Product added successfully");
//       onSubmit && onSubmit(res.data);

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
//       toast.error(err.response?.data?.message || "Failed to add product");
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);

//     try {
//       const formData = createFormData();
//       const res = await API.put(`/product/${data.id}`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("Product updated successfully");
//       onUpdate && onUpdate(res.data);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);

//     try {
//       await API.delete(`/product/${data.id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("Product deleted successfully");
//       onDelete && onDelete(data);

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
//       toast.error(err.response?.data?.message || "Delete failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="addproduct-container">
//       <div className="addproduct-card">
//         <h1 className="addTitle">Add or Manage Your Product</h1>

//         {error && <div className="error-message">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="inputsection">

//             {/* TITLE */}
//             <div className="addinput">
//               <label>TITLE</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={data.title}
//                 onChange={handleChange}
//                 required
//                 disabled={loading}
//               />
//             </div>

//             {/* ✅ CATEGORY DROPDOWN */}
//             <div className="addinput">
//               <label>CATEGORY</label>
//               <select
//                 name="category"
//                 value={data.category}
//                 onChange={handleChange}
//                 required
//                 disabled={loading}
//               >
//                 <option value="">Select Category</option>
//                 {categories.map((cat) => (
//                   <option key={cat.id} value={cat.id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* PRICE */}
//             <div className="addinput">
//               <label>PRICE</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={data.price}
//                 onChange={handleChange}
//                 required
//                 disabled={loading}
//               />
//             </div>

//             {/* SELLER */}
//             <div className="addinput">
//               <label>SELLER</label>
//               <input
//                 type="text"
//                 name="seller"
//                 value={data.seller}
//                 onChange={handleChange}
//                 required
//                 disabled={loading}
//               />
//             </div>

//             <div className="addinput">
//               <label>Image</label>
//               <input type="file" name="image" onChange={handleChange} disabled={loading} />
//             </div>

//             <div className="addinput">
//               <label>Description</label>
//               <textarea
//                 name="description"
//                 value={data.description}
//                 onChange={handleChange}
//                 required
//                 disabled={loading}
//               />
//             </div>

//             <div className="conditions">
//               <label>Condition</label>
//               <select
//                 name="condition"
//                 value={data.condition}
//                 onChange={handleChange}
//                 disabled={loading}
//               >
//                 <option value="excellent">Excellent</option>
//                 <option value="good">Good</option>
//                 <option value="fair">Fair</option>
//               </select>
//             </div>
//           </div>

//           <div className="productbutton-container">
//             <button className="productButtonAdd" type="submit" disabled={loading}>
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleUpdate} disabled={loading}>
//               Update
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
//               Delete
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;









// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "./AddProduct.css";
// import API from "../../../http/API";

// /* ✅ API INSTANCE */
// const API = axios.create({
//   baseURL: "http://localhost:8080/api",
// });

// /* ✅ Attach token1 automatically */
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token1");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// /* CATEGORY LIST */
// const categories = [
//   { id: 1, name: "Fashion & Clothing" },
//   { id: 2, name: "Footwear" },
//   { id: 3, name: "Electronics" },
//   { id: 4, name: "Accessories" },
//   { id: 5, name: "Home & Living" },
//   { id: 6, name: "Beauty & Personal" },
//   { id: 7, name: "Toys & Baby Products" },
//   { id: 8, name: "Groceries & Essentials" },
//   { id: 9, name: "Books & Stationery" },
//   { id: 10, name: "Sports & Fitness" },
//   { id: 11, name: "Automotive" },
//   { id: 12, name: "Gaming" },
// ];


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

//   /* AUTH CHECK */
//   useEffect(() => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("Please login first");
//       navigate("/auth/login");
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
//       new Blob([JSON.stringify(productRequest)], {
//         type: "application/json",
//       })
//     );

//     if (data.image) {
//       formData.append("imageFile", data.image);
//     }

//     return formData;
//   };

//   /* ADD PRODUCT */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await API.post("/product", createFormData());
//       toast.success("Product added successfully");
//       onSubmit && onSubmit(res.data);

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
//       toast.error(err.response?.data?.message || "Failed to add product");
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* UPDATE PRODUCT — ready for future API */
//   const handleUpdate = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     setLoading(true);

//     try {
//       const res = await API.put(`/product/${data.id}`, createFormData());
//       toast.success("Product updated successfully");
//       onUpdate && onUpdate(res.data);
//     } catch (err) {
//       toast.error("Update API not available yet");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* DELETE PRODUCT */
//   const handleDelete = async () => {
//     if (!data.id) return toast.warning("No product selected");

//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);

//     try {
//       await API.delete(`/product/${data.id}`);
//       toast.success("Product deleted successfully");
//       onDelete && onDelete(data);
//     } catch (err) {
//       toast.error("Delete failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="addproduct-container">
//       <div className="addproduct-card">
//         <h1 className="addTitle">Add or Manage Your Product</h1>

//         {error && <div className="error-message">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="inputsection">

//             <div className="addinput">
//               <label>TITLE</label>
//               <input name="title" value={data.title} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>CATEGORY</label>
//               <select name="category" value={data.category} onChange={handleChange} required>
//                 <option value="">Select Category</option>
//                 {categories.map((c) => (
//                   <option key={c.id} value={c.id}>{c.name}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="addinput">
//               <label>PRICE</label>
//               <input type="number" name="price" value={data.price} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>SELLER ID</label>
//               <input name="seller" value={data.seller} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>IMAGE</label>
//               <input type="file" name="image" onChange={handleChange} />
//             </div>

//             <div className="addinput">
//               <label>DESCRIPTION</label>
//               <textarea name="description" value={data.description} onChange={handleChange} />
//             </div>

//             <div className="conditions">
//               <label>CONDITION</label>
//               <select name="condition" value={data.condition} onChange={handleChange}>
//                 <option value="excellent">Excellent</option>
//                 <option value="good">Good</option>
//                 <option value="fair">Fair</option>
//               </select>
//             </div>

//           </div>

//           <div className="productbutton-container">
//             <button className="productButtonAdd" type="submit" disabled={loading}>
//               Submit
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleUpdate} disabled={loading}>
//               Update
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
//               Delete
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;








// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import API from "../../http/API";

// import "./AddProduct.css";

// // ✅ CATEGORY LIST (all 12)
// const categories = [
//   { id: 1, name: "Fashion & Clothing" },
//   { id: 2, name: "Footwear" },
//   { id: 3, name: "Electronics" },
//   { id: 4, name: "Accessories" },
//   { id: 5, name: "Home & Living" },
//   { id: 6, name: "Beauty & Personal" },
//   { id: 7, name: "Toys & Baby Products" },
//   { id: 8, name: "Groceries & Essentials" },
//   { id: 9, name: "Books & Stationery" },
//   { id: 10, name: "Sports & Fitness" },
//   { id: 11, name: "Automotive" },
//   { id: 12, name: "Gaming" },
// ];

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

//   // ✅ AUTH CHECK
//   useEffect(() => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("Please login first");
//       navigate("/auth/login");
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

//   const getAuthToken = () => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("You must be logged in");
//       navigate("/auth/login");
//       return null;
//     }
//     return token;
//   };

//   // ✅ ADD PRODUCT
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await API.post("/product", createFormData());
//       toast.success("Product added successfully");
//       onSubmit && onSubmit(res.data);

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
//       toast.error(err.response?.data?.message || "Failed to add product");
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ UPDATE PRODUCT (future-ready)
//   const handleUpdate = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);
//     try {
//       const res = await API.put(`/product/${data.id}`, createFormData());
//       toast.success("Product updated successfully");
//       onUpdate && onUpdate(res.data);
//     } catch (err) {
//       toast.error("Update API not available yet");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ DELETE PRODUCT
//   const handleDelete = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);
//     try {
//       await API.delete(`/product/${data.id}`);
//       toast.success("Product deleted successfully");
//       onDelete && onDelete(data);
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
//       toast.error("Delete failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="addproduct-container">
//       <div className="addproduct-card">
//         <h1 className="addTitle">Add or Manage Your Product</h1>
//         {error && <div className="error-message">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="inputsection">
//             <div className="addinput">
//               <label>TITLE</label>
//               <input name="title" value={data.title} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>CATEGORY</label>
//               <select name="category" value={data.category} onChange={handleChange} required>
//                 <option value="">Select Category</option>
//                 {categories.map((c) => (
//                   <option key={c.id} value={c.id}>{c.name}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="addinput">
//               <label>PRICE</label>
//               <input type="number" name="price" value={data.price} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>SELLER ID</label>
//               <input name="seller" value={data.seller} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>IMAGE</label>
//               <input type="file" name="image" onChange={handleChange} />
//             </div>

//             <div className="addinput">
//               <label>DESCRIPTION</label>
//               <textarea name="description" value={data.description} onChange={handleChange} required />
//             </div>

//             <div className="conditions">
//               <label>CONDITION</label>
//               <select name="condition" value={data.condition} onChange={handleChange}>
//                 <option value="excellent">Excellent</option>
//                 <option value="good">Good</option>
//                 <option value="fair">Fair</option>
//               </select>
//             </div>
//           </div>

//           <div className="productbutton-container">
//             <button className="productButtonAdd" type="submit" disabled={loading}>
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleUpdate} disabled={loading}>
//               Update
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
//               Delete
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import API from "../../http/API";

// import "./AddProduct.css";

// const AddProduct = ({ productData, onSubmit, onUpdate, onDelete, refreshHome }) => {
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

//   // Auth check
//   useEffect(() => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("Please login first");
//       navigate("/auth/login");
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

//   const getAuthToken = () => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("You must be logged in");
//       navigate("/auth/login");
//       return null;
//     }
//     return token;
//   };

//   // Add product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await API.post("/product", createFormData());
//       toast.success("Product added successfully");
//       onSubmit && onSubmit(res.data);

//       // Refresh home page product list
//       refreshHome && refreshHome();

//       // Reset form
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
//       toast.error(err.response?.data?.message || "Failed to add product");
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update product
//   const handleUpdate = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);
//     try {
//       const res = await API.put(`/product/${data.id}`, createFormData());
//       toast.success("Product updated successfully");
//       onUpdate && onUpdate(res.data);

//       refreshHome && refreshHome();
//     } catch (err) {
//       toast.error("Update API not available yet");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete product
//   const handleDelete = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);
//     try {
//       await API.delete(`/product/${data.id}`);
//       toast.success("Product deleted successfully");
//       onDelete && onDelete(data);

//       refreshHome && refreshHome();

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
//       toast.error("Delete failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="addproduct-container">
//       <div className="addproduct-card">
//         <h1 className="addTitle">Add or Manage Your Product</h1>
//         {error && <div className="error-message">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="inputsection">
//             <div className="addinput">
//               <label>TITLE</label>
//               <input name="title" value={data.title} onChange={handleChange} required />
//             </div>

//             {/* CATEGORY dropdown like CONDITION */}
//             <div className="addinput">
//               <label>CATEGORY</label>
//               <select name="category" value={data.category} onChange={handleChange} required>
//                 <option value="">Select Category</option>
//                 <option value="1">Fashion & Clothing</option>
//                 <option value="2">Footwear</option>
//                 <option value="3">Electronics</option>
//                 <option value="4">Accessories</option>
//                 <option value="5">Home & Living</option>
//                 <option value="6">Beauty & Personal</option>
//                 <option value="7">Toys & Baby Products</option>
//                 <option value="8">Groceries & Essentials</option>
//                 <option value="9">Books & Stationery</option>
//                 <option value="10">Sports & Fitness</option>
//                 <option value="11">Automotive</option>
//                 <option value="12">Gaming</option>
//               </select>
//             </div>

//             <div className="addinput">
//               <label>PRICE</label>
//               <input type="number" name="price" value={data.price} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>SELLER ID</label>
//               <input name="seller" value={data.seller} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>IMAGE</label>
//               <input type="file" name="image" onChange={handleChange} />
//             </div>

//             <div className="addinput">
//               <label>DESCRIPTION</label>
//               <textarea name="description" value={data.description} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>CONDITION</label>
//               <select name="condition" value={data.condition} onChange={handleChange}>
//                 <option value="excellent">Excellent</option>
//                 <option value="good">Good</option>
//                 <option value="fair">Fair</option>
//               </select>
//             </div>
//           </div>

//           <div className="productbutton-container">
//             <button className="productButtonAdd" type="submit" disabled={loading}>
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleUpdate} disabled={loading}>
//               Update
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
//               Delete
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;









// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import API from "../../http/API";

// import "./AddProduct.css";

// const AddProduct = ({ productData, onSubmit, onUpdate, onDelete, refreshHome }) => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     description: "",
//     image: null,
//     price: "",
//     condition: "excellent",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Get userId from token (assuming JWT with payload containing userId)
//   const getUserIdFromToken = () => {
//     const token = localStorage.getItem("token1");
//     if (!token) return null;
//     try {
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       return payload.id || payload.userId; // adjust key based on your JWT
//     } catch {
//       return null;
//     }
//   };

//   // Auth check
//   useEffect(() => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("Please login first");
//       navigate("/auth/login");
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
//       userId: getUserIdFromToken(), // <-- send logged-in user's ID
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

//   const getAuthToken = () => {
//     const token = localStorage.getItem("token1");
//     if (!token) {
//       toast.error("You must be logged in");
//       navigate("/auth/login");
//       return null;
//     }
//     return token;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await API.post("/product", createFormData());
//       toast.success("Product added successfully");
//       onSubmit && onSubmit(res.data);
//       refreshHome && refreshHome();

//       setData({
//         id: "",
//         title: "",
//         category: "",
//         description: "",
//         image: null,
//         price: "",
//         condition: "excellent",
//       });
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to add product");
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     setLoading(true);
//     try {
//       const res = await API.put(`/product/${data.id}`, createFormData());
//       toast.success("Product updated successfully");
//       onUpdate && onUpdate(res.data);
//       refreshHome && refreshHome();
//     } catch (err) {
//       toast.error("Update API not available yet");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!data.id) return toast.warning("No product selected");
//     const token = getAuthToken();
//     if (!token) return;

//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setLoading(true);
//     try {
//       await API.delete(`/product/${data.id}`);
//       toast.success("Product deleted successfully");
//       onDelete && onDelete(data);
//       refreshHome && refreshHome();

//       setData({
//         id: "",
//         title: "",
//         category: "",
//         description: "",
//         image: null,
//         price: "",
//         condition: "excellent",
//       });
//     } catch (err) {
//       toast.error("Delete failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="addproduct-container">
//       <div className="addproduct-card">
//         <h1 className="addTitle">Add or Manage Your Product</h1>
//         {error && <div className="error-message">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="inputsection">
//             <div className="addinput">
//               <label>TITLE</label>
//               <input name="title" value={data.title} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>CATEGORY</label>
//               <select name="category" value={data.category} onChange={handleChange} required>
//                 <option value="">Select Category</option>
//                 <option value="1">Fashion & Clothing</option>
//                 <option value="2">Footwear</option>
//                 <option value="3">Electronics</option>
//                 <option value="4">Accessories</option>
//                 <option value="5">Home & Living</option>
//                 <option value="6">Beauty & Personal</option>
//                 <option value="7">Toys & Baby Products</option>
//                 <option value="8">Groceries & Essentials</option>
//                 <option value="9">Books & Stationery</option>
//                 <option value="10">Sports & Fitness</option>
//                 <option value="11">Automotive</option>
//                 <option value="12">Gaming</option>
//               </select>
//             </div>

//             <div className="addinput">
//               <label>PRICE</label>
//               <input type="number" name="price" value={data.price} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>IMAGE</label>
//               <input type="file" name="image" onChange={handleChange} />
//             </div>

//             <div className="addinput">
//               <label>DESCRIPTION</label>
//               <textarea name="description" value={data.description} onChange={handleChange} required />
//             </div>

//             <div className="addinput">
//               <label>CONDITION</label>
//               <select name="condition" value={data.condition} onChange={handleChange}>
//                 <option value="excellent">Excellent</option>
//                 <option value="good">Good</option>
//                 <option value="fair">Fair</option>
//               </select>
//             </div>
//           </div>

//           <div className="productbutton-container">
//             <button className="productButtonAdd" type="submit" disabled={loading}>
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleUpdate} disabled={loading}>
//               Update
//             </button>
//             <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
//               Delete
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;





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
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get userId from JWT token
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

  // Auth check
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
      quantity: 1,
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
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add product");
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!data.id) return toast.warning("No product selected");
    const token = getAuthToken();
    if (!token) return;

    setLoading(true);
    try {
      const res = await API.put(`/product/${data.id}`, createFormData());
      toast.success("Product updated successfully");
      onUpdate && onUpdate(res.data);
      refreshHome && refreshHome();
    } catch (err) {
      toast.error("Update API not available yet");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!data.id) return toast.warning("No product selected");
    const token = getAuthToken();
    if (!token) return;

    if (!window.confirm("Are you sure you want to delete this product?")) return;

    setLoading(true);
    try {
      await API.delete(`/product/${data.id}`);
      toast.success("Product deleted successfully");
      onDelete && onDelete(data);
      refreshHome && refreshHome();

      setData({
        id: "",
        title: "",
        category: "",
        description: "",
        image: null,
        price: "",
        condition: "excellent",
      });
    } catch (err) {
      toast.error("Delete failed");
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
              <label>DESCRIPTION</label>
              <textarea name="description" value={data.description} onChange={handleChange} required />
            </div>

            <div className="addinput">
              <label>CONDITION</label>
              <select name="condition" value={data.condition} onChange={handleChange}>
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
              Update
            </button>
            <button className="productButtonAdd" type="button" onClick={handleDelete} disabled={loading}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
