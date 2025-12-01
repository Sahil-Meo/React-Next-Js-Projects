import React from 'react'
import Navbar from '../components/Navbar/index.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import AuthPage from '../pages/AuthPage/AuthPage.jsx'

const Layout = () => {
     return (
          <div>
               <Navbar />
               <AuthPage />
               <main>
                    <Outlet />
               </main>
               <Footer />
          </div>
     )
}

export default Layout
