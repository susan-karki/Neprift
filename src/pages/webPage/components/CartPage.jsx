import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import Layout from "../../../components/layout/Layout";
import { toast } from "react-toastify";
import API from "../../../http/API";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token1"));
  const [loginWarningShown, setLoginWarningShown] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);

  const isLoggedIn = () => !!token;

  useEffect(() => {
    const handleAuthChange = () => {
      setToken(localStorage.getItem("token1"));
    };
    window.addEventListener("authChange", handleAuthChange);
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  const fetchCart = async () => {
    if (!isLoggedIn()) {
      setLoading(false);
      if (!loginWarningShown) {
        toast.warning("Please login first");
        setLoginWarningShown(true);
      }
      return;
    }

    try {
      setLoading(true);
      const userId = localStorage.getItem("userId");
      const res = await API.get(`/cart-item/${userId}`);
      const raw = res.data.responseBody || [];

      const mergedMap = {};
      raw.forEach((c) => {
        const pid = c.product.id;
        if (!mergedMap[pid]) {
          mergedMap[pid] = {
            id: pid,
            cartId: c.cartId,
            name: c.product.name,
            price: c.product.price,
            image: c.product.imagePath,
            qty: c.quantity,
          };
        } else {
          mergedMap[pid].qty += c.quantity;
        }
      });

      setCartItems(Object.values(mergedMap));
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch cart items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  const handleDelete = async (itemId) => {
    try {
      await API.delete(`/cart/item/${itemId}`);
      setCartItems((prev) => prev.filter((item) => item.id !== itemId));
      toast.success("Item removed from cart");
    } catch (err) {
      toast.error("Failed to remove item");
    }
  };

  const handleQtyChange = async (itemId, qty) => {
    if (qty < 1) return;

    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, qty } : item))
    );

    try {
      await API.put(`/cart/item/${itemId}`, { qty });
    } catch {
      toast.error("Failed to update quantity");
    }
  };

  const handleShare = (item) => {
    const shareText = `Check out this product: ${item.name} - Rs.${item.price}`;
    navigator.clipboard.writeText(shareText);
    toast.success("Product link copied");
  };
  const handleOrder = async () => {
    if (!isLoggedIn()) {
      toast.warning("Please login first");
      return;
    }

    try {
      setOrderLoading(true);
      const userId = localStorage.getItem("userId");
      const res = await API.post(`/orders/place/${userId}`);

      const orderId = res.data.id;
      const totalAmount = res.data.totalAmount;

      localStorage.setItem("orderId", orderId);
      localStorage.setItem("totalAmount", totalAmount);
      const paymentData = {
        paymentDate: new Date().toISOString(),
        amount: totalAmount,
        paymentMethod: "COD",
        Status: "PENDING", 
        orderId: orderId,
      };

      await API.post("/add-payment", paymentData);

      toast.success("Order placed and payment created successfully");
      setCartItems([]);

      navigate("/btn"); 
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order or create payment");
    } finally {
      setOrderLoading(false);
    }
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
                  <div className="qty">
                    <h4>
                      Qty:
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
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
            <>
              <div className="total">
                <h3>Total</h3>
                <h3>Rs.{totalPrice}</h3>
              </div>

              <div className="order-btn-container">
                <button
                  className="order-btn"
                  onClick={handleOrder}
                  disabled={orderLoading}
                >
                  {orderLoading ? "Placing Order..." : "Order Now"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;

