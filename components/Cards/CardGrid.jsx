import React from 'react'
import Card from './Card'

const CardGrid = ({className , direction_col , children}) => {
  return (
    <div>
        <h1 className='font-bold text-4xl pt-[5rem] opacity-80'>Cards</h1>
    <div className={ `py-[2rem]   mb-[2rem] grid gap-10 ${!direction_col ?  'grid-cols-2' : 'grid-cols-1 mx-[5rem] my-[2rem] py-[2rem]'}  ${className}`}  >
        {children}
    </div>
    </div>
  )
}

export default CardGrid