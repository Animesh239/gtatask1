import React from 'react'
import With from './With'

function Login() {
  return (
    <div className='flex justify-center  h-screen '>
        <div className='space-y-5 flex flex-col h-auto m-auto p-9 border-2 rounded-xl border-none md:backdrop-contrast-125 backdrop-contrast-150 md:border-white md:backdrop-blur-sm backdrop-blur-sm'>
       <form action="" className='space-y-5 px-9'>
       <center>
            <h1 className='text-white text-[30px] font-bold '>LOGIN HERE</h1>
        </center>
        <center>
            <input className='w-64 md:w-96 p-2 px-4 text-xl bg-transparent border border-white outline-none rounded-lg text-white' type="email" placeholder='Enter Email' required />
        </center>
        <center>
            <input className='w-64 md:w-96 p-2 px-4 text-xl bg-transparent border border-white outline-none rounded-lg text-white' type="password" placeholder='Enter Password' required />
        </center>
        <center>
        <div className=' md:relative md:left-[-120px] md:top-[-10px]  '>
        <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label className='text-white text-lg' htmlFor="rememberMe">Remember me</label>
        </div>
            <a className='text-white text-lg hover:font-bold hover:border-b border-spacing-5 hover:duration-100' href="/">Forgotten Password</a>
        </center>
        <center >
            <button className='md:w-64 w-52 p-2 px-3  border border-white outline-none rounded-lg hover:font-bold text-white hover:text-black hover:bg-white'><p className='text-lg'>Submit</p></button>
        </center>
        </form>
        <div>
        <center className='text-white text-3xl'>or</center>
        </div>
       <center>
       <With/>
       </center>
       </div>
    </div>
  )
}

export default Login;