
const handleLogout = () => {
  localStorage.removeItem("token1");
  console.log("Logged out, token cleared!");
};

export default handleLogout;
