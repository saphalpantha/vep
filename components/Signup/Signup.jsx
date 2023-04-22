import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import { useState } from 'react'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
const Signup = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    function handleOnChange(value) {
        setPhoneNumber(value)
      }
  return (
    <div>

    <div className=' relative max-w-6xl flex flex-col md:flex-row mx-auto justify-between space-x-0 md:space-x-[5rem] px-2 mt-[5rem]'>
        <div className='flex flex-col space-y-3 md:space-y-[5rem] justify-between '>
            <div className='md:px-10 text-center md:text-left space-y-2 '>
            <span className='font-light text-2xl md:text4xl'>
                Hey!</span>
            <h1 className='font-semibold text-3xl md:text-4xl'>Welcome back.</h1>
            </div>
            <div className='md:w-full'>
            <img className='w-[100%] h-[100%]' src="/images/signup_logo.svg"></img>

            </div>
        </div>
        <div className='hidden md:flex w-[25rem] h-0 border border-[2px] border-[#F2F2F2]  rotate-90 absolute top-[55%] left-[30%]'></div>
        <div className=''>
             <Logo/>
             <div className='flex flex-col justify-between space-y-6 mt-[3rem]'>
            <h1 className="text-2xl md:text-3xl" >Sign Up to Vep </h1>
            <p className='font-light text-slate-800'>Enter your phone number to register with your accout</p>
            <PhoneInput
        inputProps={{
          id: 'phone',
          name: 'phone',
          required: true,
          autoFocus: true,
          placeholder: 'Enter your phone number',
          className: 'w-[400px] h-[48px] px-14 rounded-md  bg-[#F2F2F2]',
        }}
        containerStyle={{ position: 'relative' }}
        country="us"
        preferredCountries={['us', 'ca']}
        value={phoneNumber}
        onChange={handleOnChange}
      />
            <div className='relative'>
            <div className='w-[1.5rem]  absolute right-[1.5rem] top-[0.8rem]'>
              <img className='w-[100%] h-[100%]' src="/images/login_arrow.svg"/>  
            </div>              
            <Link className=''  href="/signup/register"><button className='w-[400px] h-[48px] rounded-md px-3 bg-[#BF13BF] text-white tracking-wide hover:bg-[#BF13AC]' type='password' placeholder='Set Password'  >NEXT</button></Link>
            </div>
            <div className='flex flex-col space-x-3 md:flex-row pt-5'>
            </div>
                <span className='text-center pt-5 text-xl md:text-2xl max-w-md text-gray-800'>Already have an account ?  <Link href="/"> <span className='text-[#BF13BF] font-2xl text-xl md:2xl'>LOGIN</span></Link></span>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Signup