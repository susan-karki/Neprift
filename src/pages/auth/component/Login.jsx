import React, { useEffect } from 'react'
import Form from './form/Form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../../config';

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = async(data) =>{
   
try {
   //console.log("handle login triggered")
  const response= await axios.post(`${baseUrl}/auth/login`, data)
    if (response.status===200){
      localStorage.setItem('token1', response.data.token)
      navigate('/')
    }else{
      alert("Login Failed")
    }
  
} catch (error) {
  alert(error?.response?.data?.message)
  
}

  }

  return (
    <Form type = 'Login' onSubmit = {handleLogin} />
  )
}

export default Login