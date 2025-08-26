//import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
      <>
        <Header />
        <main className="app-content">
            <Outlet />
        </main>
        <Footer />
      </>
  )
}
export default Layout