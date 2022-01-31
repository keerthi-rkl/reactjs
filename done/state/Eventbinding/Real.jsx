import React  from "react";
class Real extends React.Component{
    constructor(props){
        super(props);
        this.state={greet:"Hello welcome to Mc Donals"}
    }
    change(msg){
        this.setState({greet:msg})
    }
    render(){
        return <>
                 <h1 className="text-warning">{this.state.greet}</h1>
                 <button className="btn btn-info"  width="200%" height="100px" onClick={this.change.bind(this,"please place your order")}>order </button>
                 <button className="btn btn-success"  width="200%" height="100px" onClick={this.change.bind(this,"Thank you visit again")}>pay </button>
               </>
    }
}
export default Real;