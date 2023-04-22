import React from 'react'

const Card = ({isGrayed, isDefault}, props) => {

  // const isGrayed = true
  // const isDefault = false
  return (
    <div  className='relative cursor-pointer' onClick={props.onClickHandler}>
          <div className={` relative m-1 z-2  rounded-[1.5rem] w-[25rem]   ${isDefault && 'border-green-500 border border-[0.3rem]' } `}>
          {/**/}
          { isGrayed ?  <img className='z-1 w-[100%] h-[100%]'  src="/images/single_card_gray.svg"></img> :  <img className='z-1 w-[100%] h-[100%]'  src="/images/single_card.svg"></img>  }

            <div className={`flex absolute ${ !isGrayed ?  'top-5 left-5' : 'top-10 left-10'} `}>
              <img className='' src="/images/card_chipset.svg" />
            </div>
            <div className={`absolute  ${ !isGrayed ?  'top-5 right-5' : 'top-10 right-10'}  `}>
              <img className='' src="/images/master_card.svg" />
            </div>
            <div className={`absolute   ${ !isGrayed ?  'bottom-5 left-5' : ' bottom-10 left-10' } text-white flex flex-col space-y-1`}>
                <h1 className='italic font-light text-[0.6rem]  '>Card holder name</h1>
                <h1 className='font-bold max-w-[13rem] text-[0.8rem]'>Vickram Vijay Prasad Pati</h1>
            </div>
            <div className={`absolute  max-w-sm ${!isGrayed ? 'bottom-5 right-5' : 'bottom-10 right-10'} text-white flex flex-col space-y-1`}>
            <h1 className='italic font-light text-[0.6rem]  '>Expiry date</h1>
                <h1 className='max-w-[13rem] text-[0.8rem]'>1/20</h1>
            </div>
          <h1 className={`absolute ${ !isGrayed  ?  'top-[5rem] left-[2rem]' : 'top-[7rem] left-[4rem]'} font-bold text-white text-2xl `}>**** **** **** 2368</h1>
          </div>
         { isDefault &&  <div className='w-[8rem] h-[1.5rem] bg-green-500 rounded-b-[2rem] text-center font-bold  font-2xl text-white absolute bottom-[-1.3rem] z-[-1] right-[1.5rem]'>Default</div>}
    </div>
  )
}

export default Card