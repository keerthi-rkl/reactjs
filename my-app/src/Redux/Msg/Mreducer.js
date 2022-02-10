import { GM ,GN} from "./Maction"
const intialstate={msg:"hello"};
let Mreducer=(state=intialstate,action)=>{
       switch(action.type){
           case GM:
               return{msg:"good Morning"}
            case GN:
                return{msg:"good night"}
            default :
            return state;
       }
}
export default Mreducer