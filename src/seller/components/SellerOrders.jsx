// import React, { useEffect, useState } from "react";
// import "./SellerOrders.css";

// const SellerOrders = () => {
//   const sellerId = "seller_001"; // replace with auth later
//   const [orders, setOrders] = useState([]);
//   const [toast, setToast] = useState({ show: false, message: "", type: "" });

//   useEffect(() => {
//     const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(allOrders.filter(o => o.sellerId === sellerId));
//   }, []);

//   const showToast = (message, type) => {
//     setToast({ show: true, message, type });
//     setTimeout(() => setToast({ show: false, message: "", type: "" }), 2500);
//   };

//   const updateStatus = (orderId, status) => {
//     const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     const updated = allOrders.map(order =>
//       order.id === orderId ? { ...order, status } : order
//     );
//     localStorage.setItem("orders", JSON.stringify(updated));
//     setOrders(updated.filter(o => o.sellerId === sellerId));
//     showToast(`Order ${status}`, "success");
//   };

//   return (
  
//       <div className="seller-orders small-table">
//         <h2>Seller Orders</h2>

//         {toast.show && (
//           <div className={`seller-toast ${toast.type}`}>{toast.message}</div>
//         )}

//         {orders.length === 0 ? (
//           <p>No orders yet</p>
//         ) : (
//           <table className="compact-table">
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 <th>Buyer</th>
//                 <th>Product</th>
//                 <th>Qty</th>
//                 <th>Total</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map(order => (
//                 <tr key={order.id}>
//                   <td data-label="Order ID">{order.id}</td>
//                   <td data-label="Buyer">{order.buyerName}</td>
//                   <td data-label="Product">{order.productName}</td>
//                   <td data-label="Qty">{order.quantity}</td>
//                   <td data-label="Total">₹{order.total}</td>
//                   <td data-label="Status">{order.status}</td>
//                   <td data-label="Action">
//                     <button
//                       className="seller-btn seller-accept"
//                       onClick={() => updateStatus(order.id, "Accepted")}
//                     >Accept</button>
//                     <button
//                       className="seller-btn seller-ship"
//                       onClick={() => updateStatus(order.id, "Shipped")}
//                     >Ship</button>
//                     <button
//                       className="seller-btn seller-cancel"
//                       onClick={() => updateStatus(order.id, "Cancelled")}
//                     >Cancel</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//   );
// };

// export default SellerOrders;





//new 



import React, { useEffect, useState } from "react";
import "./SellerOrders.css";
import API from "../../http/API";

const SellerOrders = () => {
  const userId = localStorage.getItem("userId"); // logged-in user
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await API.get(`/orders/user/${userId}`);
        setOrders(res.data || []);
      } catch (err) {
        console.error("Failed to fetch orders", err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="seller-orders small-table">
      <h2>Orders</h2>

      {loading && <p>Loading orders...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && orders.length === 0 && <p>No orders found</p>}

      {!loading && orders.length > 0 && (
        <table className="compact-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td data-label="Order ID">{order.id}</td>
                <td data-label="Date">
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : "-"}
                </td>
                <td data-label="Total">₹{order.totalAmount}</td>
                <td data-label="Status">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SellerOrders;
