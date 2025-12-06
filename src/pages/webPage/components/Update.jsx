// // import React, { useState, useEffect } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import AddProduct from './AddProduct'
// // import axios from 'axios'
// // import {useParams } from 'react-router-dom'
// // import { baseUrl } from '../../../config';
// // const Update = () => {
// //     const { id } = useParams()
// //   const [blog, setBlog] = useState({})
// //   const navigate = useNavigate()

// //   const updateBlog = async (data) => {
// //     try {
// //       const response = await axios.patch(
// //         `${baseUrl}/blog/${id}`,
// //         {
          
// //           title: data.title,
// //           subtitle: data.subtitle,
// //           description: data.description,
// //           catagory: data.catagory,
// //           image: data.image,
// //           price: data.price,
// //           seller: data.seller,
// //           condition: data.condition,
          
// //         },
// //         {
// //           headers: {
// //             "Content-type": "multipart/form-data",
// //             "Authorization": localStorage.getItem("token1"),
// //           },
// //         }
// //       )

// //       console.log(response)

// //       if (response.status === 200) {
// //         setBlog(response.data.data)
// //         navigate("/")
// //       } else {
// //         alert("Something went wrong !! Try again")
// //       }
// //     } catch (error) {
// //       alert(error?.response?.data?.message || "Error while updating blog")
// //     }
// //   }

// //   const fetchBlog = async () => {
// //     try {
// //       const response = await axios.get(`${baseUrl}/blog/${id}`)
// //       console.log(response)
// //       if (response.status === 200) {
// //         setBlog(response.data.data)
// //       }
// //     } catch (error) {
// //       console.error("Error fetching blog:", error)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchBlog()
// //   }, [])

// //   return (
// //           <AddProduct type="Update" onSubmit={updateBlog} blog={blog} />
// //   )
// // }

// // export default Update

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import AddProduct from './AddProduct';
// import axios from 'axios';
// import { baseUrl } from '../../../config';

// const Update = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState({});
//   const navigate = useNavigate();

//   const updateBlog = async (data) => {
//     try {
//       const formData = new FormData();
//       for (let key in data) {
//         formData.append(key, data[key]);
//       }

//       const response = await axios.patch(`${baseUrl}/blog/${id}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           "Authorization": `Bearer ${localStorage.getItem("token1")}`,
//         },
//       });

//       if (response.status === 200) {
//         setBlog(response.data.data);
//         navigate("/");
//       } else {
//         alert("Something went wrong !! Try again");
//       }
//     } catch (error) {
//       alert(error?.response?.data?.message || "Error while updating blog");
//     }
//   };

//   const fetchBlog = async () => {
//     try {
//       const response = await axios.get(`${baseUrl}/blog/${id}`);
//       if (response.status === 200) {
//         setBlog(response.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching blog:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBlog();
//   }, [id]);

//   return <AddProduct type="Update" onSubmit={updateBlog} blog={blog} />;
// };

// export default Update;
