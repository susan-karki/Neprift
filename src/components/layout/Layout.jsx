// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'


// // const Layout = ({children}) => {
// //   return (
// //     <>
// //     <Navbar/>
// //     {children}
// //     <Footer/>
// //     </>

    
// //   )
// // }
// const Layout = ({ children }) => {
//   return (
//     <>
//       <Navbar />
//       <div style={{ width: "100%", overflowX: "visible" }}>
//         {children}
//       </div>
//       <Footer />
//     </>
//   );
// };
// export default Layout



import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }

  const mainStyle = {
    flex: 1, // takes remaining space between navbar and footer
    width: '100%',
    overflowX: 'visible',
    padding: '20px', // optional
  }

  return (
    <div style={layoutStyle}>
      <Navbar />
      <main style={mainStyle}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
