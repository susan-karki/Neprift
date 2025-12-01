

import React from 'react';
import Layout from "../../../components/layout/Layout";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddProduct from './AddProduct';
import { baseUrl } from '../../../config';

const Submit = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }

      const response = await axios.post(`${baseUrl}/blog`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${localStorage.getItem('token1')}`
        }
      });

      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }

    } catch (error) {
      alert(error?.response?.data?.message || error.message);
    }
  };

  return (
      <AddProduct type="Submit" onSubmit={handleSubmit} />
  );
};

export default Submit;
