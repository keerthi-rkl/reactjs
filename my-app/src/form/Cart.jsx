import React from "react"
class Cart extends React.Component{
    state={
        email:"",
        password:""
    }
    updatehandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submithandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        return <>
               <form onSubmit={this.submithandler}>
                   <input type="text" placeholder="enter your email id" onChange={this.updatehandler} name="email"/><br></br><br></br>
                   <input type="password" placeholder="enter your password" onChange={this.updatehandler} name="password"/><br></br><br></br>
                   <input type="submit"/> 
               </form>
              </>
    }
}
export default Cart;