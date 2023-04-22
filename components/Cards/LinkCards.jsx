import React from 'react'
import CardGrid from './CardGrid'
import CardLists from './CardLists'
import Link from 'next/link'
import { useRouter } from 'next/router'



const LinkCards = () => {
  const router = useRouter()
  const closeCardModelHandler = () => {
      router.push('/cards/card-lists')
  }



  // const cardLinkHandler = () => {
  //   router.push('/cards/card-lists')
  // }
  
  return (
    <div className=' relative flex justify-between space-x-10'>
        <div onClick={closeCardModelHandler} className='absolute top-5 right-5 text-2xl cursor-pointer'>X</div>
        <CardLists className="" direction_col={true}/>
        <div>
            <form className='max-w-sm justify-between flex flex-col space-y-8 pt-[2rem]'>
              <h1>Link a card</h1>
              <span>  Provide the details to link your card to your vepay account.</span>
              <input className='rounded-2xl w-[328px] h-[48px] placeholder:text-gray-400 pl-4 bg-[#F2F2F2] outline-none shadow-sm' placeholder='Enter Card holders’ Name' type='text'></input>
              <div className='rounded-2xl w-[328px] h-[48px] shadow-sm outline-none relative'>
              <input className='placeholder:text-gray-400 pl-4 w-[328px] rounded-2xl h-[48px]  bg-[#F2F2F2] ' placeholder='1 2 3 4 5' type='text'></input>
                <div className='w-[2rem] h-[2rem] absolute top-3 right-5 pb-3'>
                      <img src="/images/master_card.svg" className='w-[100%] h-[100%]'/>
                      <h1 className='text-[0.4rem] tracking-tight text-black font-bold'>mastercard</h1>
                   </div>
              </div>
              <input className='rounded-2xl w-[328px] h-[48px] placeholder:text-gray-400 pl-4 bg-[#F2F2F2] outline-none shadow-sm' placeholder='Enter Card Number' type='text'></input>
              <div className='flex space-x-3'>
              <div className='relative flex space-x-2 rounded-2xl w-[156px] h-[48px] bg-[#F2F2F2]  outline-none shadow-sm'>
              <input className='rounded-2xl w-[156px] h-[48px]  bg-[#F2F2F2] placeholder:text-gray-400 pl-4 placeholder:font-2xs ' placeholder="Valid till" type='text'></input>
                <div className='w-[1.1rem] h-[1.1rem] absolute top-4 right-3'>
                <img src="/images/calender.svg" className='w-[100%] h-[100%]' />
                </div>
              </div>
              <div className='relative flex space-x-5 rounded-2xl w-[156px] h-[48px] bg-[#F2F2F2]  outline-none shadow-sm'>
              <input className='rounded-2xl w-[156px] h-[48px] bg-[#F2F2F2] placeholder:text-gray-400 pl-4 placeholder:font-2xs ' placeholder="CVV" type='text'></input>
                <div className='w-[1.4rem] h-[1.4rem] absolute top-4 right-3'>
                <img src="/images/eye.svg" className='w-[100%] h-[100%]' />
                </div>
              </div>
              </div>
              <input className='rounded-2xl w-[328px] h-[48px] placeholder:text-gray-400 pl-4 bg-[#F2F2F2] outline-none shadow-sm' placeholder='Enter Card pin' type='text'></input>
              <span className='italic tracking-wide font-extralight '>We never store your  CVV and Card pin.</span>
              <div className='flex space-x-2' >
                <div className='w-[2rem] h-[2rem] mb-2'>
                <img className='w-[100%] h-[100%]' src="/images/warning.svg" ></img>
                </div>
                <span className='max-w-sm  text-[#333333] font-light pl-2'>$1 will deducted for linking your card which will be refundable.</span>
              </div>
                <Link className='z-20'  href="/cards/card-lists"><button  className='w-[400px] h-[48px] rounded-2xl px-3 bg-[#BF13BF] text-white tracking-wide hover:bg-[#BF13AC] cursor-pointer'  >LINK</button></Link>
            </form>
        </div>
    </div>
  )
}

export default LinkCards