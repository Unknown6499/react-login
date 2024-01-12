import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const RootLayout:React.FC = () => {
    return (
      <>
        <Navbar />
        <div
          style={{ background: "#EEEEEE", minHeight: "calc(100vh - 200px)" }}
        >
          <Outlet />
        </div>
        <Footer />
      </>
    );
}

export default RootLayout