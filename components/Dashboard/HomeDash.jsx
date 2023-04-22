import React from 'react'
import Link from 'next/link'
import IconCard from './IconCard'
const HomeDash = () => {
    const data = [
        {id:'i1', img:'wallet', title:'Wallet' , subtitle:'USD wallet'},
        {id:'i2', img:'icon_arrow', title:'Transaction' , subtitle:'209 Transaction'},
        {id:'i3', img:'bank', title:'Bank Accounts' , subtitle:'O3 Bank accounts'},
        {id:'i4', img:'card', title:'Cards' , subtitle:'O3 Cards'},
    ]
  return (
    <div className='w-6xl md:w-[1330px]  container flex flex-col md:flex-row justify-between  mb-[2rem]'>
        <div className='flex flex-col justify-between ml-[5rem] pt-[2rem] mb-[8rem]'>
            <div className='flex items-center  space-x-5'>
                <div className='w-1/5'>
                    <img className='rounded-full w-[100%] h-[100%]' src="/images/user_img.svg"></img>
                </div>
                <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333]  font-bold'>Hello, Abhijeet!</h1>
                    <span className='mb-10'>@abhijeeeeeeet</span>
                </div>
            </div>

            <div className='max-w-md space-y-5'>
                <h1  className='ml-5 text-2xl  font-semibold'>Wallet Balance</h1>
                <h1 className='font-semibold text-4xl md:text-6xl text-slate-700 ml-5'>$ 0.00</h1>
                <div className='flex bg-[#FFD6FF] rounded-b-[3rem] space-x-6 justify-center items-center w-[440px] h-[65px]'>
                    <Link href="/withdraw" className='text-[#BF13BF] font-bold'>WITHDRAW</Link>
                    <div className='w-[1px]  border-1 bg-slate-400 h-[40px]'></div>
                    <Link href="/add-balance" className='text-[#BF13BF] font-bold'>ADD BALANCE</Link>
                </div>
            </div>


            <div className='flex flex-col space-y-4'>
                <p className='text-slate-400 text-xs'>No transaction yet!!!</p>
                <h1 className='max-w-md text-slate-600 tracking-wide text-xl'>Start making payments through Vep and now you can send Invoice also.</h1>
                <div className='flex space-x-6'>
                    <button className='w-[190px] h-[48px] bg-[#BF13BF] rounded-2xl text-white hover:bg-[#BF13CE]'>Transfer</button>
                    <button className='w-[190px] h-[48px] rounded-3xl text-[#BF13BF] font-bold'>Send Invoice</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-between pt-[2rem] space-y-6'>
                <div className='flex space-x-6'>
                    <button className='w-[190px] h-[48px] rounded-2xl text-[#BF13BF] font-bold border-[1px] border-[#BF13BF]'>Send Invoice</button>
                    <button className='w-[190px] h-[48px] bg-[#BF13BF] rounded-2xl text-white hover:bg-[#BF13CE]'>Transfer</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-[2rem] '>
                    {data.map(item => (<IconCard key={item.id} title={item.title} subtitle={item.subtitle} img={item.img}/>))}
                </div>
        <div className="w-[500px]">
            <img className='w-[100%] h-[100%]' src="/images/dashboard_logo.svg"></img>
        </div>
        </div>
    </div>
  )
}

export default HomeDash