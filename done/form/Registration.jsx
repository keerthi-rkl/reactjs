import React from "react";
class Registartion extends React.Component{
    state={
        first_name:"",
        last_name:"",
        email:"",
        password:"",

    }
    updatehandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submithandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        return<>
               <div className="container">
    <pre>{JSON.stringify(this.state)}</pre>
                   <div className="row">
                       <div className="col-md-4">
                           <form onSubmit={this.submithandler}>
                               <div className="form-group">
                                   <input type="text" className="form-control" onChange={this.updatehandler} name="first_name" placeholder="enter your first name"/>
                               </div>
                               <div className="form-group">
                                   <input type="text"  className="form-control" onChange={this.updatehandler} name="last_name" placeholder="enter your last name"/>
                               </div>
                               <div className="form-group">
                                   <input type="email" className="form-control" onChange={this.updatehandler} name="email" placeholder="enter your email"/>
                               </div>
                               <div className="form-group">
                                   <input type="password" className="form-control" onChange={this.updatehandler} name="password" placeholder="enter your password"/>
                               </div>
                               <button className="btn btn-info mr-6">submit</button>
                           </form>
                       </div>
                   </div>
               </div>
             </>
    }
}
export default Registartion