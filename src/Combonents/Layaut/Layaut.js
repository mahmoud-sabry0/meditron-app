import React from 'react'
import Navbar from '../Nav/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layaut() {
  return <>
  <Navbar/>
  <main>
    <Outlet/>
  </main>
  <Footer/>
  </>
}
