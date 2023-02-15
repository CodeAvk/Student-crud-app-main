import React,{useContext,createContext,useReducer,useState} from 'react'
import contextReducer from './contextReducer';
const initialState=JSON.parse(localStorage.getItem('studentData'))||[];

export const AppContext=createContext(initialState);


export const AppProvider=({children})=>{
const [studentData,dispatch]=useReducer(contextReducer,initialState);
const [open,setOpen]=useState(false);
const [alert,setAlert]=useState({show:false,msg:'',type:'info'})
 
const checkValid=(roll_no)=>{
    let found=false;
    // console.log(Number(roll_no))
  for(let i=0;i<studentData.length;i++){
      
      if(studentData[i].roll_no===Number(roll_no)){
          
          found=true;
          break;
      }
  }
  
  return found;
}

const showAlert=(show=false,msg="",type='info')=>{
    setAlert({show,msg,type});
}

const closeAlert=()=>{
    showAlert(false,"","info");
}
const [selectedData,setSelectedData]=useState({
     
    name:"",
    roll_no:'',
    email:'',
    contact:'',
    address:''
})
const EditFunction=(sid)=>{
    setOpen(true);
    const data=studentData.find((s)=>s.id===sid);
     const {id,name,roll_no,email,contact,address}=data;
     setSelectedData({id:id,name:name,roll_no:roll_no,email:email,contact:contact,address:address});
     
}
const handleClose=()=>{
    setOpen(false);
}

    const addStudent=(studentData)=>{
         
        dispatch({type:'ADD_STUDENT',payload:studentData});
        showAlert(true,"Added Successfully","success")
       
    }
    const deleteStudent=(id)=>{
        dispatch({type:'DELETE_STUDENT',payload:id});
        showAlert(true,"Deleted Successfully","warning")
       } 
   const updateStudent=(studentData)=>{
         dispatch({type:'UPDATE_STUDENT',payload:studentData});
         showAlert(true,"Updated Successfully","success");
   }

  
   return <AppContext.Provider value={{addStudent,deleteStudent,studentData,open,handleClose,EditFunction,checkValid,selectedData,updateStudent,closeAlert,showAlert,alert }}>
         {children}
   </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
