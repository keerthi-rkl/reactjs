import React from "react";
import {useDispatch,useSelector} from "react-redux"
import { decreAction, increAction } from "../reduxEX2/Counter/Caction";

let Counter=()=>{
    let ok=useDispatch()
    let Count=useSelector((state)=>{return state.count})
    let increhandler=()=>{
         ok(increAction())
    }
    let decrehandler=()=>{
        ok(decreAction())
    }
return<>
 <div className="container">
     <div className="row">
         <div className="col-md-4">
             <div className="card">
                 <div className="card-header bg-success text-dark">
                     <h3>Counter</h3>
                 </div>
                 <div className="card-body">
                    <pre>{JSON.stringify(Count)}</pre>
                     <h3>countervalue:{Count.count}</h3>
                     <button className="fa fa-plus-circle" onClick={increhandler}></button>
                     <button className="fa fa-minus-circle" onClick={decrehandler}></button>
                 </div>
             </div>
         </div>
     </div>
 </div>
</>
}
export default Counter