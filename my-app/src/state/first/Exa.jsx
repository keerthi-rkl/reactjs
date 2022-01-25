import React from "react";
class Exa extends React.Component{
    constructor(){
        super()
        this.message="login using your email id"
    }
    
    change=()=>{
        return( 
                <form> 
                     <h3><label>enter your email id:<input type="text"></input></label></h3> 
                     <h3><label>enter your password:<input type="password"></input></label></h3>
                 </form>
        ) 
    }
    render(){
        return <React.Fragment>
                    <h3>{this.message}</h3>
                    <button className="btn btn-warning" onClick={this.change()}>login</button>
               </React.Fragment>
    }
}
export default Exa;