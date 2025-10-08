import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


// const Layout = ({children}) => {
//   return (
//     <>
//     <Navbar/>
//     {children}
//     <Footer/>
//     </>

    
//   )
// }
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", overflowX: "visible" }}>
        {children}
      </div>
      <Footer />
    </>
  );
};
export default Layout


