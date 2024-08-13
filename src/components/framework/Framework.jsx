import React from 'react'
import framework from './../../assets/images/avatar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';



export default function Framework() {
  return (
    <div className='flex flex-col justify-center items-center text-white  bg-teal-500 py-40 h-full '>

<div className='flex justify-center mb-6'>
<img src={framework} alt="avatar" className='w-full text-center '/>
</div>


    <div><h1 className='font-bold mb-5 text-4xl text-center block'>START FRAMEWORK</h1></div>
    <div className='flex justify-between items-center'>
    <div className="w-20 h-1 bg-white pr-4"></div>
    <span className='text-white text-center mx-3' ><FontAwesomeIcon icon={faStar} /></span>
    <div className="w-20 h-1 bg-white pl-4"></div>
    </div>
    <p className='p-6'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
