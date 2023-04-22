import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'

const Start = () => {

  return (
    <div>

    <div className='relative max-w-6xl flex flex-col md:flex-row mx-auto justify-between space-x-0  px-2 md:mt-[5rem]'>
        <div className='flex flex-col space-y-2 justify-between '>
            <Logo/>
            <div className='md:px-10 text-center md:text-left space-y-2 '>
            <span className='font-light text-2xl md:text4xl'>
                Lets!</span>
            <h1 className='font-semibold text-3xl md:text-4xl'>Get Started</h1>
            </div>
            <div className='md:w-full'>
            <img className='w-[100%] h-[100%]' src="/images/start_logo.svg"></img>

            </div>
        </div>
        <div className='hidden md:flex w-[25rem] h-0 border border-[2px] border-[#F2F2F2]  rotate-90 absolute top-[55%] left-[30%]'></div>
        <div className=''>
             <div className='flex flex-col justify-between space-y-10 mt-[1rem] md:mt-[10rem]'>
            <h1 className="text-2xl md:text-3xl" >Setup your username </h1>
            <div className='w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] flex space-x-2 '>
            <span className='px-3 text-slate-500 font-bold mt-3' >vep.me/</span>
            <div className='w-[1px]  bg-slate-300 rounded-3xl'></div>
            <input className='border-l-1 outline-none bg-transparent w-full' type='text' placeholder='Enter username'  ></input>
            </div>
            <p className='font-light text-slate-800 max-w-sm'>This will be the unique name using which other users can find and pay you.</p>
            <Link className=''  href="/signup/account-created"><button className='w-[400px] h-[48px] rounded-md px-3 bg-[#BF13BF] text-white tracking-wide hover:bg-[#BF13AC]' >NEXT</button></Link>
            <div className='flex flex-col space-x-3 md:flex-row pt-5'>
            </div>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Start