import React, { useState } from 'react'
import classes from './AppBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import {home} from '../../public/images/home.svg'
// import {arrow} from '../../public/images/home.svg'
// import {file} from '../../public/images/home.svg'
// import {user} from '../../public/images/home.svg'
// import {bell} from '../../public/images/home.svg'
// import {power} from '../../public/images/home.svg'

const source = [
  {id:'i1', img:'home', link:'dashboard'},
  {id:'i2', img:'arrow', link:'activities'},
  {id:'i3', img:'file', link:''},
  {id:'i4', img:'user', link:'details'},
  {id:'i5', img:'bell', link:''},
  {id:'i6', img:'power', link:''},
]
const AppBarComp = () => {
    const imgSrc = ['home', 'arrow', 'file','user','bell','power'] 
    const [activeItem, setActiveItem]  = useState('home')


    const clickHandler = (item) => {
      setActiveItem(item.id)
      // console.log(item)
      // const clickedItem = source.find(item => item.id === itemId)
      // console.log(clickedItem)
    }
    
    
  return (
    <div className='min-h-screen  flex flex-col shadow-xl pt-[1rem] w-[5rem]'>
            <div className='flex flex-col items-center justify-center  justify-between space-y-[3rem]'>
            <div className='w-1/4'>
            <img className='w-[100%] h-[100%]' src={`/images/vep.svg`}></img>
            <span className='text-2xs font-bold text-[#BF13BF] leading-6'>vep</span>
            </div>
            {source.map(item => (<div key={item.id} className='w-1/4' onClick={() => clickHandler(item)}>
            <Link   href={`/${item.link}`} ><Image style={{fill:'rebeccapurple'}}  className={` ${ activeItem === item.id ?  classes.state : '' } w-[100%] h-[100%] cursor-pointer hover:fill-slate-700 `} src={`/images/${item.img}.svg`} width="20" height="20"></Image></Link>
        </div>))}
            </div>
    </div>
  )
}

export default AppBarComp