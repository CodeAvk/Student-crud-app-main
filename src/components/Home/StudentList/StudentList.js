import React  from 'react'
import {useGlobalContext} from '../../../context/context'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import {Delete,Edit,AccountCircle} from '@material-ui/icons'
import useStyles from './style'
import './StudentList.css'
import { Link } from 'react-router-dom'
const StudentList = () => {
  
   
    const classes=useStyles();
    const {studentData,deleteStudent,EditFunction}=useGlobalContext();
    // console.log(studentData)

 
  
   


    return (
        <MUIList dense={false} className={classes.list} >
   {
       studentData.map((item)=>(
       
     <Slide key={item.id} direction='down' in mountOnEnter unmountOnExit className='single_Item' >
            
                     <ListItem  >
                     <Link to={`/detail/${item.id}`}> 
                         <ListItemAvatar >
                             <Avatar className={Boolean(Math.round(Math.random()))?classes.avatarGreen:classes.avatarRed}>
                           <AccountCircle/>
                             </Avatar  >
                         </ListItemAvatar>
 </Link>
 <Link to={`/detail/${item.id}`}><ListItemText primary={item.name} secondary={item.roll_no}  /></Link>
                         <ListItemSecondaryAction>
                             <IconButton edge='end' aria-label='delete' onClick={()=>deleteStudent(item.id)} >
                               <Delete/>
                             </IconButton>
                             <IconButton edge='end' aria-label='edit' onClick={()=>EditFunction(item.id)} >
                             <Edit/>
                             </IconButton>
                         </ListItemSecondaryAction>

                         
                     </ListItem>
                     </Slide>
                  
       ))
   }
        </MUIList>

       
    )
}

export default StudentList
