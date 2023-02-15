import { Button } from '@material-ui/core';
import React from 'react'
import {Link,useParams} from 'react-router-dom'
import {useGlobalContext} from '../../context/context'
import './Details.css'
const Detail = () => {
const {studentData}=useGlobalContext();
    const {id}=useParams();
   const data=studentData.find((s)=>s.id===id);
//    console.log(data);
    return (
        <div className='detail_container'>
            <Link to='/' >
            <Button variant='contained'   style={{marginTop:"35px",marginLeft:"35px",background:'#c66b3d',color:'white',fontWeight:'bold'}} >Go back</Button>
            </Link>
   <h2 className='heading'>Student Detail</h2>
          <div className='detail'>
           <h3 className='h3'><span>Name: </span>{data.name}</h3>
           <h3 className='h3'><span>Roll No: </span>{data.roll_no}</h3>
           <h3 className=' h3 email'><span>Email: </span>{data.email}</h3>
           <h3 className='h3'><span>Number: </span>{data.contact}</h3>
           <h3 className='h3'><span>Address: </span>{data.address}</h3>
          </div>
        </div>
    )
}

export default Detail
