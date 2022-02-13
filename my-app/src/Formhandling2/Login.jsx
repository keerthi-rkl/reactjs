import React from "react";
class Login extends React.Component{
    state={
        fullname:"",
        phone:"",
        email:"",
        password:""
    }
    updatehandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submithandler=(event)=>{
      event.preventDefault();
      console.log(this.state)
    }
render(){
    return<>
    <pre>{JSON.stringify(this.state)}</pre>
       <div className="container">
           <div className="row">
               <div className="col-md-4">
                   <div className="card">
                       <div className="card-header bg-dark text-primary">
                           <h3>LoginForm</h3>
                       </div>
                       <div className="card-body bg-secondary">
                           <form onSubmit={this.submithandler}>
                               <div className="form-group">
                                 <input type="text" placeholder="Enter Your full name" className="form-control " onChange={this.updatehandler} name="fullname"/><br></br><br></br>
                               </div>
                              <div className="form-group">
                               <input type="number" placeholder="Enter Your mobile number" className="form-control" onChange={this.updatehandler} name="phone"/><br></br><br></br>
                              </div>
                              <div className="form-group">
                                 <input type="email" placeholder="Enter Your email number"className="form-control"onChange={this.updatehandler} name="email"/><br></br><br></br>
                              </div>
                               <div className="form-group">
                               <input type="password" placeholder="Enter yourpassword" className="form-control"onChange={this.updatehandler} name="password"/><br></br><br></br>
                               </div>
                               <button type="submit" className="btn btn-danger">Submit</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </>
}
}
export default Login