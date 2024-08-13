import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'; 


export default function Contact() {
  return (
    <div className='flex flex-col justify-center text-slate-800 bg-white h-full '>
    <div><h1 className='font-bold mb-4 text-4xl text-center block mt-6'>CONTACT SECTION</h1></div>
    <div className='container flex justify-center items-center mt-2 mb-16'>
    <div className="w-20 h-1 bg-slate-800 pr-4"></div>
    <span className='text-slate-800 text-center mx-3' ><FontAwesomeIcon icon={faStar} /></span>
    <div className="w-20 h-1 bg-slate-800 pl-4"></div>
    </div>
<form action="">
      <div className='container justify-center flex-col mb-5'>
<input type="text" name='Name' placeholder='userName' id='userName' className='border-b-2 border-gray-300 w-1/2 pb-2 m-3 p-6' />
<input type="text" name='userAge' placeholder='userAge' id='userAge' className='border-b-2 border-gray-300 w-1/2 pb-2 m-3 p-6' />
<input type="email" name='Email' placeholder='userEmail' id='userEmail' className='border-b-2 border-gray-300 w-1/2 pb-2 m-3 p-6' />
<input type="password" name='userPassword' placeholder='userPassword' id='userPassword' className='border-b-2 border-gray-300 w-1/2 pb-2 m-3 p-6 mx-6' />
</div>
<button className='bg-teal-500 p-4 rounded-md mb-5 ml-96 float-left'> Send Message</button>
</form>

    </div>
  )
}
