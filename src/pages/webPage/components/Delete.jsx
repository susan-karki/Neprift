
// import axios from 'axios'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { baseUrl } from '../../../config';
// import AddProduct from './AddProduct'
// import React, { useEffect, useState } from 'react'

// const Delete = () => {
//     const {id} =  useParams()
//    const[blog, setBlog]=useState({})
//    const navigate = useNavigate()

//    const deleteBlog= async()=>{
//         try {
//             const response = await axios.delete(`${baseUrl}/blog/${id}`, {
//             headers :{
//             "Authorization" : localStorage.getItem('token1')
//         }
//         })
//         console.log(response)
//         if(response.status===200){
//         setBlog(response.data.data)
//         navigate('/')
//         }else{
//             alert("something went wrong !! try again")
//         }
    
//         } catch (error) {
//             alert(error?.response?.data?.message)
    
//         }

//    }
//    const fetchBlog = async()=>{
//    const response = await axios.get(`${baseUrl}/blog/${id}`)
//    console.log(response)
//     if(response.status===200){
//       setBlog(response.data.data)
//     }
//   }
//   useEffect(()=>{
//     fetchBlog()

//   }, [])

//   return (
//     <AddProduct type = 'Delete' onSubmit={deleteBlog} blog={blog} />
    
//   )
// }

// export default Delete