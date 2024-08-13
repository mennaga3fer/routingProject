import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import port1 from './../../assets/images/port1.png'
import port2 from './../../assets/images/port2.png'
import port3 from './../../assets/images/port3.png'


export default function Portfolio() {
  return (
    <>
    <div className='flex flex-col justify-center text-slate-800 bg-white h-full '>
    <div><h1 className='font-bold mb-4 text-4xl text-center block mt-6'>PORTFOLIO COMPONENT</h1></div>
    <div className='flex justify-center items-center mt-2'>
    <div className="w-20 h-1 bg-slate-800 pr-4"></div>
    <span className='text-slate-800 text-center mx-3' ><FontAwesomeIcon icon={faStar} /></span>
    <div className="w-20 h-1 bg-slate-800 pl-4"></div>
    </div>

<div className='container flex justify-center gap-x-9 pt-3 '>
<div className=" w-1/4 "><img className='rounded-md' src={port1} alt="home" /></div>
<div className="w-1/4 "><img className='rounded-md' src={port2} alt="cake" /></div>
<div className="w-1/4 "><img className='rounded-md' src={port3} alt="circus" /></div>
</div>
<div className='container flex justify-center gap-x-9 pt-9 mb-5'>
<div className=" w-1/4 "><img className='rounded-md' src={port1} alt="home" /></div>
<div className="w-1/4 "><img className='rounded-md' src={port2} alt="cake" /></div>
<div className="w-1/4 "><img className='rounded-md' src={port3} alt="circus" /></div>
</div>



  </div>

    </>
  )
}
