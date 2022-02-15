const IN="IN"
const DE="DE"
let increAction=()=>{
  return{type:IN}  
}
let decreAction=()=>{
    return{type:DE}
}
export {increAction,decreAction,IN,DE}