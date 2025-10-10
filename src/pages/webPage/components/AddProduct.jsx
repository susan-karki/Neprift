import React from 'react'
import './AddProduct.css'
import Layout from '../../../components/layout/Layout'

const AddProduct = () => {
  return (
    <Layout>
    <div className="addproduct-container">
        <div className="addproduct-card">
            <h1 className = 'addTitle'>Add Your Product</h1>
            <div className="inputsection">
                <div className="addinput">
                   <label htmlFor="">Product</label>
                    <input type="text" />
                </div>
                <div className="addinput">
                    <label htmlFor="">category</label>
                    <input type="text" />
                </div>
                 <div className="addinput">
                    <label htmlFor="">category</label>
                    <input type="file" />
                </div>
                <div className="addinput">
                    <label htmlFor="">price</label>
                    <input type="number" />
                </div>
                <div className="addinput">
                    <label htmlFor="">Description</label>
                    <input type="text" />
                </div>
                 <div className="addinput">
                    <label htmlFor="">Seller</label>
                    <input type="text" />
                </div>   
                <div className="conditions">
                 <label htmlFor="condition">Condition</label>
                  <select name="condition" id="condition">
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </select>
                </div>            
            </div>
            <div className="productbutton-container">
               <button className = "productButtonAdd">submit</button>
               <button className = "productButtonAdd">Update</button>
            </div>
        </div>
    </div>
    </Layout>
    
  )
}

export default AddProduct