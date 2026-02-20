import React, { useEffect, useState } from "react";
import API from "../../http/API";
import { toast } from "react-toastify";
import "./AdminUserMgmt.css";

const AdminUserMgmt = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get("/product/all");

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
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await API.delete(`/delete-product/${productId}`);
      toast.success("Product deleted successfully");
      fetchAllProducts();
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="admin-wrapper">
      <h1>Product Management</h1>

      <div className="admin-card-container">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <div className="admin-card" key={product.id}>
              <div className="admin-card-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="admin-card-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Price:</strong> Rs.{product.price}</p>
                <p><strong>Stock:</strong> {product.quantity}</p>
                <button
                  className="admin-delete-btn"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete Product
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminUserMgmt;