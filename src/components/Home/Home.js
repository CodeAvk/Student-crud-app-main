import React from 'react'
import './Home.css'
import Form from './Form/Form'
import StudentList from './StudentList/StudentList'
import Edit from './Edit/Edit'
import Alert from '../Alert/Alert'
 

const Home = () => {
   
    return (
        <div className='homePage'>
          <Alert/>
         <Form/>
          <StudentList/>
           <Edit/>
        </div>
    )
}

export default Home
