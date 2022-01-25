import React, { Fragment } from "react";
class Pro extends React.Component{
    state={
        message:"HELLO GOOD MORNING"
    }
    change=()=>{
        this.setState({message:"HOW CAN I HELP YOU"})
    }
    render(){
        return <Fragment>
                 <h2>{this.state.message}</h2>
                 <button  onClick={this.change} className="btn btn-success">change</button>
               </Fragment>
    }
} 
export default Pro;