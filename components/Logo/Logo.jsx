import React from 'react'

const Logo = () => {
  return (
    <div className='flex text-left'>
                <div>
                <img src="/images/vep.svg" className='w-[100%] h-[100%]'></img>
                </div>
                <div className=' flex flex-col space-y-1'>
                    <h1 className='text-4xl md:text-5xl text-pink-700 font-bold tracking-wide'>Vep</h1>
                <span className='font-semibold'>Digital Payment</span>
                </div>
            </div>
  )
}

export default Logo