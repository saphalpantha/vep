import React from 'react'


const data = {
    id:'i1',
    txId:'28282',
    date:'2002-2-20',
    paidto:'Harka',
    from:'Ramu',
    amt:2000,
    message:'hello world',
    status:'completed',
    Accname:'0x55557585885858458',
}


const DetailPage = (props) => {

    const {id, txId, date, paidto, from, amt, message,status,Accname} = data
  return (
    <div className='flex flex-col  pt-[2rem] mx-[5rem] px-[5rem] w-[100vw] '>
        <div className='flex justify-between'>
        <h1 className='font-semibold'>Activities</h1>
        <div className='flex justify-between justify-center space-x-10 items-center '>
                    <div className='flex space-x-2 w-[2rem] h-[2rem]'>
                        <img src="/images/help_ring.svg" className= 'z-10 w-[100%] h-[100%]'></img>
                <h1 className='text-[#BF13BF] font-light'>Help</h1>
                    </div>
                    <div>
                        <div className='flex space-x-2'>
                        <div className='w-[1.2rem] h-[1.2rem]'>
                        <img src="/images/copy.svg" className='w-[100%] h-[100%]'></img>
                        </div>
                <h1 className='text-[#BF13BF] font-light ' >Share</h1>
                        </div>

                    </div>
        </div>
        </div>

        <div className='flex justify-between  pt-[6rem] mt-[1rem]  border-b-[1px] border-slate-300 justify-center items-center  '>
                <div className='flex flex-col justify-between space-y-5 mb-[1rem]'>
            <div>Transaction ID : <span className='font-semibold'>{txId} </span></div>
                <span className='text-slate-400 font-light'>{date}</span>
                </div>
                {status === 'processing' && <div className='flex space-x-2'> <div className='w-1/4'>  <img className='w-[100%] h-[100%]' src={`/images/processing.svg`}/> </div> <span className={`font-bold text-yellow-400`}>Processing</span> </div>}
                {status === 'completed' && <div className='flex  space-x-2'> <div className='w-1/4'>  <img className='w-[100%] h-[100%]' src={`/images/success.svg`}/> </div>  <span className={`font-bold text-green-400`}>Completed</span> </div>}
                {status === 'failed' && <div className='flex space-x-2'> <div className='w-1/4'>  <img className='w-[100%] h-[100%]' src={`/images/failed.svg`}/> </div>  <span className={`font-bold text-red-600`}>Failed</span></div>}
        </div>

        <div className='flex justify-between border-b-[1px] mb-[2rem]  border-slate-300 mt-[1rem] '>
            <div className='flex flex-col space-y-5'>
                <h1 className='text-slate-500 font-light'>Paid to {paidto}</h1>
                <div className='flex space-x-2'>
                    <img className=' rounded-full mb-5' src="/images/user_img.svg"></img>
                    <h1 className='font-2xl'>{Accname}</h1>
                </div>
        </div>
            <div className='flex flex-col space-y-6'>
                <h1 className='text-slate-500 font-light'>From</h1>
                <div className='flex space-x-2 '>
                    <span>$</span>
                    <h1 className='font-2xl'>{from}</h1>
                </div>
            </div>
            <div className='flex flex-col space-y-5'>
                <h1 className='text-slate-500 font-light'>Amount Paid</h1>
                <div className='flex space-x-2'>
                    <span className='font-semibold'>$</span>
                    <h1 className='font-semibold'>{amt}</h1>
                </div>
            </div>
            
            </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-slate-500'>Message</h1>
            <h1 className='font-2xl'>{message}</h1>
        </div>
    </div>
  )
}

export default DetailPage