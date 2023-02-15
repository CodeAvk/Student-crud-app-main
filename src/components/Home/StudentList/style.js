  
import { makeStyles } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

export default makeStyles((theme)=>({
   avatarGreen:{
       color:'#fff',
       backgroundColor:green[500],
       cursor:'pointer'
   },
   avatarRed:{
       color:theme.palette.getContrastText(red[500]),
       backgroundColor:red[500],
       cursor:'pointer'
   },
   list:{
       maxHeight:'300px',
       overflow:'auto',
       width:'70%',
       margin:'20px auto',
       [theme.breakpoints.down('sm')]:{
           width:'100%'
       }
       
   },

}))