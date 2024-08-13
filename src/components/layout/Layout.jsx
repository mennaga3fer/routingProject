import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../navbar/Navbar'
import Footer from './../footer/Footer'
import Contact from './../contact/Contact';
import { NavLink } from 'react-router-dom';




export default function Layout() {
  return (
    <div className="flex flex-col h-screen w-full">
      <header className='w-full navbar-expand-lg' >
        <Navbar />
      </header>

      <main className="flex-grow  w-full">
        <Outlet />
      </main>

      <footer className="mt-auto bg-slate-800 text-white rounded-md w-full">
        <Footer />
      </footer>
    </div>
    
  )
}
