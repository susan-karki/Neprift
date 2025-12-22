export const isLoggedIn = () => {
  return !!localStorage.getItem("token1");
};

export const logout = () => {
  localStorage.removeItem("token1");
};
