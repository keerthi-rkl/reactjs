import React from "react"
class One extends React.Component{
    state={
        no:1
    }
    incr=()=>{
         this.setState({no:this.state.no+1})
    }
    decr=()=>{
        this.setState({no:this.state.no-1})
    }
    render(){
        return <>
                
                <h1>{this.state.no}</h1>
                <button onClick={this.incr} className="btn btn-success">+</button>
                <button onClick={this.decr} className="btn btn-primary">-</button>
                </>
    }
}
export default One;