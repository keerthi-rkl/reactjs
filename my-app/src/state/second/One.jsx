import React from "react"
class One extends React.Component{
   state={quantity:1}
   incr=()=>{
       this.setState({quantity:this.state.quantity+1})
   } 
   decre=()=>{
    this.setState({quantity:this.state.quantity-1})
} 
    render(){
        return <>
                <h2>quantity:{this.state.quantity}</h2>
                <button onClick={this.incr}>incre</button>
                <button onClick={this.decre}>decre</button>
               </>
    }
}
export default One;