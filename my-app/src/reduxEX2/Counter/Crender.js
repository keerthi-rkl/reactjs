import {IN,DE} from "./Caction"
const initialstate={
    count:1
}
let Crender=(state=initialstate,action)=>{
     switch(action.type){
         case IN:
             return{count:state.count+1}
         case DE:
             return{count:state.count-1} 
            default:
                return state;    
     }
}
export  {Crender};