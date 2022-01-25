import React from "react"
import CompA from "./CompA"
let Comp=()=>{
   let emp_name="lavkee"
   let emp_id=42
    return <div>
              <CompA name={emp_name} 
              id={emp_id}/>
            </div>
             

}
export default Comp;