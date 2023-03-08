import { Facebook } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Google } from 'react-bootstrap-icons';
import React from 'react'


function With() {
  return (
    <div className='space-y-3'>
        <a href='https://www.facebook.com/' className='md:w-80 w-64 p-2 px-3 hover:bg-[#4267B2] border border-white outline-none hover:duration-200 hover:shadow-[#4267B2] hover:shadow-2xl hover:font-bold text-white flex md:font-semibold font-light rounded space-x-4'><Facebook size={34} /><span className='md:text-2xl text-lg'>Login with facebook</span></a>
        <a href='https://www.linkedin.com/' className='md:w-80 w-64 p-2 px-3 hover:bg-[#0000FF] border border-white outline-none hover:duration-200 hover:shadow-[#0000FF] hover:shadow-2xl hover:font-bold text-white flex md:font-semibold font-light rounded space-x-4'><Linkedin size={34} /><span className='md:text-2xl text-lg'>Login with LinkedIn</span></a>
        <a href='https://www.google.com/' className='md:w-80 w-64 p-2 px-3 hover:bg-[#0F9D58] border border-white outline-none hover:duration-200 hover:shadow-[#0F9D58] hover:shadow-2xl hover:font-bold text-white flex md:font-semibold font-light rounded space-x-4'><Google size={34} /><span className='md:text-2xl text-lg'>Login with Google</span></a>
    </div>
  )
}

export default With