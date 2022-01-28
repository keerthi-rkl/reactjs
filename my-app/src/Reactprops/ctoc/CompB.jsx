import React from "react";
class CompB extends React.Component{
    render(){
        return <>
                 <h3>name:{this.props.name}</h3>
                 <h3>name:{this.props.id}</h3>
                 <h3>name:{this.props.salary}</h3>
               </>
    }
}
export default CompB;