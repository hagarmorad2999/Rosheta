import React from 'react'
import Navbar from '../UI/Navbar.jsx'
import Footer from '../UI/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
    <Navbar/>
<div className='container'>
<Outlet/>
</div>


    
    <Footer/>
  </>
}