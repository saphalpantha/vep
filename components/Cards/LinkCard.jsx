import React from 'react'
import Link from 'next/link'
const LinkCard = () => {
  return (
    <div className='z-10 relative my-[2rem]'>
        <h1 className='font-bold text-2xl z-20 pt-[1rem]'>Cards</h1>
        <div className='container flex flex-col z-20 justify-between space-y-6 pt-[2rem]'>
                <h1 className=' text-slate-700 font-light max-w-sm'>No cards added yet!
Link a card now to enable account features.</h1>
<Link className='z-20'  href="cards/card-lists"><button className='w-[400px] h-[48px] rounded-2xl px-3 bg-[#BF13BF] text-white tracking-wide hover:bg-[#BF13AC] cursor-pointer'  >LINK A CARD</button></Link>
        </div>
        <div className='absolute z-1 w-[50rem] h-[40rem] top-[5rem] left-[2rem]'>
            <img className='w-[100%] h-[100%]' src="/images/card_page_icon.svg"/>
        </div>
    </div>
  )
}

export default LinkCard