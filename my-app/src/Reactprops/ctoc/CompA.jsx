import React from "react"
import CompB from "./CompB"
class CompA extends React.Component{
    emp_name="Dhana sekhar"
    emp_id=45
    emp_sal="45000"
    render(){
        return<>
               <CompB name={this.emp_name} id={this.emp_id} salary={this.emp_sal} />
             </>
    }
}
export default CompA;