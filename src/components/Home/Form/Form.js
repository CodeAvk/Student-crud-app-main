import React, { useState } from 'react'
import { Grid, FormControl, TextField, Typography,Button } from '@material-ui/core'
import './Form.css'
import {v4 as uuidv4} from 'uuid'
import { useGlobalContext } from '../../../context/context'
 
const initialState={
    name:"",
    roll_no:'',
    email:"",
    address:"",
    contact:''
}
const Form = () => {
    const {addStudent,showAlert,checkValid } =useGlobalContext();
  const [formData,setFormData]=useState(initialState);

  const addStudentData=()=>{
      if(formData.contact.length!==10 || formData.name==='' || formData.roll_no==='' || formData.address==="" || !formData.email.endsWith('@gmail.com')) {
         showAlert(true,"Invalid Data","error");
        return;
      }
      if(checkValid(formData.roll_no)) {
        showAlert(true,"This roll number is alerady used","error");
        return;
      } 
    
     const studentData={...formData,roll_no:Number(formData.roll_no),contact:Number(formData.contact),id:uuidv4()}
// console.log(studentData)
     addStudent(studentData);
     setFormData(initialState);
     
  }
       

    return (
        <div className='form-container'>
            
            <Grid container spacing={2} >
                <Grid item xs={12} >
                    <Typography variant='h5' align='center' >Add student here</Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField type='text' label='Name' value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField type='number' label='Roll No.' value={formData.roll_no} onChange={(e)=>setFormData({...formData,roll_no:e.target.value})} />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField type='text' label='Email' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField type='text' label='Address' value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})} />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField type='Number' label='Contact No.' value={formData.contact} onChange={(e)=>setFormData({...formData,contact:e.target.value})} />
                    </FormControl>
                </Grid>
                <Button color='primary' variant='outlined' style={{fontWeight:'bold',margin:'20px auto',width:'95%'}} onClick={addStudentData} >Add Student</Button>
            </Grid>
        </div>
    )
}

export default Form
