import React from "react";
class Real extends React.Component{
    state={
        message:"apply for system engineer/TCS recuirement 2022"
        
    }
    one=()=>{
        alert("please go through the link provided")
    }
    two=()=>{
        alert("you are not eligible for this job")
    }
    render(){
        return <>
                <h1>{this.state.message}</h1> 
                
                <h3>select your stream</h3>
                <button className="btn btn-success" onClick="one()">bsc</button>
                <button  className="btn btn-warning" onClick="two()" >bcom</button>

               </>
    }
}
export default Real;