import React from 'react';
import Form from './form/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../config'; 

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, data);

      if (response.status === 200) {
        navigate('/auth/login');
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="app-container">
      <Form type="Register" onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
