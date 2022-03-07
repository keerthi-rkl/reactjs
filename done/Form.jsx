import React from "react"
class Form extends React.Component{
    state={
        fullname:"",
        mobile_number:"",
        email:"",
        password:""
    }
    updatehandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submithandler=(event)=>{
        console.log(this.state)
        event.preventDefault();
    }
    render(){
        return<>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                   <div className="card bg-secondary text-info">
                      <div className="card-header bg-dark text-primary">
                          <h2>REGISTRATION FORM</h2>
                        </div>
                        <form onSubmit={this.submithandler}>
                           <div className="form-group">
                            <input placeholder="enter your full name" type="text" className="mt-4 form-control " onChange={this.updatehandler} name="fullname" /><br></br>
                            </div> 
                            <div className="form-group">
                            <input placeholder="enter your phone number" type="number" className="mt-4 form-control" onChange={this.updatehandler} name="mobile_number"/><br></br>
                            </div> 
                            <div className="form-group">
                            <input placeholder="enter your email" type="email" className="mt-4 form-control " onChange={this.updatehandler} name="email"/><br></br>
                            </div>
                            <div className="form-group">
                            <input placeholder="enter your password" type="password" className="mt-4 form-control" onChange={this.updatehandler} name="password"/><br></br>
                            </div>
                            <input type="submit" className="mt-4 bg-success"/>
                            
                        </form>
                    </div>
                 </div>
            </div>
        </div>
        </>
    }
}
export default Form