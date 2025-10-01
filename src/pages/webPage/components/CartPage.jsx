import React from 'react'
import './CartPage.css'
import anime from '../../../assets/anime.jpg'
import Layout from '../../../components/layout/Layout'

const CartPage = () => {
  return (
   <Layout>
    <div className="wrapper">
        <div className="items">
            <div className="title">
                <h3>Your Cart</h3>                
            </div>
            <div className="product">
                <img src= {anime} alt="here is an image" />
                <div className="details">
                    <h2>Monkey.D.Luffy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet ab ducimus, impedit asperiores alias. Minima non sed eligendi sit deleniti laborum distinctio reiciendis nisi, doloribus, velit quod? Eum, molestias.</p>
                    <div className="size">
                        <h3>SIZE : Medium</h3>
                    </div>
                    <div className="qty">
                        <h4>Qty :<input type="number" value = "1" min = "1"/></h4>
                        <button>Delete</button>
                        <button>Share</button>
                    </div>
                </div>
                <div className="price">
                    <p>Rs.15000</p>
                </div>
                
            </div>
            <div className="product">
                <img src= {anime} alt="here is an image" />
                <div className="details">
                    <h2>Luffy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet ab ducimus, impedit asperiores alias. Minima non sed eligendi sit deleniti laborum distinctio reiciendis nisi, doloribus, velit quod? Eum, molestias.</p>
                    <div className="size">
                        <h3>SIZE : Medium</h3>
                    </div>
                    <div className="qty">
                        <h4>Qty :<input type="number" value = "1" min = "1"/></h4>
                        <button>Delete</button>
                        <button>Share</button>
                    </div>
                </div>
                <div className="price">
                    <p>Rs.13000</p>
                </div>

                
            </div>
        <div className="total">
            <h3>Total</h3>
            <h3>Rs.55000</h3>
        </div>
        </div>
    </div>
  </Layout>
  )
}

export default CartPage