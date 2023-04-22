import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
const Register = () => {
  return (
    <div>

    <div className=' relative max-w-6xl flex flex-col md:flex-row mx-auto justify-between space-x-0 md:space-x-[5rem] px-2 mt-[5rem]'>
        <div className='flex flex-col space-y-3 md:space-y-[5rem] justify-between '>
            <div className='md:px-10 text-center md:text-left space-y-2 '>
            <span className='font-light text-2xl md:text4xl'>
                Lets'</span>
            <h1 className='font-semibold text-3xl md:text-4xl'>Secure your login process </h1>
            </div>
            <div className='md:w-full'>
            <img className='w-[100%] h-[100%]' src="/images/register_logo.svg"></img>

            </div>
        </div>
        <div className='hidden md:flex w-[25rem] h-0 border border-[2px] border-[#F2F2F2]  rotate-90 absolute top-[55%] left-[30%]'></div>
        <div className=''>
             <Logo/>
             <div className='flex flex-col justify-between space-y-6 mt-[3rem]'>
            <h1 className="text-2xl md:text-3xl" >Create new Login credentails</h1>
            <p className='font-light text-slate-800'>Enter your email ID to register your account and set a password</p>


            <div className='relative'>
                <div className='w-[1.5rem] h-[1.5rem] absolute top-[0.6rem] left-[0.5rem]'>
                    <img className='w-[100%] h-[100%]' src="/images/email.svg"/>
                </div>
            <input className='w-[400px] h-[48px] rounded-md px-3 pl-[6rem] bg-[#F2F2F2] ' type='text' placeholder='Enter email Id'  ></input>
            </div>
            <div className='relative'>
            <div className='w-[1.5rem] h-[1.5rem] absolute top-[0.5rem] left-[0.5rem]'>
                    <img className='w-[100%] h-[100%]' src="/images/password.svg"/>
                      
                </div>
                <div className='w-[1.5rem] h-[1.5rem] absolute top-[0.8rem] right-[5rem]'>
                    <img className='w-[100%] h-[100%]' src="/images/eye.svg"/>
                </div>
            <input className='w-[400px] h-[48px] rounded-md px-3 pl-[5rem] bg-[#F2F2F2]' type='password' placeholder='Set Password'  ></input>
            </div>
            <div className='relative'>
            <div className='w-[1.5rem] h-[1.5rem] absolute top-[0.5rem] left-[0.5rem]'>
                    <img className='w-[100%] h-[100%]' src="/images/password.svg"/>
                      
                </div>
                <div className='w-[1.5rem] h-[1.5rem] absolute top-[0.8rem] right-[5rem]'>
                    <img className='w-[100%] h-[100%]' src="/images/eye.svg"/>
                    
                </div>
            <input className='w-[400px] h-[48px] rounded-md px-3 pl-[5rem] bg-[#F2F2F2]' type='password' placeholder='Confirm Password'  ></input>
            </div>
            <div className='relative'>
            <div className='w-[1.5rem]  absolute right-[1.5rem] top-[0.8rem]'>
              <img className='w-[100%] h-[100%]' src="/images/login_arrow.svg"/>  
            </div>              
            <Link href="/signup/basic-detail"><button className='w-[400px] h-[48px] rounded-md px-3 bg-[#BF13BF] text-white tracking-wide hover:bg-[#BF13AC]' type='password' placeholder='Set Password'  >NEXT</button></Link>
            </div>              
             </div>
        </div>
    </div>
    </div>
  )
}

export default Register