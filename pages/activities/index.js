import React, { Fragment } from 'react'
import Activity from '../../components/Activities/Activity'
import { useRouter } from 'next/router'



const data = [
  {
    id:'i1',
    txId:'28282',
    date:'2002-2-20',
    paidto:'Paid to Sai Swarup',
    from:'Ramu',
    amt:2000,
    message:'hello world',
    status:'completed',
    sucess:true,
    img:'user_img',
    Accname:'0x55557585885858458',
},
{
  id:'i2',
  txId:'28282',
  date:'2002-2-20',
  paidto:'Paid to Sai Swarup',
  from:'Ramu',
  amt:2000,
  message:'hello world',
  status:'completed',
  sucess:true,
  img:'user_img',
  Accname:'0x55557585885858458',
},
{
  id:'i3',
  txId:'28282',
  date:'2002-2-20',
  paidto:'Paid to Sai Swarup',
  from:'Ramu',
  amt:2000,
  message:'hello world',
  status:'completed',
  sucess:true,
  img:'user_img',
  Accname:'0x55557585885858458',
},
{
  id:'i4',
  txId:'28282',
  date:'2002-2-20',
  paidto:'Paid to Sai Swarup',
  from:'Ramu',
  amt:2000,
  message:'hello world',
  status:'completed',
  sucess:true,
  img:'user_img',
  Accname:'0x55557585885858458',
}
  ]


//   const hello = {
//     id:'i1',
//     txId:'28282',
//     date:'2002-2-20',
//     paidto:'Paid to Sai Swarup',
//     from:'Ramu',
//     amt:2000,
//     message:'hello world',
//     status:'completed',
//     sucess:true,
//     img:'user_img',
//     Accname:'0x55557585885858458',
// }

const Activities = () => {

    const router = useRouter();
    const id = router.query.activityId;
    console.log(id)
      return (
        <Fragment>
            <Activity data={data} />
        </Fragment>
    )
}

export default Activities