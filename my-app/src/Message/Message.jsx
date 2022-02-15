import React from "react"
import { useDispatch,useSelector } from "react-redux"
import {bAction,wAction}  from "../reduxEX2/Message/Action"
let Message=()=>{
    const dispatch=useDispatch();
    let message=useSelector((state)=>{return state.msg})
    let b_handler=()=>{
           dispatch(bAction())
    }
    let w_handler=()=>{
           dispatch(wAction())
    }
return<>
 <div className="container">
     <div className="row">
         <div className="col-md-5">
             <div className="card">
                 <div className="card-header bg-dark text-primary">
                     <h3>MESSAGE</h3>
                 </div>
                 <div className="card-body">
                     <pre>{JSON.stringify(message)}</pre>
                     <h3>message:{message.msg}</h3>
                     <button className="btn btn-info" onClick={b_handler}>check balance</button>
                     <button className="btn btn-danger" onClick={w_handler}>withdraw amount</button>
                 </div>
             </div>
         </div>
     </div>
 </div>
</>
}
export default Message