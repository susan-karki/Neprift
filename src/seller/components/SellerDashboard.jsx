// import React, { useEffect, useState } from "react";
// import API from "../../http/API";
// import Card from "../../pages/webPage/components/card/Card";
// import "./SellerDashboard.css";

// const SellerDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const sellerId = localStorage.getItem("userId");
//       if (!sellerId) return;

//       const res = await API.get(`/seller/product/${sellerId}`);

//       const productList = (res.data.responseBody || []).map((p) => ({
//         id: p.id,
//         name: p.name,
//         description: p.description,
//         price: p.price,
//         quantity: p.quantity,
//         image: p.imagePath || "/default-image.png",
//       }));

//       setProducts(productList);
//     } catch (err) {
//       console.error(err);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (productId) => {
//     if (!window.confirm("Delete this product?")) return;
//     try {
//       await API.delete(`/delete-product/${productId}`);
//       alert("Product deleted");
//       fetchProducts();
//     } catch {
//       alert("Delete failed");
//     }
//   };

//   const handleUpdate = (productId) => {
//     window.location.href = `/seller/update-product/${productId}`;
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="seller-dashboard-wrapper">
//       <h1>My Products</h1>

//       <div className="container-card seller-dashboard">
//         {loading ? (
//           <p>Loading...</p>
//         ) : products.length === 0 ? (
//           <p>No products added yet</p>
//         ) : (
//           products.map((product) => (
//             <Card
//               key={product.id}
//               product={product}
//               isSeller={true} 
//               onUpdate={handleUpdate}
//               onDelete={handleDelete}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;







import React, { useEffect, useState } from "react";
import API from "../../http/API";
import Card from "../../pages/webPage/components/card/Card";
import { toast } from "react-toastify";
import "./SellerDashboard.css";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const sellerId = localStorage.getItem("userId");
      if (!sellerId) return;

      const res = await API.get(`/seller/product/${sellerId}`);

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
      console.error(err);
      toast.error("Failed to load products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await API.delete(`/delete-product/${productId}`);

      toast.success("Product deleted successfully", {
        position: "top-right",
        autoClose: 2000,
      });

      fetchProducts();
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleUpdate = (productId) => {
    window.location.href = `/seller/update-product/${productId}`;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="seller-dashboard-wrapper">
      <h1>My Products</h1>

      <div className="container-card seller-dashboard">
        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>No products added yet</p>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              isSeller={true}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;