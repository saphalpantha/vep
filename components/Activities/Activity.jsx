import React from 'react'
import Link from 'next/link'
const Activity = (props) => {

  
  // const hello = [
  //   {
  //     id:'i1',
  //     txId:'28282',
  //     date:'2002-2-20',
  //     paidto:'Paid to Sai Swarup',
  //     from:'Ramu',
  //     amount:2000,
  //     message:'hello world',
  //     status:'completed',
  //     sucess:true,
  //     img:'user_img',
  //     Accname:'0x55557585885858458',
  // },
  // ]

    // const data = [
    //     {id:'i1', img:'user_img', from_to:'Paid to Sai Swarup' , date:'12:00 PM' , account:'From ******9876' , amount:900, sucess:true},
    //     {id:'i2', img:'user_img', from_to:'Paid to Sai Swarup' , date:'12:00 PM' , account:'' , amount:900, sucess:false},
    //     {id:'i3', img:'user_img', from_to:'Paid to Sai Swarup' , date:'12:00 PM' , account:'' , amount:900, sucess:true},
    //     {id:'i4', img:'user_img', from_to:'Paid to Sai Swarup' , date:'12:00 PM' , account:'' , amount:900, sucess:false},
    //     {id:'i5', img:'user_img', from_to:'Paid to Sai Swarup' , date:'12:00 PM' , account:'' , amount:900, sucess:true},

    // ]


    
  return (
    <div className='container max-w-6xl md:max-w-full flex flex-col mx-[5rem]'>
        <h1 className='mt-[1rem] mb-[1rem]'>Activities</h1>
        <div className='flex flex justify-between mx-[2rem]'>
            <span className='tracking-wide text-slate-500 font-light'>From/To</span>
            <span className='tracking-wide text-slate-500 font-light ml-[4rem] pl-[5rem]'>Time & Date</span>
            <span className='tracking-wide text-slate-500 font-light'>Account</span>
            <span className='tracking-wide text-slate-500 font-light'>Amount</span>
        </div>
        <div className='pt-5 pb-5'>
            
{     props.data?.map(item => (
        <Link href={`/activities/${item.id}`}>
        <div className='flex justify-between p-3 border-b-[1px] border-[#DADADA] space-y-[3rem] items-center justify-center'>
                <div className='w-[3rem] h-[3rem]'>
                    <img className='w-[100%] h-[100%] rounded-full'  src={`/images/${item.img}.svg`}></img>
                </div>
                
                <h1 className='text-xl font-semibold'>{item.from}</h1>
                <h1 className='text-xl font-light tracking-wide w-[142px]'>{item.date}</h1>
                <h1 className='text-xl font-semibold w-[142px]'>{item.Accname}</h1>
                <h1 className={`text-xl tracking-wider font-bold w-[142px] ${item.sucess && 'text-green-500'}` }>{`$${item.amt}`}</h1>
        </div>
        </Link>
))}
        </div>



    </div>
  )
}

export default Activity