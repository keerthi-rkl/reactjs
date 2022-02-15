import {BAL,WITH} from "./Action"
const initialState={
    msg:"choose your action"
}
let Reducer=(state=initialState,action)=>{
   
  switch(action.type){
      case BAL:
          return{msg:"your balance is RS.50000"}
     case WITH:
         return{msg:"enter amount RS.________"}
     default:
         return state;
  }
}
export {Reducer}