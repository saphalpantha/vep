import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import { useState } from 'react'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
const FewStep = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    function handleOnChange(value) {
        setPhoneNumber(value)
      }
  return (
    <div>

    <div className=' relative max-w-6xl flex flex-col md:flex-row mx-auto justify-between space-x-0 md:space-x-[5rem] px-2 mt-[5rem]'>
        <div className='flex flex-col space-y-2 justify-between '>
            <Logo/>
            <div className='md:px-10 text-center md:text-left space-y-2 '>
            <span className='font-light text-2xl md:text4xl'>
                Hey!</span>
            <h1 className='font-semibold text-3xl md:text-4xl'>Welcome back</h1>
            </div>
            <div className='md:w-full'>
            <img className='w-[100%] h-[100%]' src="/images/fewstep_logo.svg"></img>

            </div>
        </div>
        <div className='hidden md:flex w-[25rem] h-0 border border-[2px] border-[#F2F2F2]  rotate-90 absolute top-[55%] left-[30%]'></div>
        <div className=''>
             <div className='flex flex-col justify-between space-y-6 mt-[1rem] md:mt-[10rem]'>
            <h1 className="text-2xl md:text-3xl" >Business Details </h1>
            <p className='font-light text-slate-800'>Provide your required business details for your account</p>
            <input className='w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2]' type='text' placeholder='Enter Company Name'  ></input>
            <select
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
          >
            <option value="Select Bussiness Type">
              Select Business Type
            </option>
            <option value="NPR" placeholder="Designing">
            Designing
            </option>
            <option value="INR" placeholder="CS">
              CS
            </option>
            <option value="US" placeholder="Institution">
              Institution
            </option>
          </select>

            <Link className=''  href="/signup/get-started"><button className='w-[400px] h-[48px] rounded-md px-3 bg-[#BF13BF] text-white tracking-wide hover:bg-[#BF13AC]' >NEXT</button></Link>
            <div className='flex flex-col space-x-3 md:flex-row pt-5'>
            </div>
                <span className='text-center pt-5 text-xl md:text-2xl max-w-md text-gray-800'>Already have an account ?  <Link href="/"> <span className='text-[#BF13BF] font-2xl text-xl md:2xl'>LOGIN</span></Link></span>
             </div>
        </div>
    </div>
    </div>
  )
}

export default FewStep