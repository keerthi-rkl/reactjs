import React from "react"
import {useDispatch,useSelector} from "react-redux"
import {gmaction,gnaction} from "../Redux/Msg/Maction"
let Message=()=>{
    let dispatch=useDispatch()
    let message=useSelector((state)=>{return state})
    let gmhandler=()=>{
        dispatch(gmaction())
    }
    let gnhandler=()=>{
        dispatch(gnaction())
    }
    let msg="hi we are bts"
    return<>
    
       <pre>{JSON.stringify(msg)}</pre>
       <div className="container mt-4">
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          <h3 className="bg-warning text-white">MESSAGE</h3>
          <h4>{message.msg}</h4>
        </div>
        <div className="card-body">
            <button className="btn btn-info mr-4" onClick={gmhandler}>GM</button>
            <button className="btn btn-secondary" onClick={gnhandler}>GN</button>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
}
export default Message