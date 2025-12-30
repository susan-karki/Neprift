// import React, { useEffect, useState } from "react";
// import "./SellerDashboard.css";

// const SellerDashboard = () => {
//   const [stats, setStats] = useState({
//     products: 0,
//     orders: 0,
//     revenue: 0,
//   });

//   const [products, setProducts] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchSellerData();
//   }, []);

//   const fetchSellerData = async () => {
//     try {
//       setLoading(true);

//       // Replace these URLs with your real backend APIs
//       const statsRes = await fetch("/api/seller/stats");
//       const productsRes = await fetch("/api/seller/products");
//       const ordersRes = await fetch("/api/seller/orders");

//       const statsData = await statsRes.json();
//       const productsData = await productsRes.json();
//       const ordersData = await ordersRes.json();

//       setStats(statsData);
//       setProducts(productsData);
//       setOrders(ordersData);
//     } catch (err) {
//       setError("Failed to load seller dashboard data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div className="sellerdashboard-loading">Loading dashboard...</div>;
//   }

//   if (error) {
//     return <div className="sellerdashboard-error">{error}</div>;
//   }

//   return (
//     <div className="sellerdashboard-container">
//       {/* HEADER */}
//       <h2 className="sellerdashboard-title">Seller Dashboard</h2>

//       {/* STATS */}
//       <div className="sellerdashboard-stats">
//         <div className="sellerdashboard-stat-card">
//           <p>Total Products</p>
//           <h3>{stats.products}</h3>
//         </div>

//         <div className="sellerdashboard-stat-card">
//           <p>Total Orders</p>
//           <h3>{stats.orders}</h3>
//         </div>

//         <div className="sellerdashboard-stat-card">
//           <p>Total Revenue</p>
//           <h3>₹ {stats.revenue}</h3>
//         </div>
//       </div>

//       {/* PRODUCTS */}
//       <div className="sellerdashboard-section">
//         <h3 className="sellerdashboard-section-title">Your Products</h3>

//         {products.length === 0 ? (
//           <p className="sellerdashboard-empty">No products added yet.</p>
//         ) : (
//           <table className="sellerdashboard-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Stock</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id}>
//                   <td>{product.name}</td>
//                   <td>₹ {product.price}</td>
//                   <td>{product.stock}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* ORDERS */}
//       <div className="sellerdashboard-section">
//         <h3 className="sellerdashboard-section-title">Recent Orders</h3>

//         {orders.length === 0 ? (
//           <p className="sellerdashboard-empty">No orders yet.</p>
//         ) : (
//           <table className="sellerdashboard-table">
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 <th>Customer</th>
//                 <th>Total</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.id}>
//                   <td>{order.id}</td>
//                   <td>{order.customer}</td>
//                   <td>₹ {order.total}</td>
//                   <td>{order.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;





import React, { useEffect, useState } from "react";
import API from "../../http/API";
import Card from "../../pages/webPage/components/card/Card";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      // Get seller's userId from localStorage
      const sellerId = localStorage.getItem("userId");
      if (!sellerId) {
        console.error("Seller ID not found");
        setProducts([]);
        setLoading(false);
        return;
      }

      // Fetch products for this seller
      const res = await API.get(`/seller/product/${sellerId}`);
      console.log("Seller products API response:", res.data);

      const productList = (res.data.responseBody || []).map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        image: p.imagePath || "/default-image.png",
      }));

      setProducts(productList);
    } catch (err) {
      console.error("Failed to fetch seller products", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>My Products</h1>
      <div className="container-card">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products added yet</p>
        ) : (
          products.map((product) => <Card key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
