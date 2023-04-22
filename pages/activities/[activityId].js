import React, { Fragment } from 'react'
import DetailPage from '../../components/Activities/DetailPage'
import { useRouter } from 'next/router';


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


const DetailActivityPage = () => {
  
  const router = useRouter();
  const {id} = router.query;
  const items = data.find((item) => item.id == id);
  console.log(id)
  console.log('detail page',items)
  return (
        <Fragment>
                <DetailPage />
        </Fragment>
  )
}

export default DetailActivityPage



