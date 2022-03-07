import React from "react"
import { useState } from "react"
let One=()=>{
 let [msg,setmsg]=useState("Hello.welcome")
 return<>
      <div className="container">
           <div className="row">
                <div className="col-md-4">
                     <div className="card">
                          <div className="card-header bg-danger">
                               <h2>MESSAGE</h2>
                          </div>
                          <div className="card-body">
                               <h2>Message:{msg}</h2>
                               <button className="btn btn-info" onClick={()=>{setmsg("GOOD MORNING")}}>M</button>
                               <button className="btn btn-secondary" onClick={()=>{setmsg("GOOD AFTERNOON")}}>A</button>
                               <button className="btn btn-success"onClick={()=>{setmsg("GOOD EVENING")}}>E</button>
                               <button className="btn btn-warning mr-2"onClick={()=>{setmsg("GOOD NIGHT")}}>N</button>
                          </div>
                     </div>
                </div>
           </div>
      </div>
 </>
}
export default One