import React from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { useGlobalContext } from '../../context/context' 
import useStyles from './style'
 
const Alert= () => {
 
 const {closeAlert,alert} =useGlobalContext();
 
    const classes=useStyles();
    return (
      <div className={classes.root}>
<Snackbar
 anchorOrigin={{vertical:'top',horizontal:'right'}}
open={alert.show}
autoHideDuration={3000}
onClose={closeAlert}
>
<MuiAlert
   onClose={closeAlert} 
   severity={`${alert.type}`}
   elevation={6}
   variant='filled'
>
{alert.msg}
</MuiAlert>
</Snackbar>
      </div>
    )
}

export default Alert