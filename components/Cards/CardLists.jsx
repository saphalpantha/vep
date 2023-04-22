import React, { useState } from 'react'
import CardGrid from './CardGrid'
import Card from './Card'
import Link from 'next/link'
const data = [
{id:'i1', isDefault:false, isGrayed:false},
{id:'i2', isDefault:false, isGrayed:false},
{id:'i3', isDefault:false, isGrayed:true},
]
const CardLists = ({direction_col, className}) => {

    // const direction_col = false

    const [cards , setCards] = useState(data);
    const settoDefault = (item) => {
        const updatedData = data.map((i) =>
          i.id === item.id ? { ...i, isDefault: !i.isDefault } : i
        );
        console.log(updatedData)
        setCards(updatedData);
      };
  return (
    <div>
        <CardGrid  direction_col={direction_col} className={className} >
                {/* <Card /> */}
            {cards.map(item => <div  key={item.id} onClick={() => settoDefault(item) }  > <Card  isGrayed={item.isGrayed} isDefault={item.isDefault ? item.isDefault : false}  />  </div>)}
{        !direction_col   &&    <Link href="/cards/link-card" > <div className='w-[22rem] ml-[2.5rem] mt-[1rem] flex justify-center h-[14rem] shadow-md items-center border-dashed border border-slate-300 border-[0.1rem] rounded-3xl opacity-90 '>
                <div className='w-1/8 flex flex-col space-y-2'>
                    <img className='w-[100%] h-[100%]'  src="/images/plus_icon.svg"/>
                    <h1 className='text-[#BF13BF] font-2xl font-semibold'>Link a Card</h1>
                </div>
            </div> </Link>}
        </CardGrid>
    </div>
  )
}

export default CardLists