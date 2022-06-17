import React from 'react'
import { useSelector} from 'react-redux'


export default function Home() {
 
  const data1 = useSelector((store)=> store.data);
  // console.log(data1);
  // console.log(data1.user.last_name);
  // console.log(data1.user.first_name);
  return (
<>
 <div>
 <div>Home</div>



 <div>
<p>{
  data1.user.last_name ? <>{data1.user.first_name} {data1.user.last_name}</>  : <>no</>
}</p>
 </div>
 </div>
   
    </>
  )
  
}
