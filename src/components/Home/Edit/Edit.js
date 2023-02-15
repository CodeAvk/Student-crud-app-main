import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import './Edit.css'
 
import { useGlobalContext } from '../../../context/context';
import { Grid, FormControl, TextField, Typography,Button } from '@material-ui/core'
const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
}));

export default function Edit() {
  const classes = useStyles();
 const {handleClose,open,selectedData,updateStudent} =useGlobalContext();


 const [formData,setFormData]=useState(selectedData);
useEffect(() => {
 setFormData(selectedData)
}, [selectedData])


const updatedData=()=>{
  // console.log(formData);
  updateStudent(formData);
  handleClose();
}


  return (
    <div >
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
         <div className='edit_container'>
         <Grid container spacing={2} >
                <Grid item xs={12} >
                    <Typography variant='h5' align='center' >Edit student here</Typography>
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
               
             
            </Grid>
            <div className='button-container'>
      <Button variant='contained' color='primary' onClick={handleClose} >Back</Button>
      <Button variant='contained' color='primary' onClick={updatedData} >Save</Button>
               </div>
         </div>
      </Modal>
    </div>
  );
}
