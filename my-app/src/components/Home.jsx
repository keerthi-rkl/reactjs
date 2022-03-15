import React,{useState} from "react"
let Home=()=>{
    let [details,setdetails]=useState({
        firstname:"",
        lastname:"",
        mobilenumber:"",
        gender:"",
        email:"",
        password:""
    })
 let   updatehandler=(event)=>{
        setdetails({...details,[event.target.name]:event.target.value})
    }
    let submithandler=(event)=>{
        event.preventDefault(event)
        console.log(details)
    }
return<>
<pre>{JSON.stringify(details)}</pre>
<div className="container mt-4">
    <div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header bg-primary">
                    <h2>REGISTRATION FORM</h2>
                    </div>
                    <div className="card-body bg-secondary">
                        <form onSubmit={submithandler}>
                            <div className="form-group">
                               <label className="h5">Enter your first name</label>
                               <input type="text" className="form-control" name="firstname" onChange={updatehandler}/>

                            </div>
                            <div className="form-group">
                               <label className="h5">Enter your last name</label>
                               <input type="text" className="form-control" name="lastname" onChange={updatehandler}/>

                            </div>
                            <div className="form-group">
                               <label className="h5">Enter your mobile number</label>
                               <input type="number" className="form-control" name="mobilenumber" onChange={updatehandler}/>

                            </div>
                            
                            <div>
                                <label className="h5">Gender</label>
                            <input type="text"  list="cityname"  name="gender" onChange={updatehandler}/>
                                <datalist id="cityname"  >
                                       <option value="Male" />
                                       <option value="Female" />
                                       <option value="others" />
                                 </datalist>
                            </div>
                                 
                            
                            
                            <div className="form-group">
                               <label className="h5">Enter your email</label>
                               <input type="email" className="form-control" name="email" onChange={updatehandler}/>

                            </div>
                            <div className="form-group">
                               <label className="h5">Enter your password</label>
                               <input type="password" className="form-control" name="password" onChange={updatehandler}/>

                            </div>
                            <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                     <div className="input-group-text">
                                       <input type="checkbox" aria-label="Checkbox for following text input"/>

                                       <h5 className=" h5 mr-4">   I Am Not a robot</h5>
                                           </div>
                                    </div>
                                    </div>
                                    
 

                            <button className="btn btn-success ">Register</button>
                        </form>

                    
                    </div></div></div></div></div>
</>

}
export default Home