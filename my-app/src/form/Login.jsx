import React from "react"
class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    emailChangeholder=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordChangeholder=(event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        return <>
                 <form onSubmit={this.submitHandler}>
                    <label>email</label>
                    <input type="email" onChange={this.emailChangeholder} placeholder="kggcvh"/><br></br><br></br>
                    <label>password</label>
                    <input type="password" onChange={this.passwordChangeholder} placeholder="jkhg" /><br></br><br></br>
                    <input type="submit"/>
                </form>
               
               </>
    }
}

export default Login;