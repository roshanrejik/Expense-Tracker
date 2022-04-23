const transReducer=(state=JSON.parse(localStorage.getItem('ExpenseTraker'))||[],action)=>{
   switch(action.type){
       case 'ADD_TO_TRANS':{
           return [...state,{...action.payload}]
       }
       default: return state
   }
}
export default transReducer