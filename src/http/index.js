import axios from 'axios'
const API = axios.create({
    // baseURL : 'api here',
    headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : localStorage.getItem('token1'),
       
        

    },
  
});
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token1");
  if (token) {
    config.headers.Authorization = token; 
  }
  return config;
});
export default API