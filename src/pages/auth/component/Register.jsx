      // import React, { useState } from 'react';
      // import Form from './form/Form';
      // import { useNavigate } from 'react-router-dom';
      // import axios from 'axios';
      // import { toast } from 'react-toastify';
      // import { baseUrl } from '../../../config';

      // const Register = () => {
      //   const navigate = useNavigate();
      //   const [loading, setLoading] = useState(false);

      //   const handleRegister = async (data) => {
      //     setLoading(true);
          
      //     try {
      //       const response = await axios.post(`${baseUrl}/auth/register`, data);
      //       console.log('=== DEBUG INFO ===');
      //       Console.log("Response",response.statusCode);
      //       console.log('HTTP Status:', response.status);
      //       console.log('Response Data:', response.data);
      //       console.log('Backend Status Code:', response.data.statusCode);
      //       console.log('Status Code Type:', typeof response.data.statusCode);
      //       console.log('==================');

      //       const isSuccess = 
      //       response.statusCode === 200 || 
      //         response.status === 200 || 
      //         response.status === 201 ||
      //         response.data.statusCode === 200 || 
      //         response.data.statusCode === "200" ||
      //         response.data.responseMessage?.toLowerCase().includes('success');
            
      //       if (isSuccess) {
      //         console.log('SUCCESS CONDITION MET!');
      //         toast.success(response.data.responseMessage || 'User Created Successfully', {
      //           position: "top-right",
      //           autoClose: 2000,
      //         });
              
      //         setTimeout(() => {
      //           navigate('/auth/login');
      //         }, 2000);
      //       } else {
      //         console.log('ELSE BLOCK TRIGGERED');
      //         toast.error(response.data.responseMessage || 'Registration Failed');
      //       }
            
      //     } catch (error) {
      //       console.error('CATCH BLOCK - Registration Error:', error);
            
      //       if (error.response) {
      //         toast.error(
      //           error.response.data?.responseMessage || 
      //           'Registration Failed. Please try again.'
      //         );
      //       } else if (error.request) {
      //         toast.error('No response from server. Please check your connection.');
      //       } else {
      //         toast.error('Something went wrong. Please try again.');
      //       }
      //     } finally {
      //       setLoading(false);
      //     }
      //   };

      //   return (
      //     <div className="app-container">
      //       <Form type="Register" onSubmit={handleRegister} loading={loading} />
      //     </div>
      //   );
      // };

      // export default Register;





import React, { useState } from 'react';
import Form from './form/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../config';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (data) => {
    const phoneRegex = /^98\d{8}$/;

    if (!phoneRegex.test(data.phone)) {
      toast.error("Phone number must be 10 digits and start with 98");
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, data);

      console.log('=== DEBUG INFO ===');
      console.log('HTTP Status:', response.status);
      console.log('Response Data:', response.data);
      console.log('==================');

      const isSuccess = 
        response.status === 200 || 
        response.status === 201 ||
        response.data.statusCode === 200 || 
        response.data.statusCode === "200" ||
        response.data.responseMessage?.toLowerCase().includes('success');
      
      if (isSuccess) {
        toast.success(
          response.data.responseMessage || 
          'User Created Successfully',
          {
            position: "top-right",
            autoClose: 2000,
          }
        );
        
        setTimeout(() => {
          navigate('/auth/login');
        }, 2000);
      } else {
        toast.error(response.data.responseMessage || 'Registration Failed');
      }
      
    } catch (error) {
      console.error('Registration Error:', error);
      
      if (error.response) {
        toast.error(
          error.response.data?.responseMessage || 
          'Registration Failed. Please try again.'
        );
      } else if (error.request) {
        toast.error('No response from server. Please check your connection.');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Form type="Register" onSubmit={handleRegister} loading={loading} />
    </div>
  );
};

export default Register;