import React, { useEffect, useState } from "react";
import "./SellerDashboard.css";

const SellerDashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    revenue: 0,
  });

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSellerData();
  }, []);

  const fetchSellerData = async () => {
    try {
      setLoading(true);

      // Replace these URLs with your real backend APIs
      const statsRes = await fetch("/api/seller/stats");
      const productsRes = await fetch("/api/seller/products");
      const ordersRes = await fetch("/api/seller/orders");

      const statsData = await statsRes.json();
      const productsData = await productsRes.json();
      const ordersData = await ordersRes.json();

      setStats(statsData);
      setProducts(productsData);
      setOrders(ordersData);
    } catch (err) {
      setError("Failed to load seller dashboard data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="sellerdashboard-loading">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="sellerdashboard-error">{error}</div>;
  }

  return (
    <div className="sellerdashboard-container">
      {/* HEADER */}
      <h2 className="sellerdashboard-title">Seller Dashboard</h2>

      {/* STATS */}
      <div className="sellerdashboard-stats">
        <div className="sellerdashboard-stat-card">
          <p>Total Products</p>
          <h3>{stats.products}</h3>
        </div>

        <div className="sellerdashboard-stat-card">
          <p>Total Orders</p>
          <h3>{stats.orders}</h3>
        </div>

        <div className="sellerdashboard-stat-card">
          <p>Total Revenue</p>
          <h3>₹ {stats.revenue}</h3>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="sellerdashboard-section">
        <h3 className="sellerdashboard-section-title">Your Products</h3>

        {products.length === 0 ? (
          <p className="sellerdashboard-empty">No products added yet.</p>
        ) : (
          <table className="sellerdashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>₹ {product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ORDERS */}
      <div className="sellerdashboard-section">
        <h3 className="sellerdashboard-section-title">Recent Orders</h3>

        {orders.length === 0 ? (
          <p className="sellerdashboard-empty">No orders yet.</p>
        ) : (
          <table className="sellerdashboard-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>₹ {order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;

