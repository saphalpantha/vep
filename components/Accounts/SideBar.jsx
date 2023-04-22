import React, { use, useState } from 'react'
import Link from 'next/link'

const menus = [
    {id:'details', name:'My Details', img:'user_icon'},
    {id:'bank', name:'My BankAccounts', img:'bank_icon'},
    {id:'cards', name:'My-Cards', img:'card_icon'},
    {id:'i4', name:'Security', img:'security_icon'},
    {id:'i5', name:'Security', img:'security_icon'},
    {id:'i6', name:'Help', img:'help_icon'},
    
    {id:'i7', name:'Legals', img:'legals_icon'},
    {id:'i8', name:'About Vep', img:'about_icon'},
]

const SideBar = () => {
    const [selected, setSelected] = useState('details');

    const clickHandler = (item) => {
        console.log(item
        )
        setSelected(item.id)
    }

  return (
    <div className='flex px-[2rem]'>
    <div className='flex flex-col space-y-5 pt-[1rem]'>
        <div className='flex flex-col space-y-2'>
            <div className='w-1/4'>
                <img className='w-[100%] h-[100%] rounded-full' src="/images/user_img.svg"></img>
            </div>
            <h1 className='font-semibold'>Abhijeet Mohapatra</h1>
            <h1 className='font-xl'>@abhijeeeeeeet</h1>
            <hr className=''></hr>
        </div>
        <div className='flex flex-col justify-between space-y-5'>
            {
                menus.map(item => {
                    return(
                        <Link href={`/${item.id}`}>
                        <div onClick={() => clickHandler(item)} key={item.id} className={`${item.id === selected ?  'bg-[#DBD3EB80] rounded-2xl transition-all duration-200' : 'bg-transparent'} w-[226px] h-[48px] flex space-x-2 items-center px-2 ${item.id === 'i6' && 'mb-[2rem]'}`}>
                            <div className='w-1/8'>
                            <img  className='w-[100%] h-[100%]'  src={`/images/icons-sidebar/${item.img}.svg`} alt=""></img>
                            </div>
                            <span className={`text-slate-700 ${item.id === selected ? 'font-semibold text-[2xl' : 'font-light'}`} >{item.name}</span>
                        </div>
                         { item.id ==='i6' &&  <hr></hr>}
                        </Link>
                    )
                })
            }
        </div>
    </div>
                <div className='ml-[2rem] w-[1px] h-[40rem] bg-slate-200 my-auto '></div>
                </div>
  )
}

export default SideBar








