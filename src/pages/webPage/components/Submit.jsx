// import React from "react";
// import { useNavigate } from "react-router-dom";
// import AddProduct from "./AddProduct";
// import { baseUrl } from "../../../config";
// import API from "../../../http/API";

// const Submit = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (data) => {
//     console.log("Submit clicked", data);
//     try {
//       const formData = new FormData();
//       for (let key in data) {
//         if (data[key] !== undefined && data[key] !== null) {
//           formData.append(key, data[key]);
//         }
//       }

//       const response = await API.post(`${baseUrl}/product`, formData);
//       console.log("POST response:", response);

//       if (response.status === 201) {
//         alert("Product added successfully!");
//         navigate("/submit"); // stay for testing
//       }
//     } catch (err) {
//       console.error("Submit error:", err);
//       alert(err?.response?.data?.message || err.message);
//     }
//   };

//   const handleUpdate = async (data) => {
//     console.log("Update clicked", data);
//     if (!data.id) return alert("Cannot update: no product ID");
//     try {
//       const formData = new FormData();
//       for (let key in data) {
//         if (data[key] !== undefined && data[key] !== null) {
//           formData.append(key, data[key]);
//         }
//       }

//       const response = await API.put(`${baseUrl}/product/${data.id}`, formData);
//       console.log("PUT response:", response);
//       alert("Product updated successfully!");
//     } catch (err) {
//       console.error("Update error:", err);
//       alert(err?.response?.data?.message || err.message);
//     }
//   };

//   const handleDelete = async (data) => {
//     console.log("Delete clicked", data);
//     if (!data.id) return alert("Cannot delete: no product ID");
//     try {
//       const response = await API.delete(`${baseUrl}/product/${data.id}`);
//       console.log("DELETE response:", response);
//       alert("Product deleted successfully!");
//     } catch (err) {
//       console.error("Delete error:", err);
//       alert(err?.response?.data?.message || err.message);
//     }
//   };

//   return (
//     <AddProduct
//       productData={{}} // empty initially
//       onSubmit={handleSubmit}
//       onUpdate={handleUpdate}
//       onDelete={handleDelete}
//     />
//   );
// };

// export default Submit;


import React from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import API from "../../../http/API"; // adjust relative path if needed

const Submit = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    console.log("Submit clicked", data);
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key]);
        }
      });

      const response = await API.post("/product", formData); // use relative URL
      console.log("POST response:", response);

      if (response.status === 201) {
        alert("Product added successfully!");
        navigate("/submit"); // stay for testing
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert(err?.response?.data?.message || err.message);
    }
  };

  const handleUpdate = async (data) => {
    console.log("Update clicked", data);
    if (!data.id) return alert("Cannot update: no product ID");
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key]);
        }
      });

      const response = await API.put(`/product/${data.id}`, formData);
      console.log("PUT response:", response);
      alert("Product updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      alert(err?.response?.data?.message || err.message);
    }
  };

  const handleDelete = async (data) => {
    console.log("Delete clicked", data);
    if (!data.id) return alert("Cannot delete: no product ID");
    try {
      const response = await API.delete(`/product/${data.id}`);
      console.log("DELETE response:", response);
      alert("Product deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert(err?.response?.data?.message || err.message);
    }
  };

  return (
    <AddProduct
      productData={{}} // empty initially
      onSubmit={handleSubmit}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
    />
  );
};

export default Submit;

