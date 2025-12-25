


// import React, { useState } from 'react'
// import './CartPage.css'
// import anime from '../../../assets/anime.jpg'
// import Layout from '../../../components/layout/Layout'
// import { toast } from 'react-toastify'

// const CartPage = () => {

//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Monkey.D.Luffy",
//       price: 15000,
//       image: anime,
//       qty: 1
//     },
//     {
//       id: 2,
//       name: "Luffy",
//       price: 13000,
//       image: anime,
//       qty: 1
//     }
//   ])

//   const isLoggedIn = () => {
//     return !!localStorage.getItem("token")
//   }

//   const handleDelete = (id) => {
//     if (!isLoggedIn()) {
//       toast.warning("Please login first ❗")
//       return
//     }

//     setCartItems(cartItems.filter(item => item.id !== id))
//     toast.success("Item removed from cart 🗑️")
//   }

//   const handleShare = (item) => {
//     const shareText = `Check out this product: ${item.name} - Rs.${item.price}`

//     navigator.clipboard.writeText(shareText)
//     toast.success("Product link copied 📋")
//   }

//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * item.qty,
//     0
//   )

//   return (
//     <Layout>
//       <div className="wrapper">
//         <div className="items">

//           <div className="title">
//             <h3>Your Cart</h3>
//           </div>

//           {cartItems.length === 0 ? (
//             <p className="empty">Your cart is empty</p>
//           ) : (
//             cartItems.map(item => (
//               <div className="product" key={item.id}>
                
//                 <img src={item.image} alt={item.name} />

//                 <div className="details">
//                   <h2>{item.name}</h2>

//                   <div className="size">
//                     <h3>SIZE : Medium</h3>
//                   </div>

//                   <div className="qty">
//                     <h4>
//                       Qty :
//                       <input
//                         type="number"
//                         value={item.qty}
//                         min="1"
//                         readOnly
//                       />
//                     </h4>

//                     <button onClick={() => handleDelete(item.id)}>
//                       Delete
//                     </button>

//                     <button onClick={() => handleShare(item)}>
//                       Share
//                     </button>
//                   </div>
//                 </div>

//                 <div className="price">
//                   <p>Rs.{item.price}</p>
//                 </div>
//               </div>
//             ))
//           )}

//           {cartItems.length > 0 && (
//             <div className="total">
//               <h3>Total</h3>
//               <h3>Rs.{totalPrice}</h3>
//             </div>
//           )}

//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default CartPage


// import React, { useEffect, useState } from 'react';
// import './CartPage.css';
// import Layout from '../../../components/layout/Layout';
// import { toast } from 'react-toastify';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const [loginWarningShown, setLoginWarningShown] = useState(false);

//   const isLoggedIn = () => !!token;

//   // Update token if user logs in/out while on this page
//   useEffect(() => {
//     const handleAuthChange = () => setToken(localStorage.getItem('token'));
//     window.addEventListener('authChange', handleAuthChange);
//     return () => window.removeEventListener('authChange', handleAuthChange);
//   }, []);

//   // Fetch cart items from backend
//   const fetchCart = async () => {
//     if (!isLoggedIn()) {
//       setLoading(false);
//       if (!loginWarningShown) {
//         toast.warning('Please login first ❗'); // show warning once
//         setLoginWarningShown(true);
//       }
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await fetch('/api/cart', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error('Failed to fetch');
//       const data = await res.json();
//       setCartItems(data);
//     } catch (err) {
//       toast.error('Failed to fetch cart items ❌');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, [token]);

//   // Delete item
//   const handleDelete = async (id) => {
//     if (!isLoggedIn()) {
//       toast.warning('Please login first ❗');
//       return;
//     }

//     try {
//       await fetch(`/api/cart/${id}`, {
//         method: 'DELETE',
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems((prev) => prev.filter((item) => item.id !== id));
//       toast.success('Item removed from cart 🗑️');
//     } catch (err) {
//       toast.error('Failed to remove item ❌');
//     }
//   };

//   // Update quantity
//   const handleQtyChange = async (id, qty) => {
//     if (qty < 1) return;

//     setCartItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, qty } : item))
//     );

//     try {
//       await fetch(`/api/cart/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ qty }),
//       });
//     } catch (err) {
//       toast.error('Failed to update quantity ❌');
//     }
//   };

//   // Share item
//   const handleShare = (item) => {
//     const shareText = `Check out this product: ${item.name} - Rs.${item.price}`;
//     navigator.clipboard.writeText(shareText);
//     toast.success('Product link copied 📋');
//   };

//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * item.qty,
//     0
//   );

//   if (loading) {
//     return (
//       <Layout>
//         <div className="wrapper">
//           <p className="empty">Loading cart items...</p>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <div className="wrapper">
//         <div className="items">
//           <div className="title">
//             <h3>Your Cart</h3>
//           </div>

//           {cartItems.length === 0 ? (
//             <p className="empty">Your cart is empty</p>
//           ) : (
//             cartItems.map((item) => (
//               <div className="product" key={item.id}>
//                 <img src={item.image} alt={item.name} />

//                 <div className="details">
//                   <h2>{item.name}</h2>

//                   <div className="size">
//                     <h3>SIZE : Medium</h3>
//                   </div>

//                   <div className="qty">
//                     <h4>
//                       Qty :
//                       <input
//                         type="number"
//                         value={item.qty}
//                         min="1"
//                         onChange={(e) =>
//                           handleQtyChange(item.id, parseInt(e.target.value))
//                         }
//                       />
//                     </h4>

//                     <button onClick={() => handleDelete(item.id)}>Delete</button>
//                     <button onClick={() => handleShare(item)}>Share</button>
//                   </div>
//                 </div>

//                 <div className="price">
//                   <p>Rs.{item.price}</p>
//                 </div>
//               </div>
//             ))
//           )}

//           {cartItems.length > 0 && (
//             <div className="total">
//               <h3>Total</h3>
//               <h3>Rs.{totalPrice}</h3>
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;






import React, { useEffect, useState } from 'react';
import './CartPage.css';
import Layout from '../../../components/layout/Layout';
import { toast } from 'react-toastify';
import API from '../../../http/API'; // use your API instance

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token1'));
  const [loginWarningShown, setLoginWarningShown] = useState(false);

  const isLoggedIn = () => !!token;

  // Update token if user logs in/out while on this page
  useEffect(() => {
    const handleAuthChange = () => setToken(localStorage.getItem('token1'));
    window.addEventListener('authChange', handleAuthChange);
    return () => window.removeEventListener('authChange', handleAuthChange);
  }, []);

  // Fetch cart items from backend
  const fetchCart = async () => {
    if (!isLoggedIn()) {
      setLoading(false);
      if (!loginWarningShown) {
        toast.warning('Please login first ❗');
        setLoginWarningShown(true);
      }
      return;
    }

    try {
      setLoading(true);

      const userId = localStorage.getItem('userId'); // make sure userId is stored after login
      if (!userId) throw new Error("User ID not found");

      const res = await API.get(`/cart/${userId}`);
      setCartItems(res.data); // assuming response returns cart items array
    } catch (err) {
      toast.error('Failed to fetch cart items ❌');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  // Delete cart
  const handleDelete = async (id) => {
    if (!isLoggedIn()) {
      toast.warning('Please login first ❗');
      return;
    }

    try {
      const userId = localStorage.getItem('userId');
      if (!userId) throw new Error("User ID not found");

      await API.delete(`/cart?userId=${userId}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      toast.success('Item removed from cart 🗑️');
    } catch (err) {
      toast.error('Failed to remove item ❌');
    }
  };

  // Update quantity
  const handleQtyChange = async (id, qty) => {
    if (qty < 1) return;

    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );

    try {
      await API.put(`/cart/${id}`, { qty }); // future-ready if backend supports quantity update
    } catch (err) {
      toast.error('Failed to update quantity ❌');
    }
  };

  // Share item
  const handleShare = (item) => {
    const shareText = `Check out this product: ${item.name} - Rs.${item.price}`;
    navigator.clipboard.writeText(shareText);
    toast.success('Product link copied 📋');
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  if (loading) {
    return (
      <Layout>
        <div className="wrapper">
          <p className="empty">Loading cart items...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="wrapper">
        <div className="items">
          <div className="title">
            <h3>Your Cart</h3>
          </div>

          {cartItems.length === 0 ? (
            <p className="empty">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="details">
                  <h2>{item.name}</h2>

                  <div className="size">
                    <h3>SIZE : Medium</h3>
                  </div>

                  <div className="qty">
                    <h4>
                      Qty :
                      <input
                        type="number"
                        value={item.qty}
                        min="1"
                        onChange={(e) =>
                          handleQtyChange(item.id, parseInt(e.target.value))
                        }
                      />
                    </h4>

                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                    <button onClick={() => handleShare(item)}>Share</button>
                  </div>
                </div>

                <div className="price">
                  <p>Rs.{item.price}</p>
                </div>
              </div>
            ))
          )}

          {cartItems.length > 0 && (
            <div className="total">
              <h3>Total</h3>
              <h3>Rs.{totalPrice}</h3>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;


