import React from "react"
import { useState } from "react"
let Login=()=>{
let [values,setform]=useState({fullname:"",phone:"",email:"",password:""})
let submithandle=(event)=>{
    event.preventDefault();
    console.log(values)
}

return<>
<pre>{JSON.stringify(values)}</pre>
 <div className="container">
     <div className="row">
         <div className="col-md-6">
             <div className="card">
                 <div className="card-header bg-dark text-primary">
                     <h3>LOGIN FORM</h3>
                 </div>
                 <div className="card-body">
                     <form onSubmit={submithandle}>
                         <div className="form-group">
                             <input type="text" placeholder="Enter your fullname"  className="form-control" onChange={(event)=>{setform({...values,fullname:event.target.value})}} />
                         </div><br></br>
                         <div className="form-group">
                             <input type="number" placeholder="Enter your phone"  className="form-control" onChange={(event)=>{setform({...values,phone:event.target.value})}} />
                         </div><br></br>
                         <div className="form-group">
                             <input type="email" placeholder="Enter your email"   className="form-control" onChange={(event)=>{setform({...values,email:event.target.value})}} />
                         </div><br></br>
                         <div className="form-group">
                             <input type="password" placeholder="Enter your password" className="form-control" onChange={(event)=>{{setform({...values,password:event.target.value})}}} />
                         </div><br></br>
                         <button type="submit" value="submit" className="btn btn-warning">SUBMIT</button>
                     </form>
                 </div>
             </div>
         </div>
     </div>
 </div>
</>
}
export default Login