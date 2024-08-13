import React, { startTransition } from 'react'
import style from './About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function About() {
  return (
    <>
    <div className='flex flex-col justify-center items-center text-white  bg-teal-500 h-full py-80 '>
    <div><h1 className='font-bold mb-5 text-4xl text-center block'>ABOUT COMPONENT</h1></div>
    <div className='flex justify-between items-center'>
    <div className="w-20 h-1 bg-white pr-4"></div>
    <span className='text-white text-center mx-3' ><FontAwesomeIcon icon={faStar} /></span>
    <div className="w-20 h-1 bg-white pl-4"></div>
    </div>


    <div className='flex justify-between container  mt-4'>
      <div className='container'><p className=' text-white text-lg float-end w-3/4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
      <div className='container'><p className=' text-white text-lg w-3/4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
    </div>
    </div>
</>
  )
}
