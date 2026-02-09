const decodeToken = (token) => {
  try {
    const payload = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  } catch (error) {
    console.error("Invalid token");
    return null;
  }
};


export const isLoggedIn = () => {
  return Boolean(localStorage.getItem("token1"));
};

export const saveAuthData = (token) => {
  const decoded = decodeToken(token);

  if (!decoded) return;

  localStorage.setItem("token1", token);
  localStorage.setItem("userId", decoded.userId);   
  localStorage.setItem("role", decoded.role); 
  localStorage.setItem("userEmail", decoded.sub); 
  
};
