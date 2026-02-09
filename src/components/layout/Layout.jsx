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
    flex: 1,
    width: '100%',
    overflowX: 'visible',
    padding: '20px', 
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
