import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './../footer/Footer.module.css'
// import { faFacebook, faTwitter , faLinkedin, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return ( <>
    <div className='bg-slate-800 text-white flex justify-center items-center h-60 relative w-full' >
    <footer className=' text-white'>

      <div className='flex justify-between items-center text-center w-full'>

        <div className='text-center w-1/3 px-12' > 
          <h3 className='text-3xl '>LOCATION</h3>
          <p className='text-md'>2215 John Daniel Drive</p>
          <p className='text-md'>Clark, MO 65243</p>
        </div>


        <div className='text-center w-1/3 px-12' >
        <h3 className='text-3xl '>AROUND THE WEB</h3>
        <div className='icons flex justify-center'>
      {/* <span><FontAwesomeIcon icon={faFacebook} /></span> 
      <span><FontAwesomeIcon icon={faTwitter} /></span>
      <span><FontAwesomeIcon icon={faLinkedin} /></span>
      <span><FontAwesomeIcon icon={faGlobe} /></span> */}
      </div>
      
        </div>


        <div className='text-center w-1/3 px-12'>
    <h3 className='text-3xl '>ABOUT FREELANCER</h3>
    <p className='text-md'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>

      </div>
      
  
      </footer> 
      
    <h3 className='bg-slate-900 absolute bottom-0 left-0 right-0'>Copyright © Your Website 2021</h3>
   </div>
    </>
  )
}
