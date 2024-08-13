import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='bg-slate-800 text-white w-full p-5 px-20 '>
    <div className=' p-4 flex justify-between items-center'>
    <div className='text-white text-2xl font-bold'>
          <NavLink to={'/framework'} className='uppercase text-3xl'>
            start framework
          </NavLink>
        </div>
      <ul className='flex gap-7'>
        <li className='px-2 font-bold'>
          <NavLink 
            to={'/'} 
            className={({ isActive }) => 
              isActive ? 'bg-teal-500 p-2 rounded' : 'p-2 rounded '
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li className='px-2 font-bold uppercase'>
          <NavLink 
            to={'/portfolio'} 
            className={({ isActive }) => 
              isActive ? 'bg-teal-500 p-2 rounded' : 'p-2 rounded '
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className='px-2 font-bold uppercase'>
          <NavLink 
            to={'/contact'} 
            className={({ isActive }) => 
              isActive ? 'bg-teal-500 p-2 rounded' : 'p-2 rounded '
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
  )
}
