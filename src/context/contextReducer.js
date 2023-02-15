const contextReducer=(state,action)=>{
let studentData;
 switch(action.type){
     case 'ADD_STUDENT':
         studentData=[action.payload,...state];
        localStorage.setItem('studentData',JSON.stringify(studentData));
         return studentData;
     case "DELETE_STUDENT":
         studentData=state.filter((s)=>s.id!==action.payload);
         localStorage.setItem('studentData',JSON.stringify(studentData));
         return studentData;
     case 'UPDATE_STUDENT':
         const update=[action.payload]
 
    studentData=state.map(obj => update.find(o => o.id === obj.id) || obj);
    localStorage.setItem('studentData',JSON.stringify(studentData));
    return studentData ;  

     default:
         return state;    
 }

}
export default contextReducer;


 