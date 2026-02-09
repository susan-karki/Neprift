import React from "react";
import Form from "./form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../../config";
import "react-toastify/dist/ReactToastify.css";

const decodeToken = (token) => {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch (err) {
    console.error("Invalid token");
    return null;
  }
};

export const isLoggedIn = () => Boolean(localStorage.getItem("token1"));
export const saveAuthData = (token) => {
  const decoded = decodeToken(token);
  if (!decoded) return;

  localStorage.setItem("token1", token);
  localStorage.setItem("userId", decoded.userId);
  localStorage.setItem("role", decoded.role);
  localStorage.setItem("userEmail", decoded.sub);
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, data);

      if (response.data?.statusCode === 200) {
        const token = response.data.responseBody?.token;
        if (!token) {
          toast.error("Token not received");
          return;
        }
        saveAuthData(token);
        window.dispatchEvent(new Event("authChange"));
        const decoded = decodeToken(token);
        if (decoded?.role === "SELLER") {
          toast.success("Welcome Seller!");
          navigate("/seller/sellerdash");
        } else if (decoded?.role === "ADMIN") {
          toast.success("Welcome Admin!");
          navigate("/admin");
        } else {
          toast.success("Login successful!");
          navigate("/"); 
        }

        return;
      }

      toast.error(response.data?.responseMessage || "Login Failed");
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage || "Something went wrong"
      );
    }
  };

  return <Form type="Login" onSubmit={handleLogin} />;
};

export default Login;




