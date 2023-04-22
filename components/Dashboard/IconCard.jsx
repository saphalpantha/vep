import React from 'react'

const IconCard = (props) => {
  return (
    <div className='w-[300px] h-[104px] bg-[#FFFFFF] shadow-md rounded-3xl px-5' >
            <div className='flex space-x-5'>
                <div className='w-1/4 p-6 bg-[#333333] rounded-3xl'>
                    <img className='w-[100%] h-[100%]' src={`/images/icons-dashboard/${props.img}.svg`}></img>
                </div>
                    <div className='flex flex-col space-y-2'>
                            <h1 className='text-xl font-2xl'>{props.title}</h1>
                            <span className='text-xl font-light text-slate-400'>{props.subtitle}</span>
                         </div>
            </div>
    </div>
  )
}

export default IconCard