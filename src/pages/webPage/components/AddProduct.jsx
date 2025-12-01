// import React, { useState } from 'react'
// import './AddProduct.css'
// import Layout from '../../../components/layout/Layout'

// const AddProduct = ({type, onSubmit}) => {
//         const [data, setdata] = useState({
//             title: '',
//             subtitle: '',
//             category: '',
//             description: '',
//             image: '',
//             price: '',
//             seller: '',
//             condition: 'excellent', 

//     })
//     const handleChange = (e)=>{
//         const {name, value} = e.target
//         setdata({
//             ...data,
//            [name] : name === 'image' ? e.target.files[0] : value
//         })
//     }
//     const handleSubmit = (e)=>{
//          e.preventDefault()
//          onSubmit(data)
//     }
//   return (
//     <Layout>
//     <div className="addproduct-container">
//         <div className="addproduct-card">
//             <h1 className = 'addTitle'>Add Your Product</h1>
//         <form onSubmit={handleSubmit}>
//             <div className="inputsection">
//                 <div className="addinput">
//                    <label htmlFor="">Product</label>
//                     <input type="text" onChange = {handleChange}required />
//                 </div>
//                 <div className="addinput">
//                     <label htmlFor="">category</label>
//                     <input type="text" onChange = {handleChange}required/>
//                 </div>
//                  <div className="addinput">
//                     <label htmlFor="">category</label>
//                     <input type="file"onChange = {handleChange} required/>
//                 </div>
//                 <div className="addinput">
//                     <label htmlFor="">price</label>
//                     <input type="number" onChange = {handleChange}required/>
//                 </div>
//                 <div className="addinput">
//                     <label htmlFor="">Description</label>
//                     <input type="text" onChange = {handleChange}required/>
//                 </div>
//                  <div className="addinput">
//                     <label htmlFor="">Seller</label>
//                     <input type="text" onChange = {handleChange} required/>
//                 </div>   
//                 <div className="conditions">
//                  <label htmlFor="condition">Condition</label>
//                   <select name="condition" id="condition" onChange={handleChange}  >
//                     <option value="excellent">Excellent</option>
//                     <option value="good">Good</option>
//                     <option value="fair">Fair</option>
//                   </select>
//                 </div>            
//             </div>
//             <div className="productbutton-container">
//                <button className = "productButtonAdd">submit</button>
//                <button className = "productButtonAdd">Update</button>
//                <button className = "productButtonAdd">Delete</button>
//             </div>
//          </form>
//         </div>
//     </div>
//     </Layout>
    
//   )
// }

// export default AddProduct


import React, { useState } from "react";
import "./AddProduct.css";
import Layout from "../../../components/layout/Layout";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AddProduct = ({ type, onSubmit }) => {
    const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    category: "",
    description: "",
    image: "",
    price: "",
    seller: "",
    condition: "excellent",
    //   title: blog.title || '',
    //   subtitle: blog.subtitle || '',
    //   category: blog.category || '',
    //   description: blog.description || '',
    //   image: blog.image || '',
    //   price: blog.price || '',
    //   seller: blog.seller || '',
    //   condition: blog.condition || 'excellent',
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
                <label>Product</label>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="addinput">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={data.category}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="addinput">
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="addinput">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="addinput">
                <label>Description</label>
                <textarea
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                />
              </div>

              <div className="addinput">
                <label>Seller</label>
                <input
                  type="text"
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
              <button className="productButtonAdd" type="submit"onClick={() => navigate("/submit")}>
                Submit
              </button>
              <button className="productButtonAdd" type="button"onClick={() => navigate("/update")}>
                Update
              </button>          
              <button className="productButtonAdd" type="button" onClick={() => Navigate("/delete")}>
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

